<template>
  {{ user }}
</template>

<script setup>

import { fetchData } from '../hooks/suspenseUser'
const user = await fetchData();

</script>
