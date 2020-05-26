export const state = () => ({
  avatar: 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/avatar/none.jpg'
})

export const mutations = {
  setAvatar(state, avatar) {
    state.avatar = avatar
  }
}

export const actions = {
  me({ commit, rootState }) {
    commit(
      'setAvatar',
      `https://q1.qlogo.cn/g?b=qq&nk=${rootState.auth.qq}&s=40`
    )
  }
}
