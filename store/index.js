export const state = () => (
  {
    rating: {}
  }
)

export const getters = {
  getRating: state => (name) => {
    return state.rating?.[name] || 0
  }
}

export const mutations = {
  updateRating (state, payload) {
    state.rating[payload.name] = payload.rate
  }
}
