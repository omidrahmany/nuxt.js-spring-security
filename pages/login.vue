<template>
  <div class="login-page">
    <h1>Login</h1>
    <form class="login-form" @submit.prevent="submitForm">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          class="form-input"
          v-model="formData.email"
          required
        />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          class="form-input"
          v-model="formData.password"
          required
        />
      </div>
      <div class="button-group">
        <button type="submit" class="login-button">Login</button>
        <nuxt-link to="/signup" class="register-button">Register</nuxt-link>
      </div>
    </form>
  </div>
</template>
<script>
// import Cookie from 'js-cookie'

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    submitForm() {
      const basicAuth = 'Basic ' + btoa(this.formData.email + ':' + this.formData.password);
      this.$axios
        .get('/login/get-user', {
          headers: {
            'Authorization': basicAuth,
          },
        })
        .then(response => {
          let headers = response.headers;
          let authorization = headers.authorization;
          let xsrfHeaderName = response.config.xsrfHeaderName;
          let csrf = headers["x-xsrf-token"];
          window.sessionStorage.setItem("Authorization", authorization)
          window.sessionStorage.setItem(xsrfHeaderName, csrf)
          let parts = authorization.split('.');
          let decodedPayload = JSON.parse(atob(parts[1]));
          window.sessionStorage.setItem('customerId', decodedPayload.customerId)
          console.log("decoded payload: " + decodedPayload);
          this.$router.push("/dashboard");
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
.login-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #333; /* Dark background color */
  color: #fff; /* White text color */
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.login-form {
  background-color: #444; /* Darker background color for the form */
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 1px solid #555; /* Darker border color */
  border-radius: 5px;
  font-size: 1rem;
  background-color: #222; /* Even darker background color for inputs */
  color: #fff; /* White text color for inputs */
}

.button-group {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.login-button,
.register-button {
  background-color: #007bff; /* Blue color for buttons */
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.login-button:hover,
.register-button:hover {
  background-color: #0056b3; /* Darker blue color on hover */
}
</style>
