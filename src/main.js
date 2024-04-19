import { createApp } from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'


import vue3GoogleLogin from 'vue3-google-login'
const CLIENT_ID = "702280900258-fonncafu867lccckk6ppm6a2eg2e597j.apps.googleusercontent.com"

import '../src/assets/css/main.css'
// boostrap icons...
import 'bootstrap-icons/font/bootstrap-icons.css';

// stripe...
import { loadStripe } from '@stripe/stripe-js';
export const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');


const app = createApp(App);

app.config.globalProperties.api_url = process.env.VUE_APP_API_URL;
app.config.globalProperties.linkedin_callback = process.env.VUE_APP_LINKEDIN_CALLBACK_URI;


app.config.globalProperties.token = window.localStorage.getItem('BNA'); 

app.use(vue3GoogleLogin, {clientId:CLIENT_ID}).use(store).use(router)

app.mount('#app')
