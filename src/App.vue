<template>
  <NavBar />
  <router-view :shoppingCart="shoppingCart" :products="products"></router-view>
</template>

<script>
import products from "./pages/products.json";
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
  },
  data() {
    return {
      shopingCartIds: [],
      products,
    };
  },
  computed: {
    shopingCart() {
      return this.shopingCartIds.map((id) => {
        return this.products.find((p) => p.id === id);
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
