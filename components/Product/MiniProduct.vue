<template>
<v-card class="mx-auto" max-width="400">
    <v-img class="white--black align-start" height="200px" src="family_hero.png">
    </v-img>
    <v-card-title>{{ shopname }}</v-card-title>

    <v-card-subtitle class="text--primary pb-0">
        <div>{{ location }}</div>
        <div>{{ age }} Jahre</div>
    </v-card-subtitle>

    <v-card-text class="mt-5 text--primary">
        <p>{{ philosophy }}</p>
    </v-card-text>

    <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text> Zum Shop </v-btn>
    </v-card-actions>
</v-card>
</template>

<script>
export default {
    props: ["shopname", "location", "age", "philosophy"],
    created() {
        console.log(this.philosophy);
    },
};
</script>

<style>
</style>
