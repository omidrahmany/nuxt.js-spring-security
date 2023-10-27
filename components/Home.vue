<template>
  <div class="home-page">
    <nav>
      <ul class="nav-links">
        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/login">Login</nuxt-link></li>
        <li><nuxt-link to="/contact-us">Contact Us</nuxt-link></li>
        <li><nuxt-link to="/notices">Notices</nuxt-link></li>
        <li><nuxt-link to="/dashboard">Dashboard</nuxt-link></li>
        <li><nuxt-link to="/logout">Logout</nuxt-link></li>
      </ul>
    </nav>
    <div class="content">
      <!-- Your page content goes here -->
    </div>
  </div>
</template>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.nav-links {
  list-style: none;
  padding: 0;
  display: flex;
  background-color: #333;
  border-radius: 5px;
}

.nav-links li {
  margin-right: 20px;
}

.nav-links a {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  padding: 10px 15px;
  transition: background-color 0.3s ease;
}

.nav-links a:hover {
  background-color: #555;
}

.content {
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
}

/* Add additional styles for your content here */

</style>

