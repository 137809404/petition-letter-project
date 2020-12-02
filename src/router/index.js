import Vue from "vue";
import VueRouter from "vue-router";
import task from "./task"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index'),
  },
    task
];

const router = new VueRouter({
  routes
});

export default router

export {routes}
