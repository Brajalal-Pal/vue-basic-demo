<template>
  <h2>Product Details Page</h2>
  <div>
    <h3>{{ product.Name }}</h3>

    <p>Price: {{ product.Price }}, Rating Avg: {{ product["Rating Avg"] }}</p>
    <p>Description: {{ product.Description }}</p>
    <button>Add to Cart</button>
  </div>
</template>

<script>
export default {
  name: "ProductDetailsPage",
  props: ["products"],
  computed: {
    product() {
      return this.products.find(
        (product) => product.ID == this.$route.params.id
      );
    },
  },
};
</script>

<style scoped>
div {
  border: 1px solid gray;
  border-radius: 3px;
  padding: 20px;
  margin: 5px;
  width: 500px;

  display: inline-block;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
}

button {
  padding: 10px;
}
</style>
