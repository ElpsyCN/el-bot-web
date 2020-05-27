<!-- v-for="(message, i) in $store.state.messages.list" -->

<template>
  <div>
    <v-timeline dense align-top reverse="">
      <v-timeline-item
        v-for="(item, i) in $store.state.messages.list.slice().reverse()"
        :key="i"
      >
        <template v-slot:icon>
          <v-avatar size="40">
            <img :src="getAvatarById($store.state.auth.qq, 'qq', 100)" />
          </v-avatar>
        </template>
        <template v-slot:opposite>
          <span>{{ item.sender.id }}</span>
        </template>
        <v-card v-if="item.messageChain">
          <v-card-text>{{ item.messageChain[0].text }}</v-card-text>
          <v-card-actions class="justify-end">
            <v-btn small @click="$store.dispatch('messages/recall', item.id)">
              撤回
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </div>
</template>

<script>
import { getAvatarById } from '~/assets/utils/index'
export default {
  methods: {
    getAvatarById
  }
}
</script>

<style></style>
