<script setup>
  import {ref, onMounted, watch, watchEffect, computed} from "vue"
  import useHorse from "@/composables/horse"
  const props = defineProps(["horse", "isRaceStarted"])
  const checkRun = computed(() => props.isRaceStarted && props.horse.location < 100)
  const { runHorse, goFinish } = useHorse()

  watchEffect(() => {
    if(checkRun.value){
      runHorse(props.horse)
    }else if(props.horse.location >= 100){
      goFinish(props.horse)
    }
  })

</script>

<template>
  <div class="horse">
    <img class="horse__img" v-if="!checkRun" :style="{left: `${props.horse.location}%`}" src="/src/assets/img/horse-standing.png" alt="Standing Horse">
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
      transition: left linear .1s;
    }
  }

</style>