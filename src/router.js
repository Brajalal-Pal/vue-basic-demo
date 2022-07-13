import { createWebHistory, createRouter } from "vue-router";
import ProductListPage from "./pages/ProductListPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import UserInfoPage from "./pages/UserInfoPage";
import EmployeeOfTheMonth from "./pages/EmployeeOfTheMonth";

const routes = [
  { path: "/", component: ProductListPage },
  { path: "/products/:id", component: ProductDetailPage },
  { path: "/cart", component: ShoppingCartPage },
  { path: "/user-info", component: UserInfoPage },
  { path: "/employee", component: EmployeeOfTheMonth },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
