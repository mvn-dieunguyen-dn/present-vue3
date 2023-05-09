<template>
  <button @click="count++">count: {{ count }}</button>
</template>

<script>
const multiplier = 2

export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    result() {
      return this.count * multiplier
    }
  },
  mounted() {
    console.log(this.count)
  },
  watch: {
    count(val, oldVal) {
      console.log(val, oldVal)
    }
  }
}
</script>
