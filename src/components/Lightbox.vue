<template>
  <div v-if="visible" class="lightbox-container">
    <h1>{{ prizeName }} Lightbox</h1>
    <p>Your Prize:</p>
    <img :alt="prizeName" :src="prizeImage" />
    <div>
      <button @click="hide">Close</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    prizeImage: '',
    prizeName: '',
    visible: {
      type: Boolean,
      requried: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      console.log('clicked hide');
      props.visible = false;
    },
  },
};
</script>
<style scoped>
.lightbox-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
