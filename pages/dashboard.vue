<template>
  <v-row dense>
    <v-col cols="12" sm="4" v-for="dependency in panels" :key="dependency.name">
      <version-card :dependency="dependency"></version-card>
    </v-col>
    <v-col cols="12">
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">依赖</th>
              <th class="text-left">最新版本</th>
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
                  :href="
                    `https://github.com/${item.user}/${item.name}/releases`
                  "
                  target="_blank"
                >
                  <img
                    v-if="item.badge"
                    :alt="item.badge.alt"
                    :src="item.badge.src"
                  />
                </a>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import pkg from '~/package.json'
import VersionCard from '~/components/dashboard/VersionCard'
import { getAvatarById } from '~/assets/utils/index'
export default {
  components: {
    VersionCard
  },
  data() {
    return {
      panels: [
        {
          logo:
            'https://raw.githubusercontent.com/mamoe/mirai/master/docs/mirai.png',
          name: 'Mirai HTTP API',
          href: 'https://github.com/mamoe/mirai-api-http',
          version: ''
        },
        {
          logo: '/robot-line.svg',
          name: 'El Bot Web',
          href: 'https://github.com/ElpsyCN/el-bot-web',
          version: 'v' + pkg.version || ''
        },
        {
          logo: getAvatarById(707408530, 'group', 100),
          name: 'QQ 群',
          href:
            'https://shang.qq.com/wpa/qunwpa?idkey=5b0eef3e3256ce23981f3b0aa2457175c66ca9194efd266fd0e9a7dbe43ed653',
          version: 707408530
        }
      ],
      dependencies: [
        {
          name: 'mirai',
          user: 'mamoe',
          badge: {
            src: 'https://img.shields.io/github/v/release/mamoe/mirai',
            alt: 'GitHub release (latest by date)]'
          }
        },
        {
          name: 'mirai-console',
          user: 'mamoe',
          badge: {
            src:
              'https://img.shields.io/github/v/release/mamoe/mirai-console?include_prereleases',
            alt: 'GitHub release (latest by date including pre-releases)'
          }
        },
        {
          name: 'mirai-console-wrapper',
          user: 'mamoe',
          badge: {
            src:
              'https://img.shields.io/github/v/release/mamoe/mirai-console-wrapper',
            alt: 'GitHub release (latest by date)'
          }
        },
        {
          name: 'mirai-api-http',
          user: 'mamoe',
          badge: {
            src: 'https://img.shields.io/github/v/release/mamoe/mirai-api-http',
            alt: 'GitHub release (latest by date)'
          }
        },
        {
          name: 'el-bot-go',
          user: 'ElpsyCN',
          badge: {
            src: 'https://img.shields.io/github/v/release/ElpsyCN/el-bot-go',
            alt: 'GitHub release (latest by date)'
          }
        }
      ]
    }
  },
  created() {
    this.getMiraiAPIHTTPVersion()
  },
  methods: {
    getMiraiAPIHTTPVersion() {
      this.$axios.$get('/about').then((res) => {
        this.panels[0].version = res.data.version
      })
    }
  },
  head: {
    title: '仪表盘'
  }
}
</script>

<style></style>
