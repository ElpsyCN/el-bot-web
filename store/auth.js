const prefix = 'el-bot-'

export const state = () => ({
  apiUrl: localStorage.getItem(prefix + 'apiUrl') || '',
  authKey: localStorage.getItem(prefix + 'authKey') || '',
  qq: localStorage.getItem(prefix + 'qq') || 0,
  sessionKey: localStorage.getItem(prefix + 'sessionKey') || '',
  verify: false
})

export const mutations = {
  setApiUrl(state, apiUrl) {
    state.apiUrl = apiUrl
    apiUrl
      ? localStorage.setItem(prefix + 'apiUrl', apiUrl)
      : localStorage.removeItem(prefix + 'apiUrl')
  },
  setAuthKey(state, authKey) {
    state.authKey = authKey
    authKey
      ? localStorage.setItem(prefix + 'authKey', authKey)
      : localStorage.removeItem(prefix + 'authKey')
  },
  setQq(state, qq) {
    state.qq = qq
    qq
      ? localStorage.setItem(prefix + 'qq', qq)
      : localStorage.removeItem(prefix + 'qq')
  },
  setSessionKey(state, sessionKey) {
    state.sessionKey = sessionKey
    sessionKey
      ? localStorage.setItem(prefix + 'sessionKey', sessionKey)
      : localStorage.removeItem(prefix + 'sessionKey')
  },
  setVerify(state, verify) {
    state.verify = verify
  }
}

export const actions = {
  verify({ commit, state }) {
    this.$axios
      .$post('/verify', {
        sessionKey: state.sessionKey,
        qq: state.qq
      })
      .then((res) => {
        console.log(res.code, res.msg)
        if (res.code === 0) {
          commit('setVerify', true)
        }
      })
  },
  login({ commit, dispatch }, params) {
    commit('setApiUrl', params.apiUrl)
    commit('setAuthKey', params.authKey)
    commit('setQq', params.qq)
    this.$axios.setBaseURL(params.apiUrl)
    this.$axios
      .$post('/auth', {
        authKey: params.authKey
      })
      .then((data) => {
        commit('setSessionKey', data.session)
        console.log(data.session)
        console.log({
          sessionKey: data.session,
          qq: params.qq
        })
        dispatch('verify')
      })
  },
  release({ commit, state }) {
    this.$axios
      .$post('/release', {
        sessionKey: state.sessionKey,
        qq: state.qq
      })
      .then((res) => {
        console.log(res)
        this.$toast.success('已退出账号')
      })
    commit('setSessionKey', '')
  },
  logout({ commit, dispatch }) {
    dispatch('release')
    commit('setApiUrl', '')
    commit('setAuthKey', '')
    commit('setQq', 0)
  }
}
