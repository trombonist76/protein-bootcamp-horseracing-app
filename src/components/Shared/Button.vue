<script setup>
  const props = defineProps(["name"])
</script>

<template>
  <button class="btn">{{props.name}}</button>
</template>

<style scoped lang="scss">
 @import '@/assets/scss/variables.scss';

  .btn{
    padding: .7rem .9rem;
    background-color: $btn-bg-color;
    color: $btn-text-color;
    font-size: .9rem;
    font-weight: 600;
    border-radius: 5px;
    cursor: pointer;
  }
</style>