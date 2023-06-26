import {createRouter, createWebHistory} from "vue-router";
import CertifyView from "../views/certify/CertifyView.vue";
import VerifyView from "../views/Verify/VerifyView.vue";
import CreateProofView from "../views/certify/CreateProofView.vue";
import CertifySuccessScreen from "@/views/certify/CertifySuccessScreen.vue";
import VerifySuccessScreen from "@/views/certify/VerifySuccessScreen.vue";

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
    {
      path: "/verify/success",
      name: "verify-success",
      component: VerifySuccessScreen,
    },
    {
      path: "/proof/:hash",
      name: "proof",
      component: CreateProofView,
    },
    {
      path: "/",
      name: "certify",
      component: CertifyView,
    },
    {
      path: "/certify/success",
      name: "certify-success",
      component: CertifySuccessScreen,
    },
  ],
});

export default router;
