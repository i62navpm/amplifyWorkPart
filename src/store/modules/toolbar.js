export default {
  state: {
    extended: false,
    loading: false,
  },
  mutations: {
    setExtended: (state, value) => (state.extended = value),
    setLoading: (state, value) => (state.loading = value),
  },
  actions: {
    startLoading: ({ commit }) => commit('setLoading', true),
    stopLoading: ({ commit }) => commit('setLoading', false),
  },
  getters: {
    getExtended: state => state.extended,
    getLoading: state => state.loading,
  },
}
