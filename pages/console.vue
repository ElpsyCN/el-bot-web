<template>
  <v-row dense>
    <v-col cols="12" sm="3">
      <contact-list></contact-list>
    </v-col>
    <v-col cols="12" sm="9">
      <v-col cols="12">
        <message-list></message-list>
        <send-message></send-message>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
import ContactList from '~/components/ContactList'
import MessageList from '~/components/message/MessageList'
import SendMessage from '~/components/message/SendMessage'
export default {
  components: {
    ContactList,
    MessageList,
    SendMessage,
  },
  middleware: 'auth',
  head: {
    title: '控制台',
  },
}
</script>
