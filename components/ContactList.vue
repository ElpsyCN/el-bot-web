<template>
  <v-card>
    <v-toolbar color="primary" dark flat>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>{{ listName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list class="py-0" height="74vh" style="overflow:auto">
      <friend-list v-if="activePanel === 'friends'"></friend-list>
      <group-list v-if="activePanel === 'groups'"></group-list>
    </v-list>
    <v-bottom-navigation v-model="activePanel" shift grow color="primary">
      <v-btn value="friends">
        <span>好友列表</span>
        <v-icon>{{ icons.mdiAccount }}</v-icon>
      </v-btn>
      <v-btn value="groups">
        <span>群列表</span>
        <v-icon>{{ icons.mdiAccountMultiple }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script>
import icons from '~/assets/utils/icons'
import FriendList from '~/components/list/FriendList'
import GroupList from '~/components/list/GroupList'
export default {
  components: {
    FriendList,
    GroupList
  },
  data() {
    return {
      icons,
      listName: '列表',
      switch: false,
      activePanel: 'groups'
    }
  }
}
</script>
