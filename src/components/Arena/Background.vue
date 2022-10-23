<script>
</script>
<template>
  <div class="arena">
  <div class="mid" :style="{backgroundImage:'url(/src/assets/icons/mid.svg'}">
    <div class="front" :style="{backgroundImage:'url(/src/assets/icons/front.svg'}">
    </div>
  </div>
</div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.arena,
.mid,
.front{
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000;
}
.arena {
  height: 40%;
  background: url('@/assets/icons/back.svg');
  animation: bg 15s linear infinite;
  transform: translateZ(0);
}

.front{
  height: 100%;
  background: url('@/assets/icons/front.svg');
  animation: bg 5s linear infinite;
  transform: translateZ(0);
}

.mid{
  height: 100%;
  background: url('@/assets/icons/mid.svg');
  animation: bg 10s linear infinite;
  transform: translateZ(0);
}

@keyframes bg {
  100% {
    background-position: -200% 0;
  }
}
</style>