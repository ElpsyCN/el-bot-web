<template>
  <div>
    <v-card outlined>
      <v-list-item>
        <v-list-item-avatar tile size="64" color="grey">
          <v-img
            src="https://raw.githubusercontent.com/mamoe/mirai/master/docs/mirai.png"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <div class="title">Mirai HTTP API</div>
          <v-list-item-title class="subtitle-1">{{
            version
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      version: 'Null'
    }
  },
  mounted() {
    this.getMiraiAPIHTTPVersion()
  },
  methods: {
    getMiraiAPIHTTPVersion() {
      this.$axios.$get('/about').then((res) => {
        this.version = res.data.version
      })
    }
  },
  head: {
    title: '控制台'
  }
}
</script>
