<script setup>
const props = defineProps(["horse", "rank"])
</script>
<template>
  <tr>
    <td>{{props.rank + 1}}</td>
    <td>{{props.horse.name}}</td>
    <td>{{props.horse.speed}} kph</td>
    <td>{{props.horse.time}}</td>
  </tr>
  <!-- <div class="item">{{horse.name}}</div> -->
</template>
<style scoped lang="scss">
@import '@/assets/scss/variables.scss';

td{
  padding: .1rem;
}

tr:nth-child(even){
    background-color: $table-even-color;
  }

tr:nth-child(odd){
  background-color: $table-odd-color;
}
</style>