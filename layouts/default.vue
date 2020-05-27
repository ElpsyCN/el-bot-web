<template>
  <v-app dark>
    <nav-drawer></nav-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="$store.dispatch('toggleDrawer')" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-avatar v-if="$store.state.auth.qq" size="40" class="mr-3">
        <v-img
          :src="getAvatarById($store.state.auth.qq, 'qq', 100)"
          :title="$store.state.auth.qq"
        ></v-img>
      </v-avatar>
      <v-btn
        v-if="$store.state.auth.sessionKey"
        @click="$store.dispatch('auth/logout')"
        >退出</v-btn
      >
      <v-btn v-else nuxt to="/login">登录</v-btn>
      <v-btn
        class="ml-2"
        icon
        @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark"
      >
        <v-icon>{{ icons.mdiInvertColors }}</v-icon>
      </v-btn>
      <v-progress-linear
        :active="$store.state.loading"
        indeterminate
        absolute
        bottom
      ></v-progress-linear>
    </v-app-bar>
    <v-content>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import icons from '~/assets/utils/icons'
import { getAvatarById } from '~/assets/utils/index'
import NavDrawer from '~/components/layout/NavDrawer'
export default {
  components: {
    NavDrawer
  },
  data() {
    return {
      icons,
      title: 'El Bot'
    }
  },
  methods: {
    getAvatarById
  }
}
</script>
