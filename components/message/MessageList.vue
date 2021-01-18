<!-- v-for="(message, i) in $store.state.messages.list" -->

<template>
  <v-card outlined height="55vh" class="message-list-container">
    <v-timeline dense align-top reverse="" style="height: 55vh; overflow: auto">
      <v-timeline-item
        v-for="(item, i) in $store.state.messages.list.slice()"
        :key="i"
        class="message-item"
      >
        <template #icon>
          <v-avatar size="40">
            <img :src="getAvatarById($store.state.auth.qq, 'qq', 100)" />
          </v-avatar>
        </template>
        <template #opposite>
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
  </v-card>
</template>

<script>
import { getAvatarById } from '~/assets/utils/index'
export default {
  methods: {
    getAvatarById,
  },
}
</script>

<style lang="scss">
.message-list-container {
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  overflow-y: auto;
}
.message-item {
  justify-content: flex-end;
}
</style>
