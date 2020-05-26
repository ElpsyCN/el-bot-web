<template>
  <div>
    <v-row>
      <v-col cols="12" sm="6">
        <v-card outlined>
          <v-list-item>
            <v-list-item-avatar tile size="64">
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
      </v-col>
      <v-col cols="12" sm="6">
        <v-card outlined>
          <v-list-item>
            <v-list-item-avatar tile size="64">
              <v-img src="/robot-line.svg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <div class="title">El Bot Web</div>
              <v-list-item-title class="subtitle-1"
                >v{{ botVersion }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="3">
        <message-list></message-list>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import MessageList from '~/components/MessageList'
import pkg from '~/package.json'
export default {
  middleware: 'auth',
  components: {
    MessageList
  },
  data() {
    return {
      version: '',
      botVersion: pkg.version || ''
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
