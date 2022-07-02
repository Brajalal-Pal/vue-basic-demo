<template>
  <h1 v-if="numberOfClicks >= 10">Congratulations!! You reached 10 clickes</h1>
</template>
<script>
export default {
  name: "CongratulationMessage",
  props: ["numberOfClicks"],
};
</script>
