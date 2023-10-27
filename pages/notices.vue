<template>
  <div class="notice-list">
    <h1>Notice Board</h1>
    <ul>
      <li v-for="notice in notices" :key="notice.uuid" class="notice-item">
        <div class="notice-summary">{{ notice.noticeSummary }}</div>
        <div class="notice-details">{{ notice.noticeDetails }}</div>
        <div class="notice-dates">
          <div>Start Date: {{ formatDate(notice.startDate) }}</div>
          <div>End Date: {{ formatDate(notice.endDate) }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notices: [],
    };
  },
  mounted() {
    this.fetchNotices();
  },
  methods: {
    async fetchNotices() {
      try {
        const response = await this.$axios.get('/notice' +
          '/get-all-active-notices'); // Adjust the API endpoint
        this.notices = response.data;
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    },
    formatDate(dateTime) {
      // Implement a function to format date and time according to your needs
      // For example, you can use a library like Luxon or Moment.js
      // Here is a basic example without any library
      const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(dateTime).toLocaleDateString('en-US', options);
    },
  },
};
</script>

<style scoped>
.notice-list {
  max-width: 600px;
  margin: auto;
}

.notice-item {
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.notice-summary {
  font-size: 18px;
  font-weight: bold;
}

.notice-details {
  margin-top: 10px;
}

.notice-dates {
  margin-top: 10px;
  color: #888;
}
</style>
