export const state = () => ({
  message: '',
  list: [],
  target: 0,
  type: 'group'
})

export const mutations = {
  add(state, message) {
    state.list.push(message)
    console.log(message)
  },
  setMessage(state, message) {
    state.message = message
  },
  setTarget(state, target) {
    state.target = target
  },
  setType(state, type) {
    state.type = type
  }
}

export const actions = {
  sendFriendMessage({ state }, messageChain) {
    this.$axios
      .$post('/sendFriendMessage', {
        target: state.target,
        messageChain
      })
      .then((data) => {
        if (data.code === 0) {
          this.$toast.success('发送成功')
        }
      })
  },
  sendGroupMessage({ state }, messageChain) {
    this.$axios
      .$post('/sendGroupMessage', {
        target: state.target,
        messageChain
      })
      .then((data) => {
        if (data.code === 0) {
          this.$toast.success('发送成功')
        }
      })
  },
  send({ commit, dispatch, rootState, state }) {
    if (!state.target) {
      this.$toast.error('请选中你想要发送的群或好友')
      return
    }
    const messageChain = []
    messageChain.push({
      type: 'Plain',
      text: state.message
    })
    if (state.type === 'group') {
      dispatch('sendGroupMessage', messageChain)
    } else if (state.type === 'friend') {
      dispatch('sendFriendMessage', messageChain)
    }
    commit('add', {
      sender: {
        id: rootState.auth.qq
      },
      messageChain
    })
    commit('setMessage', '')
  }
}
