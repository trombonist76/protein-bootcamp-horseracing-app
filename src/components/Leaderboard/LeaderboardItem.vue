<script setup>
import { computed } from 'vue';

const props = defineProps(["horse", "rank"])
const rankClass = computed(() => ({
  "first": props.rank + 1 === 1,
  "second": props.rank + 1 === 2,
  "third": props.rank + 1 === 3,
}))
</script>
<template>
  <div class="item" :class="rankClass">
    <span class="item__spec">{{props.rank + 1}}</span>
    <span class="item__spec">{{props.horse.name}}</span>
    <span class="item__spec">{{props.horse.speed}} kph</span>
    <span class="item__spec">{{props.horse.time}}</span>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

.item{
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr;
  gap: 1rem;
  padding: 10px 10px;
  border-radius: 5px;
  font-size: 1rem;
  background-color: $not-in-top;

  &__spec{
    flex: 1;
  }
}

.first{
    background-color: $first-bg-color;
  }

  .second{
    background-color: $second-bg-color;
  }

  .third{
    background-color: $third-bg-color;
  }
</style>