export const state = () => ({
  user: undefined,
  userDetails: undefined,
  signup_error: '',
  signin_error: ''
})

export const mutations = {
  SET_USER (state, user) {
    state.user = user
    console.log('user', state.user)
  },
  SET_USERDETAILS (state, userDetails) {
    state.userDetails = userDetails
    console.log('userDetails', state.userDetails)
  },
  SET_ERROR (state, erorr) {
    if (error.action == 'signup') {
      state.signup_error = error.message
    }
  }
}

export const actions = {
  async SIGN_IN ({ commit, state }, payload) {
    try {
      let result = await this.$fire.auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )

      if (this.$fire.auth.currentUser) {
        commit('SET_USER', this.$fire.auth.currentUser.toJSON())

        let querySnapshot = await this.$fire.firestore
          .collection('users')
          .where('userID', '==', state.user.uid)
          .get()

        for (const doc of querySnapshot.docs) {
          commit('SET_USERDETAILS', doc.data())
        }
        this.$router.push('/')
      }
    } catch (e) {
      commit(SET_ERROR, { type: 'signin', message: e.message })
      console.log(e)
    }
  },
  async SIGN_UP ({ commit }, payload) {
    try {
      let response = await this.$fire.auth.createUserWithEmailAndPassword(
        payload.email,
        payload.password
      )

      if (response.user) {
        let uid = response.user.uid
        let userCollection = this.$fire.firestore.collection('users').doc()

        await userCollection.set({
          userID: uid,
          firstname: payload.firstName,
          lastname: payload.lastName
        })

        this.$router.push('/')
      }
    } catch (e) {
      commit(SET_ERROR, { type: 'sigup', message: e.message })
      console.log(e)
    }
  },
  SAVE_USERDETAILS ({ commit }, userDetails) {},
  UPDATE_USERDETAILS ({ commit }, userDetails) {}
}
