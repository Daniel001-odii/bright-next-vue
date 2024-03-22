import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import UserProfileViewVue from '@/views/UserProfileView.vue'
import testAuthViewVue from '@/views/testAuth.vue'
import CheckoutPageView from '@/views/CheckoutPageView.vue'
import CourseDetailPage from '@/views/CourseDetailPage.vue'
import LayoutTemplate from '@/views/LayoutTemplate.vue'

const routes = [

  { path: '/', name: 'home', component: HomeView },

  { path: '/login', name: 'login', component: LoginViewVue },

  {
    path: '/bn',
    component: LayoutTemplate,
    children: [
      { path: 'dashboard', name: 'dashboard', component: UserProfileViewVue },
      { path: 'test', name: 'test', component: testAuthViewVue },
      { path: 'course/:course_name/detail', name: 'course', component: CourseDetailPage },
      { path: 'checkout', name: 'checkout', component: CheckoutPageView },
    ],
    // meta: { requiresAuth: true, role: 'user' },
  },

  { path: '/checkout', name: 'checkout-public', component: CheckoutPageView },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
