import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import UserProfileViewVue from '@/views/UserProfileView.vue'
import testAuthViewVue from '@/views/testAuth.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/login',
    name: 'login',
    component: LoginViewVue
  },

  {
    path: '/profile',
    name: 'profile',
    component: UserProfileViewVue
  },

  {
    path: '/test',
    name: 'test',
    component: testAuthViewVue
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
