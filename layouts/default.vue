<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar clipped-left fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn icon @click.stop="$vuetify.theme.dark = !$vuetify.theme.dark">
        <v-icon>{{ icons.mdiInvertColors }}</v-icon>
      </v-btn>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer app>
      <span
        >&copy;
        <a
          style="color: gray;text-decoration: none"
          href="https://github.com/ElpsyCN/el-bot-web"
          >ElpsyCN</a
        ></span
      >
    </v-footer>
  </v-app>
</template>

<script>
import icons from '~/assets/utils/icon'
export default {
  data() {
    return {
      icons,
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: '欢迎',
          to: '/'
        },
        {
          icon: icons.mdiCircleOutline,
          title: '开始',
          to: '/start'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '关于',
          to: '/about'
        }
      ],
      miniVariant: false,
      title: 'El Bot'
    }
  }
}
</script>
