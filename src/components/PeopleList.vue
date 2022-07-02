<template>
  <PeopleListItem
    v-for="person in people"
    :key="person.name"
    :person="person"
  />
</template>

<script>
import PeopleListItem from "./PeopleListItem.vue";

export default {
  name: "PeopleList",
  data() {
    return {
      people: [
        { name: "Shaun", age: 45, hairColor: "brown" },
        { name: "Brajalal", age: 100, hairColor: "white" },
      ],
    };
  },
  components: {
    PeopleListItem,
  },
};
</script>
