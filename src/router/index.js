import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

const Home = () => import("../view/home/home")
const Profile = () => import("../view/profile/profile")
const Cart = () => import("../view/cart/cart")
const Category = () => import("../view/category/category")
const routes = [
  {
    path: '',
    redirect: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  },
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router