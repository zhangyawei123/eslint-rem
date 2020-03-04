import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    name: 'lala'
  },
  mutations: {
    increment(state, type) {
      state.name = type
    }
  },
  modules: {
    user,
    permission
  },
  getters
})

export default store
