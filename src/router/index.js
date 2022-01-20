import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about/",
    name: "About",
    component: () => import("../views/About/About.vue"),
  },
  {
    name: "Timeline",
    path: "/about/timeline",
    component: () => import("../views/Timeline/Timeline.vue"),
  },
  {
    name: "ContactUs",
    path: "/contact-us",
    component: () => import("../views/ContactUs/ContactUs.vue"),
  },
  {
    path: "/services/",
    name: "Services",
    component: () => import("../views/Services/Services.vue"),
    children: [
      {
        name: "Training",
        path: "/services/training",
        component: () => import("../views/ServicesProjects/Training.vue"),
      },
      {
        name: "CyberConsultants",
        path: "/services/cyber-consultants",
        component: () =>
          import("../views/ServicesProjects/CyberConsultants.vue"),
      },
      {
        name: "BrandProtection",
        path: "/services/brand-protection",
        component: () =>
          import("../views/ServicesProjects/BrandProtection.vue"),
      },
      {
        name: "Software",
        path: "/services/software",
        component: () => import("../views/ServicesProjects/Software.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
