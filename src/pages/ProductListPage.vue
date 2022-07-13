<template>
  <h2>Product List Page</h2>
  <div v-for="product in products" :key="product.ID">
    <router-link :to="`/products/${product.ID}`">
      <h3>{{ product.Name }}</h3>
    </router-link>
    <p>Price: {{ product.Price }}, Rating Avg: {{ product["Rating Avg"] }}</p>
    <p>Description: {{ product.Description }}</p>
    <button class="btn">Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductListPage",
  props: ["products"],
};
</script>

<style scoped>
div {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 15px;
  margin: 5px;
  width: 425px;
  height: 275px;
  display: inline-block;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

a {
  text-decoration: none;
}

h3 {
  font-size: 26px;
}

.btn {
  padding: 10px;
}
</style>
