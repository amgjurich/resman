<template>
  <h1>Jobs</h1>
  <div class="job" v-for="job in jobs" :key="job.id">
    <router-link
      :to="{
        name: 'JobDetails',
        params: { id: job.id },
        props: { details: job.details },
      }"
    >
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: 'abigail', id: 1, details: 'i am cool' },
        { title: 'olivia', id: 2, details: 'dorkus' },
        { title: 'amanda', id: 3, details: 'so fun' },
      ],
    };
  },
};
</script>

<style scoped>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.job h2:hover {
  background: #ddd;
}
.job a {
  text-decoration: none;
}
</style>
