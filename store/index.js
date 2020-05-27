export const state = () => ({
  loading: false
})

export const mutations = {
  setLoading(state, loading) {
    state.loading = loading
  }
}
