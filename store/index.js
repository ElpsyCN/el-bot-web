export const state = () => ({
  drawer: false,
  loading: false
})

export const mutations = {
  setDrawer(state, drawer) {
    state.drawer = drawer
  },
  setLoading(state, loading) {
    state.loading = loading
  }
}

export const actions = {
  toggleDrawer({ commit, state }) {
    commit('setDrawer', !state.drawer)
  }
}
