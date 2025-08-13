import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: () => import("./components/TodoComposition.vue") },
  { path: "/contact", component: () => import("./pages/ContactPage.vue") },
  { path: "/profile", component: () => import("./pages/ProfilePage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
