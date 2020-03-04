import Cookie from 'js-cookie'

const state = {
  roles: [],
  token: Cookie.get('token')
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}
const actions = {
  login({ commit }, userInfo) {
    const { token } = userInfo
    return new Promise((resolve) => {
      Cookie.set('token', token)
      commit('SET_TOKEN', token)
      resolve()
    })
  },
  getInfo({ commit }) {
    return new Promise((resolve) => {
      let roles = ['editor', 'other', 'admin']
      commit('SET_ROLES', roles)
      resolve(roles)
    })
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
