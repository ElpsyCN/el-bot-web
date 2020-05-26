<template>
  <v-list class="py-0" height="520" style="overflow:auto">
    <v-list-item-group>
      <v-list-item v-for="item in list" :key="item.id">
        <v-list-item-content>
          <v-list-item-title v-text="item.nickname"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-icon>
          <v-list-item-title v-text="item.id"></v-list-item-title>
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
    ...mapState('friends', ['list'])
  },
  mounted() {
    this.$store.dispatch('friends/get')
  }
}
</script>
