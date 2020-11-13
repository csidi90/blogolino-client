<template>
<v-footer color="primary lighten-1" padless>
    <v-row justify="center" no-gutters>
        <v-btn v-for="link in links" :key="link" color="black" text rounded class="my-2">
            {{ link }}
        </v-btn>
        <v-col class="primary lighten-2 py-4 text-center black--text" cols="12">
            {{ new Date().getFullYear() }} — <strong>Blogolino GmbH</strong>
        </v-col>
    </v-row>
</v-footer>
</template>

<script>
export default {
    data: () => ({
        links: [
            "Kundenservice",
            "Über Blogolino",
            "Partnerprogramm",
            "Team",
            "Newsletter",
            "Kontakt",
            "Impressum",
        ],
    }),
};
</script>

<style>
</style>
