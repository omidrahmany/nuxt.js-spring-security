<!-- ContactForm.vue -->

<template>
  <div class="contact-form">
    <h2>Contact Us</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="contactName">Name:</label>
        <input type="text" id="contactName" v-model="contactName" required />
      </div>
      <div class="form-group">
        <label for="contactEmail">Email:</label>
        <input type="email" id="contactEmail" v-model="contactEmail" required />
      </div>
      <div class="form-group">
        <label for="subject">Subject:</label>
        <input type="text" id="subject" v-model="subject" required />
      </div>
      <div class="form-group">
        <label for="message">Message:</label>
        <textarea id="message" v-model="message" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contactName: '',
      contactEmail: '',
      subject: '',
      message: ''
    };
  },
  methods: {
    submitForm() {
      // Send the form data to the backend server
      const formData = {
        contactName: this.contactName,
        contactEmail: this.contactEmail,
        subject: this.subject,
        message: this.message
      };

      // Assuming you are using axios for HTTP requests
      this.$axios.post('/contact/save', formData)
        .then(response => {
          // Handle success if needed
          console.log(response.data);
        })
        .catch(error => {
          // Handle error if needed
          console.error(error);
        });
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
