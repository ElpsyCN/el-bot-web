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
      <v-col cols="12">
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">依赖</th>
                <th class="text-left">版本</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in dependencies" :key="item.name">
                <td>{{ item.name }}</td>
                <td>
                  <img
                    v-if="item.badge"
                    :alt="item.badge.alt"
                    :src="item.badge.src"
                  />
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import pkg from '~/package.json'
export default {
  data() {
    return {
      version: '',
      botVersion: pkg.version || '',
      dependencies: [
        {
          name: 'mirai',
          version: '',
          badge: {
            src: 'https://img.shields.io/github/v/release/mamoe/mirai',
            alt: 'GitHub release (latest by date)]'
          }
        },
        {
          name: 'mirai-console',
          version: '',
          badge: {
            src:
              'https://img.shields.io/github/v/release/mamoe/mirai-console?include_prereleases',
            alt: 'GitHub release (latest by date including pre-releases)'
          }
        },
        {
          name: 'mirai-console-wrapper',
          version: '',
          badge: {
            src:
              'https://img.shields.io/github/v/release/mamoe/mirai-console-wrapper',
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
        this.version = res.data.version
      })
    }
  },
  head: {
    title: '仪表盘'
  }
}
</script>

<style></style>
