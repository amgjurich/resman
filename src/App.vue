<template>
  <div id="app">
    <!-- our different router links -->
    <!-- <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link> -->

    <div class="logo-container">
      <p class="logo">LOGO</p>
      <p class="name">John Smith</p>
    </div>
    <div class="header-container">
      <h1>Rewards</h1>
    </div>
    <!-- <RewardsComponent /> -->
    <router-view />

    <!-- <button @click="redirect">Redirect</button>
    <button @click="back">Go back</button>
    <button @click="forward">Go forward</button> -->
    <div class="terms-container">
      <h3>Terms & Conditions | Privacy Policy</h3>
    </div>
  </div>
  <!-- anything around this will appear on every single page -->
  <!-- tag for route components to be dynamically injected depending on the route we visit -->
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  border-radius: 5px;
}

/* style of an active link */
#nav a.router-link-exact-active {
  color: white;
  background: purple;
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
}
.logo-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
