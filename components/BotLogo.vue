<template>
  <img class="BotLogo" alt="El Bot Logo" src="/robot-line.svg" />
</template>

<style>
.BotLogo {
  height: 180px;
  width: 180px;
  transform: rotateY(560deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
