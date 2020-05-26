<template>
  <v-list class="py-0" height="520" dense style="overflow:auto">
    <v-list-item-group>
      <v-list-item v-for="item in list" :key="item.id">
        <v-list-item-content>
          <v-list-item-title v-text="item.name"></v-list-item-title>
        </v-list-item-content>

        <v-list-item-icon>
          <v-icon
            :color="getColorByPermission(item.permission)"
            :title="getRoleByPermission(item.permission)"
          >
            {{ icons.mdiAccountMultiple }}
          </v-icon>
        </v-list-item-icon>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapState } from 'vuex'
import icons from '~/assets/utils/icons'
export default {
  data() {
    return {
      icons
    }
  },
  computed: {
    ...mapState('groups', ['list'])
  },
  mounted() {
    this.$store.dispatch('groups/get')
  },
  methods: {
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
    }
  }
}
</script>
