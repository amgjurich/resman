<template>
  <div class="prizes">
    <h2>Here is the full list of prizes that you can win.</h2>
    <div class="prizes-container">
      <div v-for="prize in prizes" :key="prize.id">
        <div class="each-prize">
          <img alt="Prize" :src="prize.image_url" />
          <div class="description-container">
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');

img {
  width: 100%;
  height: 50%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
h1 {
  font-weight: bold;
}
.prizes {
  background: rgb(243, 243, 243);
  padding-top: 5%;
}
.prizes h2 {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 20px;
}
.router-link {
  background-color: rgb(254, 207, 8);
  border-radius: 45px;
  border: none;
  width: 30%;
  height: 10%;
  text-decoration: none;
  padding: 15px;
  cursor: pointer;
  color: black;
  padding-right: 15%;
  padding-left: 15%;
  font-family: 'Source Sans Pro', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.description-container {
  height: 40%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-family: 'Open Sans', sans-serif;
}

.each-prize {
  background-color: white;
  grid-area: 'prize';
  padding-bottom: 5%;
  height: 100%;
  border-radius: 5px;
  box-shadow: 3px 3px 3px rgba(226, 226, 226, 0.993);
}
.each-prize p {
  padding-top: 10%;
  padding-bottom: 10%;
  font-weight: bold;
}
.prizes-container {
  padding-top: 5%;
  display: grid;
  grid-column-gap: 2%;
  grid-row-gap: 6%;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr 1fr 1fr;
  padding-left: 7%;
  padding-right: 7%;
  padding-bottom: 10%;
}
</style>
