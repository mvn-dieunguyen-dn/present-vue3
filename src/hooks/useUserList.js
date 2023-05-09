import { ref } from 'vue'

export default function useUserList() {
  const users = ref([])

  const fetchUsers = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    users.value = data
  }
  
  return {
    users, fetchUsers
  }
}
