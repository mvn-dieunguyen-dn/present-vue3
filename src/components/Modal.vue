
<template>
  <div class="d-flex">
    <img src="../assets/image/teleport.png" alt="" class="ex-img">
    <v-btn variant="outlined" class="ml-5" @click="open = true">Open Modal</v-btn>
  </div>
  <Teleport to="body">
    <div v-if="open" class="modal text-center">
      <p>Hello from the modal!</p>
      <v-btn variant="outlined" @click="open = false">Close</v-btn>
    </div>
  </Teleport>
</template>

<script setup>
  import { ref } from 'vue'
  
  const open = ref(false)
</script>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 50%;
  left: 50%;
  width: 300px;
  transform: translateX(-50%);
  background: #6c6c6c;
  padding: 30px;
}
.ex-img {
  max-width: 700px;
}
</style>



