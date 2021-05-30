import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Test from "../views/Test.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/test",
    name: "Test",
    component: () =>
      import(/* webpackChunkName: "Test" */ "../views/Test.vue"),
  },
  {
    path: "*",
    name: "404",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  // base: "/front/dist",
  routes,
});

export default router;