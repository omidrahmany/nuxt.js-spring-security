<template>
  <div>
    <h1>Card List for {{ customerName }}</h1>
    <ul>
      <li v-for="card in cards" :key="card.id">
        <div>Card Number: {{ card.cardNumber }}</div>
        <div>Card Type: {{ card.cardType }}</div>
        <div>Total Limit: {{ card.totalLimit }}</div>
        <div>Amount Used: {{ card.amountUsed }}</div>
        <div>Available Amount: {{ card.availableAmount }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerName: '',
      cards: []
    };
  },
  mounted() {
    this.fetchCards();
  },
  methods: {
    fetchCards() {
      const customerId = // get the customer ID from your application logic
        this.$axios.get(`/api/customers/${customerId}/cards`)
          .then(response => {
            this.customerName = response.data.customerName;
            this.cards = response.data.cards;
          })
          .catch(error => {
            console.error(error);
          });
    }
  }
};
</script>

<style scoped>
body {
  background-color: #1e1e1e;
  color: #ffffff;
}

h1 {
  color: #ffffff;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #333333;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
}

li > div {
  margin-bottom: 10px;
}

li > div:last-child {
  margin-bottom: 0;
}
</style>
