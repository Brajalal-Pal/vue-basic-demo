import { createWebHistory, createRouter } from "vue-router";
import ProductListPage from "./pages/ProductListPage.vue";
import ProductDetailPage from "./pages/ProductDetailPage.vue";
import ShoppingCartPage from "./pages/ShoppingCartPage.vue";

const routes = [
  { path: "/", component: ProductListPage },
  { path: "/products/:id", component: ProductDetailPage },
  { path: "/cart", component: ShoppingCartPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
