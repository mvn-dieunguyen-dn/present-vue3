<template>
  <div class="login-container">
    <h2>Login Form</h2>
    <form class="login-form" @submit.prevent="login">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username">
      <br>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password">
      <br>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const username = ref('');
    const password = ref('');

    const login = () => {
      const url = 'https://jsonplaceholder.typicode.com/posts';
      const data = { username: username.value, password: password.value };

      fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          console.log('Login successful!', data);
          // Handle successful login
          alert('Login successful!');
        })
        .catch(error => {
          console.error('Error logging in:', error);
          // Handle login error
        });
    }


    return { username, password, login };
  }
}
</script>

<style>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

label {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

input[type="text"],
input[type="password"] {
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
  width: 300px;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #3e8e41;
}
</style>
