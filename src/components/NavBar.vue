<template>
  <ul>
    <li>
      <router-link to="/">Products</router-link>
    </li>
    <li>
      <router-link to="/cart">Shopping Cart</router-link>
    </li>
    <li>
      <router-link to="/user-info">Edit My Info</router-link>
    </li>
    <li>
      <router-link to="/employee">Employee Of The Month</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
li {
  list-style: none;
  display: inline;
  padding: 10px;
}
</style>
