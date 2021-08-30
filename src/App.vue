<template>
  <div id="app">
    <div class="logo-container">
      <p class="logo">LOGO</p>
      <p class="name">John Smith</p>
    </div>
    <div class="header-container">
      <h1>Rewards</h1>
    </div>

    <router-view />

    <div class="terms-container">
      <h3>Terms & Conditions | Privacy Policy</h3>
    </div>
  </div>
</template>

<script>
export default {
  methods: {},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@800&display=swap');

.logo {
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 30px;
  margin: 0px;
}
.name {
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

.header-container {
  color: white;
  background: rgb(4, 116, 187);
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
}
.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1%;
}

.terms-container {
  color: white;
  background: black;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
