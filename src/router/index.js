import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Boutique from "@/views/Boutique";
import Jeux from "@/views/Jeux";
import Contact from "@/views/Contact";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/boutique',
    name: 'Boutique',
    component: Boutique
  },
  {
    path: '/jeux',
    name: 'Jeux',
    component: Jeux
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  routes
})

export default router
