<template>
  <div class="flex flex-col w-1/3 mx-auto">
    <v-text-field
      :value="username"
      @input="$emit('update:username', $event.target.value)"
      placeholder="username"
    ></v-text-field>
    <v-text-field
      :value="email"
      @input="$emit('update:email', $event.target.value)"
      placeholder="email"
    ></v-text-field>
  </div>
</template>

<script setup>
  defineProps({
    username: String,
    email: String
  })
</script>
