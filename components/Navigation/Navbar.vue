<template>
  <div class="mb-10">
    <v-app-bar app height="100%" color="white">
      <nuxt-link class="banner" exact to="/">
        <h1 class="display-1 mr-10">Blogolino</h1>
      </nuxt-link>
      <v-row no-gutters class="fill-height">
        <v-col class="fill-height ma-0 pa-0 hidden-sm-and-down">
          <v-toolbar-items>
            <v-btn
              class="mx-4"
              v-for="item in menuItems"
              :key="item.path"
              :to="item.path"
              text
            >
              <v-icon small class="mr-2">fa-{{ item.icon }}</v-icon>
              {{ item.title }}
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn v-show="!authenticated" text to="login">
              <v-icon small class="mr-2">fa-lock-open</v-icon>anmelden
            </v-btn>
            <v-btn v-show="!authenticated" text to="signup">
              <v-icon small class="mr-2">fa-user-plus</v-icon>registrieren
            </v-btn>
          </v-toolbar-items>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer app right v-model="drawer">
      <v-list dense>
        <v-list-item v-show="!authenticated" link to="login">
          <v-list-item-icon>
            <v-icon small>fa-lock-open</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item v-show="!authenticated" link to="signup">
          <v-list-item-icon>
            <v-icon small>fa-user-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Registrieren</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          link
        >
          <v-list-item-icon>
            <v-icon small>fa-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    menuItems: [
      {
        title: "Kategorien",
        path: "categories",
        icon: "list-ul"
      },
      {
        title: "Stöbern",
        path: "browse",
        icon: "search"
      },
      {
        title: "Tipps",
        path: "tips",
        icon: "thumbs-up"
      },
      {
        title: "Packages",
        path: "packages",
        icon: "cube"
      },
      {
        title: "Favoriten",
        path: "favourites",
        icon: "star"
      },
      {
        title: "So funktioniert`s",
        path: "howto",
        icon: "question"
      }
    ]
  }),
  methods: {},
  computed: {
    authenticated: function() {
      if (this.$store.state.user.user) {
        console.log("user not null");
        return true;
      } else {
        console.log("user null");
        return false;
      }
    }
  }
};
</script>

<style scoped>
.v-btn--active {
  background: transparent;
}

.v-btn::before {
  background-color: transparent;
}

.banner {
  text-decoration: none;
}
</style>
