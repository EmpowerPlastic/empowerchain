import { createRouter, createWebHistory } from "vue-router";
import CertifyView from "../views/CertifyView.vue";
import VerifyView from "../views/VerifyView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "certify",
      component: CertifyView,
    },
    {
      path: "/verify",
      name: "verify",
      component: VerifyView,
    },
  ],
});

export default router;
