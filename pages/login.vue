<template>
  <v-flex class="text-center">
    <bot-logo class="mx-auto"></bot-logo>
    <v-alert
      border="left"
      colored-border
      color="deep-purple accent-4"
      elevation="2"
      class="pl-4 -text-left"
    >
      如果您想要使用 http（譬如懒得签发 https 证书，想要直接使用
      http://IP地址:端口号），请访问
      <a href="http://bot.elpsy.cn">http://bot.elpsy.cn</a>，而不是
      <a href="https://bot.elpsy.cn">https://bot.elpsy.cn</a>。
    </v-alert>
    <v-card class="mx-auto" max-width="500" :loading="loading">
      <v-form ref="form" v-model="valid" class="pa-3">
        <v-text-field
          v-model="apiUrl"
          :rules="apiUrlRules"
          label="API URL"
          placeholder="http:// or https://"
          required
        ></v-text-field>
        <v-text-field
          v-model="authKey"
          :rules="authKeyRules"
          label="Auth Key"
          required
        ></v-text-field>
        <v-text-field
          v-model="qq"
          :rules="qqRules"
          label="QQ"
          required
        ></v-text-field>

        <v-checkbox
          v-model="checkbox"
          :rules="[(v) => !!v || '请确保您已知悉。']"
          label="本应用代码全部开源且为纯静态页面，只会将数据存储在您的本地，不会上传任何内容。为保证安全，请最好不用使用默认 authKey。相关账号安全问题，概不负责。"
          required
        ></v-checkbox>

        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="login">
          登录
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          重置
        </v-btn>
      </v-form>
    </v-card>
  </v-flex>
</template>

<script>
import BotLogo from '~/components/BotLogo'
export default {
  middleware: 'logged',
  components: {
    BotLogo
  },
  data() {
    return {
      loading: false,
      valid: false,
      apiUrl: process.env.API_BASE_URL || '',
      apiUrlRules: [(v) => !!v || 'API URL 是必须的'],
      authKey: process.env.AUTH_KEY || '',
      authKeyRules: [
        (v) => !!v || 'authKey 是用来验证的',
        (v) => (v && v.length >= 8) || 'authKey 最短为 8 位'
      ],
      qq: process.env.QQ || '',
      qqRules: [
        (v) => !!v || 'QQ 你总得填吧',
        (v) => /^[1-9][0-9]{4,9}$/gi.test(v) || '不是有效的 QQ 号'
      ],
      checkbox: false
    }
  },
  methods: {
    async login() {
      this.loading = true
      await this.$store.dispatch('auth/login', {
        apiUrl: this.apiUrl,
        authKey: this.authKey,
        qq: this.qq
      })
      this.loading = false
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
