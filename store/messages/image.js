export const state = () => ({
  urls: []
})

export const mutations = {
  setUrls(state, urls) {
    state.urls = urls
  }
}

export const actions = {
  async send({ commit, rootState, state }, urls) {
    commit('setUrls', urls)
    await this.$axios
      .$post('/sendImageMessage', {
        target: rootState.messages.target,
        urls: state.urls
      })
      .then((res) => {
        this.$toast.success('图片发送成功')
        this.$toast.success(res)
      })
  }
}
