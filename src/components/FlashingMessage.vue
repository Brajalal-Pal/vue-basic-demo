<template>
  <h1 v-if="showMessage">{{ message }}</h1>
</template>
<script>
export default {
  name: "FlashingMessage",
  props: ["delay", "message"],
  data() {
    return {
      showMessage: true,
    };
  },
  created() {
    setInterval(() => {
      this.showMessage = !this.showMessage;
    }, this.delay);
  },
};
</script>
