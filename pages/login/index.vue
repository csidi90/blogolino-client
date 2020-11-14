<template>
  <v-container class="d-flex justify-center">
    <v-card width="800" max-width="800">
      <v-card-title class="justify-center"
        >Anmelden
        <v-img
          aspect-ratio="1"
          max-width="48"
          max-height="48"
          src="sonne.png"
        ></v-img>
      </v-card-title>
      <v-card-subtitle class="text-center"
        >Schön das dud wieder da bist!</v-card-subtitle
      >
      <v-card-text class="mt-5">
        <v-form>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field
                v-model="email"
                filled
                dense
                name="email"
                label="Email"
                id="email"
              >
              </v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-text-field
                v-model="password"
                type="password"
                dense
                filled
                label="Passwort"
              ></v-text-field>
            </v-col>

            <v-col
              class="d-flex justify-end"
              offset-sm=" 6"
              offset-md="6"
              cols="12"
              md="6"
            >
              <v-btn class="mr-2" color="error">abbrechen</v-btn>
              <v-btn @click="signIn" color="primary">anmelden</v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  transition: "page",
  data: () => ({
    email: "csidiropoulos1990@gmail.com",
    password: "dfgvbn"
  }),
  methods: {
    async signIn() {
      try {
        let result = await this.$fire.auth.signInWithEmailAndPassword(
          this.email,
          this.password
        );

        if (this.$fire.auth.currentUser) {
          this.$store.commit(
            "user/SET_USER",
            this.$fire.auth.currentUser.toJSON()
          );
          this.$router.push("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  async created() {
    /*
                                                                                        try {
                                                                                            let result = await this.$fire.auth.signInWithEmailAndPassword(
                                                                                                this.email,
                                                                                                this.password
                                                                                            );

                                                                                            let usersCollection = await this.$fire.firestore
                                                                                                .collection("users")
                                                                                                .get();
                                                                                            for (const doc of usersCollection.docs) {
                                                                                                console.log(doc.id, "=>", doc.data());
                                                                                            }
                                                                                        } catch (error) {
                                                                                            console.log(error);
                                                                                        }*/
  }
};
</script>

<style></style>
