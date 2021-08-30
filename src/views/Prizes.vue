<template>
  <div class="prizes">
    <h2>Here is the full list of prizes that you can win.</h2>
    <div class="prizes-container">
      <div v-for="prize in prizes" :key="prize.id">
        <div class="each-prize">
          <img alt="Prize" :src="prize.image_url" />
          <p>{{ prize.name }}</p>

          <router-link
            class="router-link"
            :to="{ name: 'PrizeDetails', params: { id: prize._id } }"
          >
            Redeem >
          </router-link>
        </div>
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
    console.log('mounted prizes');
    fetch('/api/prizes')
      .then((res) => {
        console.log('res', res);
        return res.json();
      })
      .then((data) => {
        console.log('my data in fetch', data);
        this.prizes = data;
      })
      .catch((err) =>
        console.log('error in fetch request in prizes', err.message)
      );
  },
};
</script>
<style scoped>
img {
  width: 100%;
  height: 300px;
}
h1 {
  font-weight: bold;
}
.prizes {
  background: rgb(243, 243, 243);
  padding-top: 5%;
}
.router-link {
  background-color: rgb(254, 207, 8);
  border-radius: 45px;
  border: none;
  width: 100px;
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
  color: black;
  padding-right: 15%;
  padding-left: 15%;
}

.each-prize {
  background-color: white;
  grid-area: 'prize';
  padding-bottom: 10%;
}
.each-prize p {
  padding-top: 10%;
  padding-bottom: 10%;
  font-weight: bold;
}
.prizes-container {
  padding-top: 5%;
  display: grid;
  grid-column-gap: 1%;
  grid-row-gap: 5%;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    'prize' 'prize' 'prize'
    'prize' 'prize' 'prize';
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 7%;
}
</style>
