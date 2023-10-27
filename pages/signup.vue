<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="formData.email" required />
    </div>
    <div>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="formData.name" required />
    </div>
    <div>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="formData.password" required />
    </div>
    <div>
      <label for="role">Role:</label>
      <input type="tel" id="role" v-model="formData.role" required />
    </div>
    <div>
      <label for="mobileNumber">Mobile Number:</label>
      <input type="tel" id="mobileNumber" v-model="formData.mobileNumber" required />
    </div>
    <button type="submit">Sign Up</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        email: '',
        name: '',
        password: '',
        mobileNumber: '',
        role: ''
      },
    };
  },
  methods: {
    submitForm() {
      // Use Axios to send the form data to the backend
      this.$axios
        .post('/login/register', this.formData) // Adjust the API endpoint as needed
        .then(response => {
          // Handle the success response from the backend
          console.log(response.data);
        })
        .catch(error => {
          // Handle any errors that occur during the request
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
/* Scoped CSS for SignUpForm.vue */

/* Form container */
form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Form elements */
label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="role"],
input[type="tel"] {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

/* Add more styles as needed */
</style>

