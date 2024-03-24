import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginViewVue from '@/views/LoginView.vue'
import UserProfileViewVue from '@/views/UserProfileView.vue'
import testAuthViewVue from '@/views/testAuth.vue'
import CheckoutPageView from '@/views/CheckoutPageView.vue'
import CourseDetailPage from '@/views/CourseDetailPage.vue'
import LayoutTemplate from '@/views/LayoutTemplate.vue'
import CartPageView from '@/views/CartPageView.vue'

import ThankyouPageView from '@/views/ThankyouPageView.vue'
import SetpasswordPageView from '@/views/SetpasswordPageView.vue'
import PassResetPageView from '@/views/PassResetPageView.vue'

const routes = [

  { path: '/', name: 'home', component: HomeView },

  { path: '/login', name: 'login', component: LoginViewVue },

  {
    path: '/bn',
    component: LayoutTemplate,
    children: [
      { path: 'dashboard', name: 'dashboard', component: UserProfileViewVue },
      { path: 'test', name: 'test', component: testAuthViewVue },
      { path: 'course/:course_title', name: 'course', component: CourseDetailPage },
      { path: 'checkout/:course_title', name: 'checkout', component: CheckoutPageView },
      { path: 'cart', name: 'cart', component: CartPageView },
      { path: 'thankyou', name: 'thank-you', component: ThankyouPageView },
    ],
    // meta: { requiresAuth: true, role: 'user' },
  },

  { path: '/course/:course_name/detail', name: 'course-detail', component: CourseDetailPage },

  { path: '/checkout', name: 'checkout-public', component: CheckoutPageView },

  { path: '/thankyou', name: 'thank you', component: ThankyouPageView },

  { path: '/password', name: 'password', component: SetpasswordPageView },

  { path: '/password/reset', name: 'password-reset', component: PassResetPageView },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
