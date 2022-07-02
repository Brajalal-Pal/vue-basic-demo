<template>
  <div class="card">
    <h1>{{ person.name }}</h1>
    <p>Age: {{ person.age }}, Hair Color: {{ person.hairColor }}</p>
  </div>
</template>

<script>
export default {
  name: "PeopleListItem",
  props: {
    person: Object,
  },
};
</script>
<style scoped>
.card {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  width: 400px;
  display: inline-block;
}
</style>
