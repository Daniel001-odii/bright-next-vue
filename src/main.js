import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'


import vue3GoogleLogin from 'vue3-google-login'
const CLIENT_ID = "702280900258-fonncafu867lccckk6ppm6a2eg2e597j.apps.googleusercontent.com"

import '../src/assets/css/main.css'


const app = createApp(App);

app.config.globalProperties.api_url = 'http://localhost:3000/api';
// app.config.globalProperties.api_url = 'https://bright-next-api.onrender.com/api';
app.config.globalProperties.token = window.localStorage.getItem('BNA'); 

app.use(vue3GoogleLogin, {clientId:CLIENT_ID}).use(store).use(router)

app.mount('#app')
