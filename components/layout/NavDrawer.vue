<template>
  <v-navigation-drawer v-model="drawer" clipped fixed app>
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

    <template v-slot:append>
      <div class="pa-2">
        <span
          >&copy;
          <a
            style="color: gray;text-decoration: none"
            href="https://github.com/ElpsyCN/el-bot-web"
            target="_blank"
            >ElpsyCN</a
          ></span
        >
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
import icons from '~/assets/utils/icons'
export default {
  data() {
    return {
      icons,
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
          icon: icons.mdiViewDashboard,
          title: '仪表盘',
          to: '/dashboard'
        },
        {
          icon: icons.mdiConsole,
          title: '控制台',
          to: '/console'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '关于',
          to: '/about'
        }
      ]
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer
      },
      set(val) {
        this.$store.commit('setDrawer', val)
      }
    }
  }
}
</script>
