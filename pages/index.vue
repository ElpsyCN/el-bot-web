<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-center mb-3">
        <bot-logo />
      </div>
      <v-card>
        <v-card-title class="headline"> 欢迎使用 El Bot！ </v-card-title>
        <v-card-text>
          <nuxt-content :document="intro" />
          <hr class="my-3" />
          <v-list>
            <v-list-item
              v-for="(listItem, i) in listItems"
              :key="i"
              :href="listItem.url"
              target="_blank"
            >
              <v-list-item-icon>
                <v-icon> {{ listItem.icon }} </v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ listItem.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>
        <v-card-actions class="justify-center">
          <v-btn class="mb-5" color="primary" nuxt to="/dashboard">
            Link Start
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import BotLogo from '~/components/BotLogo.vue'
export default {
  components: {
    BotLogo,
  },
  async asyncData({ $content }) {
    const intro = await $content('intro').fetch()

    return {
      intro,
    }
  },
  data() {
    return {
      listItems: [
        {
          url: 'https://docs.bot.elpsy.cn/',
          icon: '$mdiBook',
          title: '项目文档',
        },
        {
          url: 'https://github.com/ElpsyCN/el-bot-web',
          icon: '$mdiGithub',
          title: '项目代码',
        },
        {
          url: 'https://github.com/ElpsyCN/el-bot-web/issues',
          icon: '$mdiBug',
          title: '问题反馈',
        },
      ],
    }
  },
  head: {
    title: '欢迎使用',
  },
}
</script>
