import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Span from "../views/SpanComponent.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/span",
    component: Span
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
