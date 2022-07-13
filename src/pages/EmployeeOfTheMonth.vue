<template>
  <h1>Employee of the month</h1>
  <p v-if="employees">{{ employees.name.first }} {{ employees.name.last }}</p>
</template>

<script>
import RandomPersonMixins from "../mixins/RandomPersonMixins";

export default {
  name: "EmployeeOfTheMonth",
  mixins: [RandomPersonMixins],
};
</script>
