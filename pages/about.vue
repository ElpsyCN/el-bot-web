<template>
  <v-layout>
    <v-flex class="text-center">
      <bot-logo></bot-logo>
      <nuxt-content :document="about" />
    </v-flex>
  </v-layout>
</template>

<script>
import BotLogo from '~/components/BotLogo'
export default {
  components: {
    BotLogo,
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    return {
      about,
    }
  },
}
</script>
