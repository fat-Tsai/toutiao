import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tokenInfo: {
      token: localStorage.getItem('token') || '',
      refresh_token: localStorage.getItem('refresh_token') || ''
    }
  },
  getters: {
  },
  mutations: {
    updateTokenInfo(state, payload) {
      state.tokenInfo = payload
      this.commit('saveStateToStorage')
    },
    saveStateToStorage(state) {
      localStorage.setItem('token', state.tokenInfo.token)
      localStorage.setItem('refresh_token', state.tokenInfo.refresh_token)
    }
  },
  actions: {
  },
  modules: {
  }
})
