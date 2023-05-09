<template>
  <button @click="count++">count: {{ count }}</button>
</template>

<script>
import { computed, reactive, toRefs, onMounted, watch } from 'vue'

export default {
  setup() {
    const multiplier = 2

    const state = reactive({
      count: 0
    })

    const result = computed(() => {
      return state.count * multiplier
    })

    onMounted(() => {
      console.log(state.count)
    })

    watch(state.count, (val, oldVal) => {
      console.log(val, oldVal)
    })

    return {
      ...toRefs(state)
    }
  }
}
</script>
