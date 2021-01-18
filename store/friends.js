export const state = () => ({
  list: [],
})

export const mutations = {
  setList(state, list) {
    state.list = list
  },
}

export const actions = {
  async get({ commit }) {
    const data = await window.$mirai.api.friendList()
    commit('setList', data)
  },
}
