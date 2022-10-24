<script setup>
import { computed } from 'vue';
import useHorse from "@/composables/horse"

const props = defineProps(["isRaceStarted"])
const {isAnyClosing } = useHorse()

</script>
<template>
  <div class="arena" :class="{'sliding-arena': props.isRaceStarted}">
  <div class="mid" :class="{'sliding-mid': props.isRaceStarted}">
    <div class="front" :class="{'sliding-front': props.isRaceStarted}">
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
  height: 60%;
  background: url('@/assets/icons/back.svg');
  transform: translateZ(0);
}

.front{
  height: 100%;
  background: url('@/assets/icons/front.svg');
  transform: translateZ(0);
}

.mid{
  height: 100%;
  background: url('@/assets/icons/mid.svg');
  transform: translateZ(0);
}


.sliding-arena{
  animation: bg-arena 45s linear infinite;
}

.sliding-mid{
  animation: bg-mid 30s linear infinite;
}

.sliding-front{
  animation: bg-front 15s linear infinite;
}

@keyframes bg-arena {
  100% {
    background-position: -200% 0;
  }
}

@keyframes bg-mid {
  100% {
    background-position: -400% 0;
  }
}

@keyframes bg-front {
  100% {
    background-position: -600% 0;
  }
}
</style>