<template>
  <div class="d-flex">
    <img src="../assets/image/suspense.png" alt="" class="ex-img">
    <div class="ml-5 text-left">
      <Suspense>
        <template #default>
          <user-detail />
        </template>
        <template #fallback>
          <div>Loading... (3 seconds)</div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup>
  import userDetail from './userDetail.vue'
</script>
