<script setup>
import { computed } from 'vue';

const props = defineProps(["horse", "rank"])
const showTrophy = computed(() => props.rank < 3)
const rankClass = computed(() => ({
  "first": props.rank + 1 === 1,
  "second": props.rank + 1 === 2,
  "third": props.rank + 1 === 3,
}))
</script>
<template>
  <div class="item" :class="rankClass">
    <div class="item__trophy">
      <b>
        <i v-if="showTrophy" class="ri-trophy-line"></i>
        <span v-else class="spec">{{ props.rank + 1 }}</span>
      </b>
      
    </div>
    <div class="item__specs">
      <span class="spec"><b>{{ props.horse.name }}</b></span>
      <span class="spec speed">
        {{ props.horse.speed }} kph</span>
    </div>
    <span class="item__selected material-symbols-outlined" v-if="props.horse.isSelected">verified</span>
  </div>
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

.item {
  display: flex;
  background-color: $not-in-top;
  padding: 0 .6rem;
  width: 8rem;
  height: 3.7rem;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 5px;

  @include md {
    padding: 0 .6rem;
    width: 8rem;
    height: 4rem;
  }

  @include lg {
    padding: 0 .6rem;
    width: 9rem;
    height: 2.7rem;
  }

  &__specs {
    display: flex;
    flex: 1;
    flex-direction: column;
    font-size: .8rem;
    border-radius: 5px;
  }

  &__trophy {
    width: 1rem;
    font-size: .9rem;
    margin: auto;
  }

  &__selected {
    border-radius: 50%;
    color: $ranking-navy-color;
    font-size: 1.2rem;
  }

}

.first {
  background-color: $first-bg-color;
}

.second {
  background-color: $second-bg-color;
}

.third {
  background-color: $third-bg-color;
}
</style>