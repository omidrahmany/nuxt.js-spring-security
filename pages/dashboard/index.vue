<template>
  <div class="dashboard">
    <header class="header">
      <h1>Welcome, {{ userName }}</h1>
    </header>

    <nav class="navigation">
      <ul>
        <li>
          <nuxt-link to="/dashboard/account">My Account</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/dashboard/cards">My Cards</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/dashboard/loan">My Loan</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/dashboard/balance">My Balance</nuxt-link>
        </li>
      </ul>
    </nav>

    <main>
      <nuxt-child/>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: ''
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    fetchUserData() {
      /*const userDetails = sessionStorage.getItem('userDetails');
      if (userDetails) {
        const userData = JSON.parse(userDetails);
        this.userName = userData.name;
      }*/
    }
  }
}
</script>

<style scoped>
.dashboard {
  background-color: #1e1e1e;
  color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  background-color: #333333;
  padding: 20px;
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.navigation ul {
  list-style-type: none;
  padding: 0;
  margin: 20px 0;
}

.navigation li {
  margin-bottom: 10px;
}

.navigation li a {
  color: #ffffff;
  text-decoration: none;
}

.navigation li a:hover {
  text-decoration: underline;
}

main {
  flex-grow: 1;
  padding: 20px;
}
</style>
