<template>
  <p>You have clicked {{ numberOfClicks }} times</p>
  <button @click="$emit('increment')">Click Me</button>
</template>

<script>
export default {
  name: "CounterButton",
  emits: ["increment"],
  props: {
    numberOfClicks: Number,
  },
};
</script>
