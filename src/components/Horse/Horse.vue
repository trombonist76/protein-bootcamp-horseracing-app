<script setup>
  const props = defineProps(["horse", "isRaceStarted"])

</script>

<template>
  <div class="horse">
    <img class="horse__img" v-if="!isRaceStarted" src="/src/assets/img/horse-standing.png" alt="Standing Horse">
    <img class="horse__img" v-else src="/src/assets/img/horse-running.gif" alt="Running Horse">
  </div>
</template>

<style lang="scss" scoped>

  .horse{
    width: 100%;
    height: 70px;

    &__img{
      height: 65px;
      margin-top: -12px;
    }
  }

</style>