export default {
  state: {
    extended: false,
  },
  mutations: {
    setExtended: (state, value) => {
      state.extended = value
    },
  },
  getters: {
    getExtended: state => state.extended,
  },
}
