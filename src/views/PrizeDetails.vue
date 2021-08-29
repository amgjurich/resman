<template>
  <div class="prize-page-container">
    <div v-if="prize">
      <!-- *****************lightbox*********************** -->
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
          <div class="clarifying-buttons">
            <button @click="approve">Yes</button>
            <button id="cancel" @click="hide">Cancel</button>
          </div>
        </div>
      </div>
      <!-- *****************lightbox*********************** -->
      <div id="approved-container" class="lightbox-container" v-if="approved">
        <div class="lightbox-background">
          <div class="clarify-container">
            <h1>Congratulations</h1>
            <button @click="hide">X</button>
          </div>
          <p>You redeemed</p>
          <p>{{ prize.name }}</p>
          <div class="clarifying-buttons">
            <button @click="hide">More Prizes</button>
          </div>
        </div>
      </div>
      <!-- *****************lightbox*********************** -->
      <div class="winner-container">
        <img :alt="prize.name" :src="prize.image_url" />
        <div class="explanation-container">
          <h1>Win a {{ prize.name }}</h1>
          <hr />
          <button @click="show">Reedem ></button>
          <hr />
          <p>{{ prize.quantity }} left in stock</p>
        </div>
      </div>
      <hr />
      <div class="description-container">
        <h2>Description</h2>
        <p>{{ prize.description }}</p>
      </div>
    </div>
    <div v-else>
      <p>Loading prize details...</p>
    </div>
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
      approved: false,
    };
  },
  methods: {
    show() {
      console.log('clicked');
      this.visible = true;
    },
    hide() {
      this.visible = false;
      this.approved = false;
    },
    approve() {
      this.approved = true;
      this.visible = false;
      this.changeQuantity();
    },
    changeQuantity() {
      console.log('invoked');
      let newQuantity = this.prize.quantity - 1;
      let patchBody = {
        quantity: newQuantity,
        name: this.prize.name,
        image_url: this.prize.image_url,
        createdAt: this.prize.createdAt,
        description: this.prize.description,
      };
      console.log(patchBody);
      fetch('http://localhost:5000/api/' + this.id, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(patchBody),
      })
        .then((res) => res.json())
        // .then((data) => console.log(data))
        .catch((err) => console.log('error in patch request', err));
      this.getPrizeInfo();
    },
    getPrizeInfo() {
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
  updated() {
    this.getPrizeInfo();
  },
};
</script>
<style scoped>
.explanation-container button {
  background-color: rgb(254, 207, 8);
  border-radius: 45px;
  border: none;
  /* width: 100%; */
  text-decoration: none;
  /* padding: 15px; */
  cursor: pointer;
  color: black;
  padding-right: 20%;
  padding-left: 20%;
  margin-top: 5%;
  margin-bottom: 5%;
}
.prize-page-container {
  padding-top: 5%;
  padding-bottom: 5%;
  background: rgb(243, 243, 243);
}
.winner-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 4%;
}
.explanation-container {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 2%;
  padding-right: 7%;
  padding-top: 2%;
  padding-bottom: 2%;
}
.description-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
}
hr {
  border: 0;
  clear: both;
  display: block;
  width: 96%;
  background-color: lightgrey;
  height: 1px;
}
img {
  width: 40%;
  padding-right: 5%;
}

/* *********************************** */

/* lightbox container styling */
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
#cancel {
  background: rgb(243, 243, 243);
}
.lightbox-image-container img {
  border: 10px;
  border-color: red;
  width: 50%;
  border-radius: 50%;
}
.clarifying-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.clarifying-buttons button {
  background-color: rgb(254, 207, 8);
  border-radius: 45px;
  border: none;
  /* width: 100%; */
  text-decoration: none;
  /* padding: 15px; */
  cursor: pointer;
  color: black;
  padding-right: 5%;
  padding-left: 5%;
  margin-top: 5%;
  margin-bottom: 5%;
}

button {
  cursor: pointer;
}

#approved-container {
}
</style>
