<template>
  <h2>Lifecycle Test</h2>
</template>
<script>
export default {
  name: "LifecycleTest",
  props: ["numberOfClicks"],
  beforeCreate() {
    console.log("In beforeCreated");
  },
  created() {
    console.log("In created");
  },
  beforeUpdate() {
    console.log("In beforeUpdate");
  },
  updated() {
    console.log("In updated");
  },
  beforeMount() {
    console.log("In beforeMount");
  },
  mounted() {
    console.log("In mounted");
  },
  beforeUnmount() {
    console.log("In beforeUnmount");
  },
  unmounted() {
    console.log("In unmounted");
  },
};
</script>
