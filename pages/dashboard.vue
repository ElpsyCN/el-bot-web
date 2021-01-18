<template>
  <v-row dense>
    <v-col v-for="dependency in panels" :key="dependency.name" cols="12" sm="4">
      <version-card :dependency="dependency"></version-card>
    </v-col>
    <v-col cols="12">
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-left">依赖</th>
              <th class="text-left">最新版本</th>
              <th class="text-left">描述</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in dependencies" :key="item.name">
              <td>
                <a
                  :href="`https://github.com/${item.user}/${item.name}`"
                  target="_blank"
                  >{{ item.name }}</a
                >
              </td>
              <td>
                <a
                  v-if="item.badge"
                  :href="
                    item.badge.href ||
                    `https://github.com/${item.user}/${item.name}/releases`
                  "
                  target="_blank"
                >
                  <img
                    :alt="item.badge.alt"
                    :src="
                      item.badge.src ||
                      `https://img.shields.io/github/v/release/${item.user}/${item.name}?logo=github`
                    "
                  />
                </a>
              </td>
              <td>{{ item.description }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import { Mirai } from 'mirai-ts'
import pkg from '~/package.json'
import VersionCard from '~/components/dashboard/VersionCard.vue'
import { getAvatarById } from '~/assets/utils/index'
export default {
  components: {
    VersionCard,
  },
  data() {
    return {
      panels: [
        {
          logo:
            'https://raw.githubusercontent.com/mamoe/mirai/master/docs/mirai.png',
          name: 'Mirai HTTP API',
          href: 'https://github.com/mamoe/mirai-api-http',
          version: '未知',
        },
        {
          logo: '/robot-line.svg',
          name: 'El Bot Web',
          href: 'https://github.com/ElpsyCN/el-bot-web',
          version: 'v' + pkg.version || '',
        },
        {
          logo: getAvatarById(707408530, 'group', 100),
          name: 'QQ 群',
          href:
            'https://shang.qq.com/wpa/qunwpa?idkey=5b0eef3e3256ce23981f3b0aa2457175c66ca9194efd266fd0e9a7dbe43ed653',
          version: 707408530,
        },
      ],
      dependencies: [
        {
          name: 'mirai',
          user: 'mamoe',
          badge: {
            alt: 'GitHub release (latest by date)]',
          },
          description: 'QQ 机器人框架',
        },
        {
          name: 'mirai-console',
          user: 'mamoe',
          badge: {
            alt: 'GitHub release (latest by date including pre-releases)',
          },
          description: 'mirai 的控制台（mirai-api-http 插件依赖）',
        },
        {
          name: 'mirai-console-loader',
          user: 'iTXTech',
          badge: {
            alt: 'GitHub release (latest by date)',
          },
          description: 'mirai 的启动器',
        },
        {
          name: 'mirai-api-http',
          user: 'mamoe',
          badge: {
            alt: 'GitHub release (latest by date)',
          },
          description: '提供 http 接口与其他任意语言进行交互',
        },
        {
          name: 'el-bot',
          user: 'YunYouJun',
          badge: {
            href: 'https://www.npmjs.com/package/el-bot',
            src: 'https://img.shields.io/npm/v/el-bot?logo=npm',
            alt: 'npm package version',
          },
          description: '基于 mirai-ts，运行于 Node.js 的机器人框架',
        },
        {
          name: 'mirai-ts',
          user: 'YunYouJun',
          badge: {
            href: 'https://www.npmjs.com/package/mirai-ts',
            src: 'https://img.shields.io/npm/v/mirai-ts?logo=npm',
            alt: 'npm package version',
          },
          description: 'mirai-api-http JavaScript/TypeScript SDK',
        },
      ],
    }
  },
  head: {
    title: '仪表盘',
  },
  async mounted() {
    if (!window.mirai) {
      const mahConfig = {
        host: process.env.MAH_HOST || '127.0.0.1',
        port: parseInt(process.env.MAH_PORT || '') || 4859,
        authKey: process.env.MAH_AUTH_KEY || 'el-psy-congroo',
        enableWebsocket: process.env.MAH_ENABLE_WEBSOCKET === 'true' || true,
      }
      const mirai = new Mirai(mahConfig)
      this.$mirai = mirai
      window.$mirai = mirai
      this.$mirai.link(parseInt(process.env.BOT_QQ || ''))
    }
    const { data } = await window.$mirai.api.about()
    this.panels[0].version = data.version
  },
}
</script>
