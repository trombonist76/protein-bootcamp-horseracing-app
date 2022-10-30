<script setup>
import { ref, computed } from 'vue';
import ButtonComp from "@/components/Button/Button.vue"
  const props = defineProps(["horse"])
  const emits = defineEmits(["selectHorse"])
  const fileExtension = ref("png")
  const imagePath = computed(() => getImagePath())

  //It changes file extension, 
  //First, horse.png is displayed in the UI. Then hovering the card, it renders the horse.gif in the UI.
  const changeImageHandler = () => {
    fileExtension.value = fileExtension.value === "png" ? "gif" : "png" 
  }

  const selectHandler = () => {
    emits("selectHorse", props.horse)
  }

  const getImagePath = () => {
    const path = new URL(`/src/assets/img/horse-${props.horse.id}.${fileExtension.value}`, import.meta.url).href
    return path
  }
</script>

<template>
  <div class="item">
    <div class="image" @mouseover="changeImageHandler" @mouseout="changeImageHandler">
      <img :src="imagePath" class="image__horse" alt="horse-image">
    </div>
    <b class="item__name">{{props.horse.name}}</b>
    <ButtonComp @click="selectHandler" name="Select Horse"></ButtonComp>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';
@import '@/assets/scss/mixins.scss';

  .item{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem;
    height: 18rem;
    gap: .7rem;
    border: 1px solid $border-color;
    background-color: #ccd5ae;
    border-radius: .3rem;
    -webkit-box-shadow: 7px 10px 23px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 7px 10px 23px -10px rgba(0,0,0,0.75);
    box-shadow: 7px 10px 23px -10px rgba(0,0,0,0.75);

    .image{
      width: 100%;
      border: 1px solid;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #fefae0;
      border-radius: .3rem;

      flex:1;

      &__horse{
        width: 6rem;

        @include xl{
          width: 7rem;
        }      
      }
    }
  }
</style>  