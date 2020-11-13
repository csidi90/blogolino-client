<template>
<v-container class="d-flex justify-center">
    <v-card width="800" max-width="800">
        <v-card-title class="justify-center">Werde Teil der Blogolino Community
            <v-img aspect-ratio="1" max-width="48" max-height="48" src="sonne.png"></v-img>
        </v-card-title>
        <v-card-subtitle class="text-center">registriere dich kostenlos und leg los!</v-card-subtitle>
        <v-card-text class="mt-5">
            <v-form>
                <v-row>
                    <v-col cols="12" sm="6">
                        <v-text-field filled dense name="name" label="Name" id="firstName">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field filled dense name="name" label="Nachname" id="lastName">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-text-field v-model="email" filled dense name="name" label="Email" id="email">
                        </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field v-model="password" dense filled @click:append="showPassword = !showPassword" :append-icon="showPassword ? 'fas fa-eye' : 'fas fa-eye-slash'" :type="showPassword ? 'text' : 'password'" name="input-10-1" label="Passwort" hint="Mindestens 8 Charaktere" counter></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-text-field dense filled @click:append="showPassword = !showPassword" type="password" name="input-10-1" label="Password bestätigen"></v-text-field>
                    </v-col>

                    <v-col offset-md="6" cols="12" md="6">
                        <v-btn width="48%" class="mr-2" color="error">abbrechen</v-btn>
                        <v-btn width="48%" color="primary" @click="signUp">registrieren</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</v-container>
</template>

<script>
export default {
    transition: "page",
    data: () => ({
        valid: null,
        showPassword: false,
        email: "",
        password: "",
    }),

    methods: {
        async signUp() {
            try {
                await this.$fire.auth.createUserWithEmailAndPassword(
                    this.email,
                    this.password
                );
            } catch (e) {
                handleError(e);
            }
        },
    },
};
</script>

<style>
</style>
