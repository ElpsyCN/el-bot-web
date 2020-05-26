<template>
  <v-list-item-group color="primary">
    <v-list-item
      v-for="item in list"
      :key="item.id"
      @click="setTarget(item.id)"
    >
      <item-avatar :id="item.id" type="qq"></item-avatar>
      <v-list-item-content>
        <v-list-item-title
          :title="item.id"
          v-text="item.nickname"
        ></v-list-item-title>
      </v-list-item-content>
      <v-list-item-icon>
        <v-list-item-title v-text="item.remark"></v-list-item-title>
      </v-list-item-icon>
    </v-list-item>
  </v-list-item-group>
</template>

<script>
import { mapState } from 'vuex'
import icons from '~/assets/utils/icons'
import ItemAvatar from '~/components/list/ItemAvatar'
export default {
  components: {
    ItemAvatar
  },
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
  },
  methods: {
    setTarget(target) {
      this.$store.commit('messages/setType', 'friend')
      this.$store.commit('messages/setTarget', target)
    }
  }
}
</script>
