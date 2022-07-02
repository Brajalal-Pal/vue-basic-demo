<template>
  <h2>Product Details Page</h2>
  <div>
    <h3>{{ product.Name }}</h3>

    <p>Price: {{ product.Price }}, Rating Avg: {{ product["Rating Avg"] }}</p>
    <p>Description: {{ product.Description }}</p>
  </div>
</template>

<script>
import products from "./products.json";

export default {
  name: "ProductDetailsPage",
  computed: {
    product() {
      return products.find((product) => product.ID == this.$route.params.id);
    },
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
