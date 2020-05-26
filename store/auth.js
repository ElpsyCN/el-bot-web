const prefix = 'el-bot-'

export const state = () => ({
  apiUrl: localStorage.getItem(prefix + 'apiUrl') || '',
  authKey: localStorage.getItem(prefix + 'authKey') || '',
  qq: localStorage.getItem(prefix + 'qq') || 0,
  sessionKey: localStorage.getItem(prefix + 'sessionKey') || '',
  verify: localStorage.getItem(prefix + 'verify') || false
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
    verify
      ? localStorage.setItem(prefix + 'verify', verify)
      : localStorage.removeItem(prefix + 'verify')
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
        if (res.code === 0) {
          commit('setVerify', true)
          this.$toast.success('Session 验证成功')
        } else {
          this.$toast.info('尝试获取新的 Session')
          this.dispatch('auth', state.authKey)
        }
      })
  },
  auth({ commit, dispatch }, authKey) {
    this.$axios
      .$post('/auth', {
        authKey
      })
      .then((data) => {
        if (data.code === 0) {
          commit('setSessionKey', data.session)
          dispatch('verify')
          this.$toast.success('连接成功')
          this.$router.back()
        }
      })
  },
  login({ commit, dispatch }, params) {
    commit('setApiUrl', params.apiUrl)
    commit('setAuthKey', params.authKey)
    commit('setQq', params.qq)
    this.$axios.setBaseURL(params.apiUrl)
    dispatch('auth', params.authKey)
  },
  async release({ commit, state }) {
    await this.$axios
      .$post('/release', {
        sessionKey: state.sessionKey,
        qq: state.qq
      })
      .then((data) => {
        if (data.code === 0) {
          this.$toast.success('已退出账号')
        }
      })
    commit('setSessionKey', '')
  },
  logout({ commit, dispatch }) {
    dispatch('release')
    commit('setApiUrl', '')
    commit('setAuthKey', '')
    commit('setQq', 0)
    commit('setVerify', false)
  }
}
