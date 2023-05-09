
<template>
  <v-expansion-panels variant="popout" class="my-4">
    <v-expansion-panel>
      <v-expansion-panel-title>
        <h4>Option API Vue 2</h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <option-api-vue2 />
      </v-expansion-panel-text>
    </v-expansion-panel>
    
    <v-expansion-panel>
      <v-expansion-panel-title>
        <h4>Composition API Vue 3</h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <composition-api-vue3 />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <h4>Teleport</h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <modal />
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <h4>Suspense</h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <suspense-demo />
      </v-expansion-panel-text>
    </v-expansion-panel>
    
    <v-expansion-panel>
      <v-expansion-panel-title>
        <h4>Multiple v-model</h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <multiple-input 
          v-model:username="username" 
          v-model:email="email" 
        />
        <p>Your name: {{ username }}, your email: {{ email }}</p>
      </v-expansion-panel-text>
    </v-expansion-panel>

    <v-expansion-panel>
      <v-expansion-panel-title>
        <h4>v-bind()</h4>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <css />
      </v-expansion-panel-text>
    </v-expansion-panel>

  </v-expansion-panels>
</template>
  

<script setup>
  import OptionApiVue2 from './OptionApiVue2.vue';
  import CompositionApiVue3 from './CompositionApiVue3.vue';
  import MultipleInput from './MultipleInput.vue';
  import SuspenseDemo from './SuspenseDemo.vue'
  import Modal from './Modal.vue'
  import Css from './Css.vue'

  import { ref } from "vue";
  
  const username = ref("");
  const email = ref("");
</script>

<style scoped>
:global(.text) {
  color: white !important;
}
</style>