<template>
  <v-list-item-group color="primary">
    <v-list-item
      v-for="item in list"
      :key="item.id"
      @click="setTarget(item.id)"
    >
      <item-avatar :id="item.id" type="group"></item-avatar>

      <v-list-item-content>
        <v-list-item-title
          :title="item.id"
          v-text="item.name"
        ></v-list-item-title>
      </v-list-item-content>

      <v-list-item-icon>
        <v-icon
          :color="getColorByPermission(item.permission)"
          :title="getRoleByPermission(item.permission)"
        >
          $mdiAccount
        </v-icon>
      </v-list-item-icon>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
import { mapState } from 'vuex'
import ItemAvatar from '~/components/list/ItemAvatar'
export default {
  components: {
    ItemAvatar,
  },
  computed: {
    ...mapState('groups', ['list']),
  },
  mounted() {
    this.$store.dispatch('groups/get')
  },
  methods: {
    setTarget(target) {
      this.$store.commit('messages/setType', 'group')
      this.$store.commit('messages/setTarget', target)
    },
    getColorByPermission(permission) {
      let color = 'gray'
      switch (permission) {
        case 'OWNER':
          color = 'orange'
          break
        case 'ADMINISTRATOR':
          color = 'green'
          break
        case 'MEMBER':
          color = 'gray'
          break
        default:
          break
      }
      return color
    },
    getRoleByPermission(permission) {
      let role = 'gray'
      switch (permission) {
        case 'OWNER':
          role = '裙主'
          break
        case 'ADMINISTRATOR':
          role = '🐶管理'
          break
        case 'MEMBER':
          role = '人民群众'
          break
        default:
          break
      }
      return role
    },
  },
}
</script>
