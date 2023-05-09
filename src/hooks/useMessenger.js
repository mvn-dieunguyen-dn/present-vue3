import { ref } from "vue"

export default function useMessenger() {
  let mess = ref('Vue3 is here')
  const changeMessage = () => {
    mess.value = "Vue 3 is faster, smaller, more maintainable and it’s easier to target native — Evan Vue"
  }

  return {
    mess,
    changeMessage
  }
}
