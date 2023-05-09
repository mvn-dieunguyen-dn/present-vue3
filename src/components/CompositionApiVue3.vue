<template>
  <div class="d-flex">
    <img src="../assets/image/vue3.png" alt="" class="ex-img">
    <div class="ml-5 w-100">
      <v-card
        class="mx-auto"
        variant="outlined"
      >
        <v-card-item>
          <div>
            <div class="text-h6 mb-1">
              <v-btn class="mr-3" variant="outlined" @click="decreaseCount">-1</v-btn>
              {{ count }}
              <v-btn class="ml-3" variant="outlined" @click="increaseCount">+1</v-btn>
            </div>
            <div class="text-h6 mb-5">
              Double count: {{ douCount }}
            </div>
            <div class="text-h6 pt-5">
              Message here: {{ mess }}
            </div>
            <v-btn variant="outlined" @click="changeMessage">Change message</v-btn>
          </div>
        </v-card-item>
      </v-card>
    </div>
  </div>
</template>

<script setup>
  import { ref, reactive, computed, onMounted } from 'vue'
  import useMessenger from '../hooks/useMessenger'

  // Variable
  const count = ref(0)
  // const mess = ref('Vuejs 3 is here')
  const state = reactive({
    ver: 'v3',
    public: true
  })
  const douCount = computed(() => count.value * 2)

  // Methods
  const increaseCount = () => {
    count.value++
  }
  const decreaseCount = () => {
    count.value--
  }
  const { mess, changeMessage } = useMessenger()
  // const changeMessage = () => {
  //   mess.value = "Vuejs 3 is faster, smaller, more maintainable"
  // }

  // Lifecycle
  onMounted(() => {
    count.value = 3
  })
</script>
