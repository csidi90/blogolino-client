export const state = () => ({
  user: undefined
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user.toJSON()
    console.log('SET_USER', state.user)
  }
}
