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
