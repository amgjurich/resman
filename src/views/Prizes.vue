<template>
  <div class="prizes">
    <h2>Here is the full list of prizes that you can win.</h2>
    <div class="prizes-container" v-for="prize in prizes" :key="prize.id">
      <div class="each-prize">
        <img alt="Prize" :src="prize.image_url" />
        <p>{{ prize.name }}</p>
        <router-link :to="{ name: 'PrizeDetails', params: { id: prize._id } }">
          Redeem >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      prizes: [],
    };
  },
  mounted() {
    fetch('http://localhost:5000/api/prizes')
      .then((res) => res.json())
      .then((data) => (this.prizes = data))
      .catch((err) =>
        console.log('error in fetch request in prizes', err.message)
      );
  },
};
</script>
