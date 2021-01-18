import Mirai from 'mirai-ts'
import { Plugin } from '@nuxt/types'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $mirai: Mirai
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $mirai: Mirai
  }

  interface Context {
    $mirai: Mirai
  }
}

declare global {
  interface Window {
    $mirai: Mirai
  }
}

const miraiPlugin: Plugin = (context) => {
  const mahConfig = {
    host: process.env.MAH_HOST || '127.0.0.1',
    port: parseInt(process.env.MAH_PORT || '') || 4859,
    authKey: process.env.MAH_AUTH_KEY || 'el-psy-congroo',
    enableWebsocket: process.env.MAH_ENABLE_WEBSOCKET === 'true' || true,
  }
  const mirai = new Mirai(mahConfig)
  context.$mirai = mirai
  window.$mirai = mirai
}

export default miraiPlugin
