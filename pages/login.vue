<template>
  <v-flex class="text-center">
    <bot-logo class="mx-auto"></bot-logo>
    <v-card class="mx-auto pa-3" max-width="500">
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="apiUrl"
          :rules="apiUrlRules"
          label="API URL"
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
      valid: false,
      apiUrl: process.env.API_BASE_URL || '',
      apiUrlRules: [(v) => !!v || 'authKey is required'],
      authKey: process.env.authKey || 'ELPSY-BOT',
      authKeyRules: [
        (v) => !!v || 'authKey is required',
        (v) => (v && v.length >= 8) || 'authKey 最短为 8 位'
      ],
      qq: '996955042',
      qqRules: [
        (v) => !!v || 'QQ is required',
        (v) => /^[1-9][0-9]{4,9}$/gi.test(v) || '不是有效的 QQ 号'
      ],
      checkbox: false
    }
  },
  mounted() {
    this.$store.dispatch('auth/verify')
  },
  methods: {
    login() {
      this.$store
        .dispatch('auth/login', {
          apiUrl: this.apiUrl,
          authKey: this.authKey,
          qq: this.qq
        })
        .then((res) => {
          console.log(res)
        })
    },
    reset() {
      this.$refs.form.reset()
    }
  }
}
</script>
