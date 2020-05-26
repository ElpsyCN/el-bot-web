export const state = () => ({
  message: '',
  target: 0,
  type: 'group'
})

export const mutations = {
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
  send({ state }) {
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
    } else if (state.type === 'friend') {
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
    }
  }
}
