<template>
  <div v-if="prize">
    <h1>{{ prize.name }}</h1>
    <p>The prize id is {{ id }}</p>
    <p>Description: {{ prize.description }}</p>
    <img :alt="prize.name" :src="prize.image_url" />
    <p>Quantity: {{ prize.quantity }}</p>
  </div>
  <div v-else>
    <p>Loading prize details...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      prize: null,
    };
  },

  mounted() {
    fetch('http://localhost:5000/api/prize/' + this.id)
      .then((res) => res.json())
      .then((data) => {
        console.log('data in PrizeDetails,', data);
        this.prize = data[0];
      })
      .catch((err) =>
        console.log('error in fetch request in prize', err.message)
      );
  },
};
</script>
<style scoped></style>
