<template>
  <div class="prize-page-container">
    <div v-if="prize">
      <!-- *****************lightbox*********************** -->
      <div class="lightbox-container" v-if="visible">
        <div class="lightbox-background">
          <div class="clarify-container">
            <div class="x-button">
              <button @click="hide">X</button>
            </div>
            <h1>Are you sure?</h1>
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
        <div class="approved-lightbox-background">
          <div class="clarify-container">
            <div class="x-button">
              <button @click="hide">X</button>
            </div>
            <h1>Congratulations!</h1>
          </div>
          You redeemed
          <br />
          {{ prize.name }}.
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
export default {
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
      if (this.prize.quantity < 1) return;
      let newQuantity = this.prize.quantity - 1;
      let patchBody = {
        quantity: newQuantity,
        name: this.prize.name,
        image_url: this.prize.image_url,
        createdAt: this.prize.createdAt,
        description: this.prize.description,
      };
      console.log(patchBody);
      fetch('/api/' + this.id, {
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
      fetch('/api/prize/' + this.id)
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
    fetch('/api/prize/' + this.id)
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
    fetch('/api/prize/' + this.id)
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
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100&display=swap');
.explanation-container button {
  background-color: rgb(254, 207, 8);
  border-radius: 45px;
  border: none;

  text-decoration: none;

  cursor: pointer;
  color: black;
  padding-right: 20%;
  padding-left: 20%;
  margin-top: 5%;
  margin-bottom: 5%;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 15px;
  font-weight: bold;
}
.explanation-container h1 {
  font-family: 'Open Sans', sans-serif;
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
  width: 300px;

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
  width: 500px;
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
  width: 600px;
  height: 500px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding-bottom: 5%;
}
.clarify-container {
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 300px;
}

.clarify-container button {
  padding-top: 5%;
  border: none;
  background: none;

  font-family: 'Raleway', sans-serif;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 50px;
}
.clarify-container h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 30px;
}

.lightbox-background p {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 25px;
}
#cancel {
  background: rgb(243, 243, 243);
}
.x-button {
  display: flex;
  justify-content: flex-end;
  padding-top: 3%;
  margin-top: 5%;
}
.lightbox-image-container img {
  border: 10px;
  border-color: red;
  width: 45%;
  border-radius: 50%;
}
.clarifying-buttons {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Source Sans Pro', sans-serif;
  padding-top: 5%;
  border: none;
  background: none;
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 50px;
}
.clarifying-buttons button {
  background-color: rgb(254, 207, 8);
  border-radius: 45px;
  border: none;
  text-decoration: none;
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
.approved-lightbox-background {
  position: fixed;
  top: 10%;
  width: 600px;
  height: 300px;
  background: white;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  padding-bottom: 3%;
}
</style>
