<template>
  <v-layout>
    <v-flex class="text-center">
      <bot-logo></bot-logo>
      <blockquote>
        <h2 class="display-2 mb-5">El Psy Congroo</h2>
        <footer>
          <small>
            <em>冈部伦太郎</em>
          </small>
        </footer>
      </blockquote>
      <h6 class="mt-5">我小叮当无话可说</h6>
    </v-flex>
  </v-layout>
</template>

<script>
import BotLogo from '~/components/BotLogo'
export default {
  components: {
    BotLogo
  }
}
</script>
