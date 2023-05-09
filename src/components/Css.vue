<template>
  <div class="d-flex">
    <img src="../assets/image/bind.png" alt="" class="ex-img">
    <v-btn class="text ml-5" @click="changeColor">hello v-bind()</v-btn>
  </div>
</template>

<script setup>
  import { ref } from 'vue';

  const color = ref('red')
  const changeColor = () => {
    color.value = color.value === 'red' ? 'green' : 'red'
  }
</script>

<style scoped>
.text {
  background-color: v-bind(color);
}
</style>
