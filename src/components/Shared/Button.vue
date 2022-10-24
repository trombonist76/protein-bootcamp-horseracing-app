<script setup>
  const props = defineProps(["name", "icon"])
</script>

<template>
  <button v-if="props.icon" class="btn icon">
    {{props.name}}
    <span class="material-symbols-outlined">{{props.icon}}</span>
  </button>
  <button v-else="props.name" class="btn">{{props.name}}</button>

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
    transition: all .1s ease-in-out;
    cursor: pointer;

    &:hover{
      background-color: $btn-hover-color;
    }
  }

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
  }
</style>