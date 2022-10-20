<script setup>
  import {ref, onMounted, watchEffect} from "vue"
  import useHorse from "@/composables/horse"
  const props = defineProps(["horse", "isRaceStarted"])
  const horseCopy = ref(props.horse)
  const { runHorse } = useHorse()
  
  watchEffect(() => {
    if(!props.isRaceStarted) return
    let interval = setInterval(() => {
      runHorse(props.horse)
    }, 50)
  })

</script>

<template>
  <div class="horse">
    <img class="horse__img" v-if="!isRaceStarted" src="/src/assets/img/horse-standing.png" alt="Standing Horse">
    <img class="horse__img" v-else  :style="{left: `${props.horse.location}%`}" src="/src/assets/img/horse-running.gif" alt="Running Horse">
  </div>
</template>

<style lang="scss" scoped>
  .horse{
    width: 100%;
    height: 70px;
    position: relative;

    &__img{
      height: 65px;
      margin-top: -12px;
      position: absolute;
    }
  }

</style>