<template>
  <div>
    <v-alert border="left" class="pl-5">
      mirai-api-http 中规定长时间（30 分钟）未使用的 Session 将自动释放，否则
      Session 持续保存 Bot 收到的消息，将会导致内存泄露（开启 websocket
      后将不会自动释放）。
    </v-alert>
  </div>
</template>
