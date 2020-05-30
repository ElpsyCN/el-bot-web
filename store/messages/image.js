export const state = () => ({
  urls: [],
  dialog: false,
  uploadInfo: {
    imageId: '',
    path: '',
    url: ''
  }
})

export const mutations = {
  setDialog(state, dialog) {
    state.dialog = dialog
  },
  setUrls(state, urls) {
    state.urls = urls
  },
  setUploadInfo(state, uploadInfo) {
    state.uploadInfo = uploadInfo
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
  },
  async upload({ commit }, form) {
    const options = {
      method: 'POST',
      headers: {
        post: { 'Content-Type': 'multipart/form-data' }
      },
      data: form,
      url: '/uploadImage'
    }
    await this.$axios(options).then((res) => {
      if (res.status === 200) {
        commit('setUploadInfo', res.data)
        commit('setDialog', true)
      }
    })
  }
}
