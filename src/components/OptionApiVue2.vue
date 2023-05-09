<template>
  <div class="d-flex">
    <img src="../assets/image/vue2.png" alt="" class="ex-img">
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
            <div class="mb-5 text-h6">
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

<script>
export default {
  computed: {
    douCount() {
      return this.count * 2
    }
  },
  data() {
    return {
      count: 0,
      mess: 'Vuejs 2 is here'
    }
  },
  mounted() {
    this.count = 2
  },
  methods: {
    increaseCount() {
      this.count++
    },
    decreaseCount() {
      this.count--
    },
    changeMessage() {
      this.mess = "This is Vuejs 2 and it's old"
    }
  },
}
</script>
