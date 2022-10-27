<script setup>
  const props = defineProps(["name", "icon", "width", "isTransparent", "textColor", "bgColor", "borderColor"])

  const styleObj = {
    color: props.textColor,
    backgroundColor: props.isTransparent ? "transparent" : props.bgColor,
    width: props.width,
    borderColor: props.borderColor
  }
</script>

<template>
  <button v-if="props.icon" class="btn icon" :style="styleObj">
    {{props.name}}
    <span class="material-symbols-outlined">{{props.icon}}</span>
  </button>
  <button v-else="props.name" class="btn">{{props.name}}</button>

</template>

<style scoped lang="scss">
 @import '@/assets/scss/variables.scss';

  .btn{
    padding: .7rem .9rem;
    background-color: $ranking-navy-color;
    color: $btn-text-color;
    font-size: .9rem;
    font-weight: 600;
    border-radius: 5px;
    transition: all .1s ease-in-out;
    border: 1px solid #999;
    cursor: pointer;

    &:hover{
      background-color: lighten( $ranking-navy-color, 3);
    }
  }

  .icon{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    
  }
</style>