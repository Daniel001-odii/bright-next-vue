<template>
    <div>
        <div class=" mt-12 flex flex-col h-screen justify-start items-center ">
            
            <div class=" rounded-3xl shadow-lg p-8 rounded-4xl flex flex-col w-fit">
                <div class="flex flex-row justify-between bg-green p-1 rounded-3xl">
                    <button @click="currentTab = 'login'" :class="currentTab == 'login' ? 'active_tab':''" class="tab_switch ">Login</button>
                    <button @click="currentTab = 'register'" :class="currentTab == 'register' ? 'active_tab':''" class="tab_switch">sign up</button>
                </div>
                <div class="mt-3 p-3 bg-red-100 text-red-700 w-full rounded-lg" v-if="error">{{ error }}</div>
                <div v-if="currentTab == 'login'">
                    <form @submit.prevent="login">
                        <h1 class="text-green text-3xl text-left py-6">Log in</h1>
                        <div class="flex flex-col gap-4 text-left">
                            <p clas="p-0 m-0">Enter your credentials to log in to our platform.</p>
                            <input class="form_input" v-model="login_form_data.usernameOrEmail" type="email" placeholder="johndoe@gmail.com" required>
                            <input class="form_input" v-model="login_form_data.password" type="password" placeholder="password" required>
                            <button type="submit" class="bg-green w-full py-3 text-white rounded-3xl">Continue</button>
                        </div>
                    </form>

                    <div class="mt-5">
                        <GoogleLogin class="!w-full" :callback="callback" auto-login prompt/>
                            <!-- <GoogleAuthButton/>
                        </GoogleLogin> -->
                    </div>

                    <div class="mt-5">
                        <LinkedInSignin :client-id="linkediInClientId" css="flex justify-center p-3 border border-slate-300 rounded-3xl shadow-sm bg-white text-sm font-medium text-slate-500 hover:!bg-slate-50 cursor-pointer"/>
                    </div>

                    <div class="mt-5">
                        <VFacebookLogin app-id="903137658112158" class=" flex flex-row text-sm justify-center items-center gap-3 border w-full rounded-3xl p-3 hover:bg-slate-50">
                            login with facebook
                        </VFacebookLogin>
                    </div>
                </div>
                <div v-if="currentTab == 'register'">
                    <form @submit.prevent="register">
                        <h1 class="text-green text-3xl text-left py-6">Create your account</h1>
                        <div class="flex flex-col gap-4 text-left">
                            <p clas="p-0 m-0">Create a free account to continue on our platform</p>
                            <input class="form_input" v-model="regsiter_form_data.username" type="text" placeholder="Full Name" required>
                            <input class="form_input" v-model="regsiter_form_data.email" type="email" placeholder="johndoe@gmail.com" required>
                            <input class="form_input" v-model="regsiter_form_data.password" type="password" placeholder="password" required>
                            <button type="submit" class="bg-green w-full py-3 text-white rounded-3xl">Continue</button>
                        </div>
                    </form>
                    <div class="mt-5">
                        <GoogleLogin class="!w-full" :callback="callback" auto-login/>
                            <!-- <GoogleAuthButton/> -->
                        <!-- </GoogleLogin> -->
                    </div>

                    <div class="mt-5">
                        <LinkedInSignin :client-id="linkediInClientId" css="flex justify-center p-3 border border-slate-300 rounded-3xl shadow-sm bg-white text-sm font-medium text-slate-500 hover:!bg-slate-50 cursor-pointer"/>
                    </div>

                    <div class="mt-5">
                        <VFacebookLogin app-id="903137658112158" class=" flex flex-row text-sm justify-center items-center gap-3 border w-full rounded-3xl p-3 hover:bg-slate-50">
                            login with facebook
                        </VFacebookLogin>
                    </div>
                    
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import GoogleAuthButton from '@/components/GoogleAuthButton.vue';
import { googleAuthCodeLogin } from 'vue3-google-login';
import { decodeCredential } from 'vue3-google-login';
import axios from 'axios'

import { LinkedInSignin } from "linkedin-auth";
// const linkediInClientId = "86zgoouj5v6t14";

import VFacebookLogin from 'vue-facebook-login-component-next'

export default {
    name: "LoginView",
    components: {GoogleAuthButton, LinkedInSignin, VFacebookLogin},
    data(){
        return{
            linkediInClientId: '86zgoouj5v6t14',
            currentTab: 'login',
            login_form_data: {
                usernameOrEmail: '',
                password: ''
            },
            regsiter_form_data: {
                username: '',
                email: '',
                password: ''
            },
            error: '',
            callback:this.googleAuth,
        }
    },
    methods: {
        async login(){
            try{
                const response = await axios.post('http://localhost:8000/api/login', this.login_form_data);
                console.log(response);
            }
            catch(error){
                console.error(error);
                this.error = error.response.data.message;
            }
        },

        async register(){
            try{
                const response = await axios.post('http://localhost:8000/api/register', this.regsiter_form_data);
                console.log(response);
                alert(response.data.message)
            }
            catch(error){
                console.error(error)
                this.error = error.response.data.message;
            }
        },

        async googleLogin() {
        try {
            const response = await googleAuthCodeLogin();
            console.log("Handle the response", response);
            console.log("decode credential: ", decodeCredential(response.credential))
        } catch (error) {
            console.error("Error during Google login:", error);
          
        }
        },

        async googleAuth(response) {
                // console.log(response)
                console.log("decode credential: ", decodeCredential(response.credential));
                const decoded_user_data = decodeCredential(response.credential);
                const email = decoded_user_data.email;
                const firstname = decoded_user_data.given_name;
                const lastname = decoded_user_data.family_name;
                const googleId = decoded_user_data.sub;
                const picture = decoded_user_data.picture;
                try {
                    const userData = {
                        email: email,
                        firstname: firstname,
                        lastname: lastname,
                        googleId: googleId,
                        picture: picture,
                    }
                    console.log("user data from google: ", userData)

                    const response = await axios.post(`http://localhost:8000/api/google-auth`, userData);
                    localStorage.setItem('life-gaurd', response.data.token);
                    this.$router.push('/profile');
                    // console.log(response);

                }catch(error){
                    console.log(error)
                }
        },


    }
}
</script>
<style scoped>
    .tab_switch{
        @apply rounded-3xl w-1/2 px-6 py-2 text-white
    }

    .active_tab{
        @apply bg-white text-green
    }

    .form_input{
        @apply border outline-none active:border active:border-blue-600 focus:border-blue-600 rounded-md p-3 text-sm;
    }
</style>