export const state = () => ({
  message: '',
  list: [],
  target: 0,
  type: 'group',
})

export const mutations = {
  add(state, message) {
    state.list.push(message)
  },
  remove(state, messageId) {
    state.list = state.list.filter((msg) => messageId !== msg.id)
  },
  setMessage(state, message) {
    state.message = message
  },
  setTarget(state, target) {
    state.target = target
  },
  setType(state, type) {
    state.type = type
  },
}

export const actions = {
  async sendFriendMessage({ state }, messageChain) {
    const data = await window.$mirai.api.sendFriendMessage(
      messageChain,
      state.target
    )
    if (data.code === 0) {
      this.$toast.success('发送成功')
      return data.messageId
    }
  },
  async sendGroupMessage({ state }, messageChain) {
    const data = await window.$mirai.api.sendGroupMessage(
      messageChain,
      state.target
    )
    if (data.code === 0) {
      this.$toast.success('发送成功')
      return data.messageId
    }
  },
  // 发送消息
  async send({ commit, dispatch, rootState, state }) {
    if (!state.target) {
      this.$toast.error('请选中你想要发送的群或好友')
      return
    }
    const messageChain = []
    messageChain.push({
      type: 'Plain',
      text: state.message,
    })
    let messageId = 0
    if (state.type === 'group') {
      messageId = await dispatch('sendGroupMessage', messageChain)
    } else if (state.type === 'friend') {
      messageId = await dispatch('sendFriendMessage', messageChain)
    }
    commit('add', {
      id: messageId,
      sender: {
        id: rootState.auth.qq,
      },
      target: state.target,
      type: state.type,
      messageChain,
    })
    commit('setMessage', '')
  },
  // 撤回消息
  recall({ commit }, target) {
    this.$axios
      .$post('/recall', {
        target,
      })
      .then((data) => {
        if (data.code === 0) {
          this.$toast.success('撤回成功')
          commit('remove', target)
        }
      })
  },
}
