import Vue from "vue";
import VueRouter from "vue-router";
import task from "./task"
import notice from  "./notice"
import application from "./application";
import approval from  "./approval"
import record from "./record"

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/views/login/index'),
    hidden: true
  },
    application,
    approval,
    task,
    record,
    notice
];

const router = new VueRouter({
  routes
});

export default router

export {routes}
