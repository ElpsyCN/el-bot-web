<template>
  <v-card outlined>
    <v-toolbar color="primary" dark flat>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-toolbar-title>{{ listName }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>$mdiMagnify</v-icon>
      </v-btn>
    </v-toolbar>
    <v-list class="py-0" height="74vh" style="overflow: auto">
      <friend-list v-if="activePanel === 'friends'"></friend-list>
      <group-list v-if="activePanel === 'groups'"></group-list>
    </v-list>
    <v-bottom-navigation
      v-model="activePanel"
      shift
      grow
      color="primary"
      style="box-shadow: none"
    >
      <v-btn value="friends">
        <span>好友列表</span>
        <v-icon>$mdiAccount</v-icon>
      </v-btn>
      <v-btn value="groups">
        <span>群列表</span>
        <v-icon>$mdiAccountMultiple</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-card>
</template>

<script>
import FriendList from '~/components/list/FriendList'
import GroupList from '~/components/list/GroupList'
export default {
  components: {
    FriendList,
    GroupList,
  },
  data() {
    return {
      listName: '列表',
      switch: false,
      activePanel: 'groups',
    }
  },
}
</script>
