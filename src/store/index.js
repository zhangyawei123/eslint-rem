import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'lala'
  },
  mutations: {
    increment(state, type) {
      state.name = type
    }
  }
})