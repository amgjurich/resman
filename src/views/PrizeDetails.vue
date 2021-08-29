<template>
  <div v-if="prize">
    <h1>{{ prize.name }}</h1>
    <div class="lightbox-container" v-if="visible">
      <div class="lightbox-background">
        <div class="clarify-container">
          <h1>Are you sure?</h1>
          <button @click="hide">X</button>
        </div>
        <div class="lightbox-image-container">
          <img :alt="prize.name" :src="prize.image_url" />
        </div>
        <p>Redeem for {{ prize.name }}?</p>
        <div>
          <button @click="hide">Yes</button>
          <button @click="hide">Cancel</button>
        </div>
      </div>
    </div>
    <p>The prize id is {{ id }}</p>
    <p>Description: {{ prize.description }}</p>
    <img :alt="prize.name" :src="prize.image_url" />
    <p>Quantity: {{ prize.quantity }}</p>
    <button @click="show">Claim</button>
  </div>
  <div v-else>
    <p>Loading prize details...</p>
  </div>
</template>

<script>
import Lightbox from '../components/Lightbox.vue';
// import Vue from 'vue';
// import Lightbox from 'vue-easy-lightbox';

// Vue.use(Lightbox);
export default {
  components: { Lightbox },
  props: ['id'],
  data() {
    return {
      prize: null,

      visible: false,
    };
  },
  methods: {
    show() {
      console.log('clicked');
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
  },

  mounted() {
    fetch('http://localhost:5000/api/prize/' + this.id)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data in PrizeDetails,', data);
        this.prize = data[0];
      })
      .catch((err) =>
        console.log('error in fetch request in prize', err.message)
      );
  },
};
</script>
<style scoped>
.lightbox-container {
  position: fixed;
  top: 0%;
  width: 100vw;
  height: 100vw;
  background: rgba(0, 0, 0, 0.65);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.lightbox-background {
  position: fixed;
  top: 10%;
  width: 60vw;
  height: 50vw;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.clarify-container {
  display: flex;
  width: 100%;
  /* background: yellow; */
  flex-direction: row;
  justify-content: flex-end;
}
.clarify-container button {
  margin-left: 15vw;
  border: none;
  background: white;
}
.clarify-container h1 {
  /* margin-left: 1; */
  /* left: 0/; */
}
.lightbox-image-container {
  /* height: 100px;
  border: 10px;
  border-color: red; */
  /* width: 50%; */
}
.lightbox-image-container img {
  border: 10px;
  border-color: red;
  width: 50%;
}
button {
  cursor: pointer;
}
</style>
