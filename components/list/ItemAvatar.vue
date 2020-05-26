<template>
  <v-list-item-avatar>
    <v-img :src="img"></v-img>
  </v-list-item-avatar>
</template>

<script>
import { getAvatarById } from '~/assets/utils/index'
export default {
  props: {
    id: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'qq'
    },
    size: {
      type: Number,
      default: 100
    }
  },
  computed: {
    img() {
      return getAvatarById(this.id, this.type, this.size)
    }
  }
}
</script>
