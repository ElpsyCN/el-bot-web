export const state = () => ({
  list: []
})

export const mutations = {
  setList(state, list) {
    state.list = list
  }
}

export const actions = {
  get({ commit, rootState }) {
    this.$axios
      .$get('/groupList', {
        params: {
          sessionKey: rootState.auth.sessionKey
        }
      })
      .then((data) => {
        commit('setList', data)
      })
  }
}
