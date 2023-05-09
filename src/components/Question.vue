<template>
  {{ currentQuestion }}
  <div>
    <h2>{{ currentQuestion.question }}</h2>
    <ul>
      <li v-for="(option, index) in currentQuestion.options" :key="index">
        <label>
          <input type="radio" :value="option" v-model="selectedAnswer">
          {{ option }}
        </label>
      </li>
    </ul>
    <button @click="checkAnswer">Submit</button>
    <p v-if="showResult">{{ result }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const questions = [
      {
        question: "What is the composition API in Vue3?",
        options: ["A new way to create components", "A way to reuse logic across components", "A way to style components", "A way to handle events"],
        answer: "A way to reuse logic across components"
      },
      {
        question: "What is the difference between Vue2 and Vue3?",
        options: ["Vue3 has a new rendering engine", "Vue3 has a new composition API", "Vue3 has a new template syntax", "All of the above"],
        answer: "All of the above"
      },
      {
        question: "What is the new feature in Vue3 that allows for better performance?",
        options: ["The new rendering engine", "The new composition API", "The new template syntax", "The new teleport component"],
        answer: "The new rendering engine"
      },
      // add more questions here
    ];
    const currentQuestionIndex = ref(0);
    const selectedAnswer = ref("");
    const showResult = ref(false);
    const result = ref("");

    const currentQuestion = computed(() => {
      return questions[currentQuestionIndex.value];
    });

    const checkAnswer = () => {
      if (selectedAnswer.value === currentQuestion.value.answer) {
        result.value = "Correct!";
        if (currentQuestionIndex.value < questions.length - 1) {
          currentQuestionIndex.value++;
        }
      } else {
        result.value = "Incorrect!";
      }
      showResult.value = true;
    };

    return {
      questions,
      currentQuestionIndex,
      selectedAnswer,
      showResult,
      result,
      currentQuestion,
      checkAnswer
    };
  }
};
</script>