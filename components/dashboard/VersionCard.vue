<template>
  <v-card outlined :href="dependency.href" target="_blank">
    <v-list-item>
      <v-list-item-avatar tile size="64">
        <v-img :src="dependency.logo"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <div class="title">
          {{ dependency.name }}
        </div>
        <v-list-item-title class="subtitle-1">{{
          dependency.version
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  props: {
    dependency: {
      type: Object,
      default: () => {
        return {
          logo: 'https://cdn.jsdelivr.net/gh/YunYouJun/cdn/img/avatar/none.jpg',
          name: '',
          version: '',
        }
      },
    },
  },
}
</script>

<style></style>
