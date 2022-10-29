<script setup>
import { computed } from 'vue';

const props = defineProps(["result", "rank"])
const checkInTop = computed(() => props.rank < 3)
const medals = ["gold", "silver", "bronze"]
const imagePath = computed(() => new URL(`/src/assets/img/${medals.at(props.rank)}-medal.png`, import.meta.url).href)

const topClass = computed(() => ({
  "top first": props.rank === 0,
  "top second": props.rank === 1,
  "top third": props.rank === 2
}))

</script>
<template>
  <div class="item" :class="topClass">
    <div class="item__trophy">
      <img v-if="checkInTop" class="medal" :src="imagePath" alt="medal">
      <span v-else>{{ props.rank + 1 }}</span>
    </div>
    <div class="item__specs">
      <b>{{ props.result.name }}</b>
      <div class="time">
        <span class="material-symbols-outlined time__icon">timer</span>
        {{props.result.time}}
      </div>
      <div class="selected" v-if="props.result.isSelected">
        <span class="material-symbols-outlined selected__icon" >verified</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';


.item {
  grid-column: 1 / -1;
  background-color: $not-in-top;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $border-color;
  height: 4rem;
  padding: 0 3rem;
  justify-content: center;

  &__specs {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    flex: 1;
    place-items: center;
    
    .time{
      display: flex;
      justify-content: center;
      gap: .3rem;
      font-weight: bold;
      
      &__icon{
        font-size: 1.3rem;
      }

      &::before{
        content: 'Finished in';
        letter-spacing: .03rem;
        font-size: .9rem;
        font-weight: 400;
        font-style: italic;
      }
    }

    .selected{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: .4rem;

      &__icon{
        font-size: 1.4rem;
      }
    }
  }

  &__trophy {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: $ranking-navy-color;
    width: 2rem;
    height: 2rem;
    color: white;
    border-radius: 50%;
  }
}
.top{
  flex-direction: column;
  grid-column: span 1 / span 1;
  border-radius: .6rem .6rem 0 0;
  padding: .4rem;
  gap: .6rem;
  border: none;

  .item__specs {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    gap: .3rem;

    .time::before{
        content: '';
      }
  }
  .item__trophy {
    width: 3rem;
    height: 3rem;

    .medal {
      width: 2rem;
    }
  }
}
.first {
  background-color: $first-bg-color;
  height: 13rem;
}

.second {
  background-color: $second-bg-color;
  height: 11rem;
  order: -1;
}
.third {
  background-color: $third-bg-color;
  height: 10rem;
}
</style>