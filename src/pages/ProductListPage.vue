<template>
  <h2>Product List Page</h2>
  <div v-for="product in products" :key="product.ID">
    <router-link :to="`/products/${product.ID}`">
      <h3>{{ product.Name }}</h3>
    </router-link>
    <p>Price: {{ product.Price }}, Rating Avg: {{ product["Rating Avg"] }}</p>
    <p>Description: {{ product.Description }}</p>
  </div>
</template>

<script>
import products from "./products.json";

export default {
  name: "ProductListPage",
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
div {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 10px;
  margin: 5px;
  width: 400px;
  display: inline-block;
}
</style>
