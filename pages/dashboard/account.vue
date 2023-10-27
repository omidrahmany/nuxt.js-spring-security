<template>
  <div>
    <h2>Account Details</h2>
    <div v-for="account in accounts" :key="account.id">
      <p>Account Type: {{ account.accountType }}</p>
      <p>Branch Address: {{ account.branchAddress }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      accounts: []
    };
  },
  mounted() {
    this.fetchAccountDetails();
  },
  methods: {
    fetchAccountDetails() {
      // const userDetails = window.sessionStorage.getItem('userDetails');
      const customerId = window.sessionStorage.getItem('customerId');
      const xsrf = window.sessionStorage.getItem('X-XSRF-TOKEN');
      const jwt = window.sessionStorage.getItem('Authorization');
      if (customerId) {
        // const userData = JSON.parse(userDetails);
        // const customerId = userData.id // Replace with the actual customer ID
        const headers = {
          'X-XSRF-TOKEN': xsrf,
          'Authorization': jwt
        };
        const config = {
          headers : headers
        }
        axios.get(`http://localhost:8080/account/my-account?customerId=${customerId}`, config)
          .then(response => {
            this.accounts = response.data;
          })
          .catch(error => {
            console.error('Error fetching account details:', error);
          });
      }


    }
  }
};
</script>

<style scoped>
.account {
  background-color: #333;
  color: #fff;
  padding: 20px;
}

.account h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.account p {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>
