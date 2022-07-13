<template>
  <h1>User Info</h1>
  <div v-for="error in validationErrors" :key="error">{{ error }}</div>
  <div>
    <input placeholder="Name" v-model="name" />
    <input placeholder="Age" type="number" v-model.number="age" />
    <input placeholder="Address" v-model="address" />
    <button @click="save">Save</button>
  </div>
</template>
<script>
export default {
  name: "UserInfoPage",
  data() {
    return {
      name: "",
      age: 0,
      address: "",
    };
  },
  methods: {
    save() {
      alert(`Name is ${this.name}`);
    },
  },
  computed: {
    validationErrors() {
      let errors = [];
      if (this.name.length < 2) {
        errors.push("Please enter a name longer than 2 characters");
      }
      if (this.age <= 16) {
        errors.push("Age must be greater than 16");
      }
      return errors;
    },
  },
};
</script>
