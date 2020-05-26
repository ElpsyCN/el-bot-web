<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center mb-3">
        <bot-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          欢迎使用 El Bot！
        </v-card-title>
        <v-card-text>
          <vue-markdown>{{ intro }}</vue-markdown>
          <hr class="my-3" />
          <v-list>
            <v-list-item
              href="https://github.com/mamoe/mirai-api-http"
              target="_blank"
            >
              <v-list-item-icon>
                <v-icon>{{ icons.mdiApi }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>接口文档</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              href="https://github.com/ElpsyCN/el-bot-web"
              target="_blank"
            >
              <v-list-item-icon>
                <v-icon>{{ icons.mdiGithub }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>项目代码</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item
              href="https://github.com/ElpsyCN/el-bot-web/issues"
              target="_blank"
            >
              <v-list-item-icon>
                <v-icon>{{ icons.mdiBug }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>问题反馈</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn class="mb-5" color="primary" nuxt to="/console">
            Link Start
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import BotLogo from '~/components/BotLogo.vue'
import icons from '~/assets/utils/icons'
export default {
  components: {
    BotLogo,
    VueMarkdown
  },
  data() {
    return {
      icons,
      intro:
        '[El-Bot-Web](https://github.com/ElpsyCN/el-bot-web) 是一个基于 [mirai-api-http](https://github.com/mamoe/mirai-api-http) 实现的 Web 端机器人控制台。'
    }
  },
  head: {
    title: '欢迎使用'
  }
}
</script>
