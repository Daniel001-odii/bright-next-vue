<template>
<div v-if="loading" class=" flex flex-col h-screen w-screen fixed z-10 bg-slate-50 justify-center items-center opacity-90">
    <div role="status">
        <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-green" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span class="sr-only">Loading...</span>
    </div>
</div>

<!-- <div>Logged in as: {{ user }}</div> -->
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
                            <button type="button" @click="login" class="bg-green w-full py-3 text-white rounded-3xl">Continue</button>
                        </div>
                    </form>

                    <div class="mt-5">
                        <!-- <GoogleLogin class="!w-full" :callback="callback" auto-login prompt> -->
                            <GoogleAuthButton @click="googleLogin"/>
                        <!-- </GoogleLogin> -->
                    </div>

                    <div class="mt-5">
                        <LinkedInSignin
                            :client-id="linkedin_client_id"
                            :scope="'email openid profile'"
                            :redirectUri="redirect_uri"
                            css="flex justify-center p-3 border border-slate-300 rounded-3xl shadow-sm bg-white text-sm font-medium text-slate-500 hover:!bg-slate-50 cursor-pointer"
                        />
                        
                    </div>

                    <div class="mt-5">
                        <v-facebook-login app-id="7274975539289923" @login="handleFacebookLogin" class=" flex flex-row text-sm justify-center items-center gap-3 border w-full rounded-3xl p-3 hover:bg-slate-50">
                            login with facebook
                        </v-facebook-login>
                    </div>

                    <div class="mt-5">
                        <button class="flex justify-center p-3 border border-slate-300 rounded-3xl shadow-sm bg-white text-slate-500 hover:!bg-slate-50 cursor-pointer w-full">Continue with microsoft</button>
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
                       
                    </div>

                    <div class="mt-5">
                       
                    </div>

                    <div class="mt-5">
                       
                    </div>
                    
                </div>
            </div>
        </div>
       
    </div>
</template>

<script>
import GoogleAuthButton from '@/components/GoogleAuthButton.vue';
import { googleAuthCodeLogin } from 'vue3-google-login';
import axios from 'axios'

import { LinkedInSignin } from "linkedin-auth";

import VFacebookLogin from 'vue-facebook-login-component-next'


export default {
    name: "LoginView",
    components: {GoogleAuthButton, LinkedInSignin, VFacebookLogin},
    data(){
        return{
            linkedin_client_id: '86zgoouj5v6t14',
            linkedin_client_secret: 'orlZyosk0IXKu7lc',
            linkedin_login_code: '',
            redirect_uri: this.linkedin_callback,

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
            callback: this.googleAuth,
            loading: false,

            user: '',
        }
    },
    methods: {
        async login(){
            this.loading = true;
            try{
                const response = await axios.post(`${this.api_url}/login`, this.login_form_data);
                // console.log(response);
                localStorage.setItem("BNA", response.data.token);
                alert(response.data.message);
                this.loading = false;
                this.$router.push("/profile");
            }
            catch(error){
                // console.error(error);
                this.error = error.response.data.message;
            }
        },

        async register(){
            this.loading = true;
            try{
                const response = await axios.post(`${this.api_url}/register`, this.regsiter_form_data);
                console.log(response);
                this.loading = false;
                alert(response.data.message);

            }
            catch(error){
                console.error(error)
                this.error = error.response.data.message;
            }
        },

        async googleLogin() {
            this.loading = true;
            try {
                const response = await googleAuthCodeLogin();
                // console.log("Handle the response", response);
                const auth_code = { code: response.code };
                const new_response = await axios.post(`${this.api_url}/google-auth`, auth_code);
                console.log("response returned from backend", new_response);
                this.loading = false;
                alert(new_response.data.message);
                localStorage.setItem("BNA", new_response.data.token);
                this.$router.push("/profile");
            } catch (error) {
                console.error("Error during Google login:", error);
                this.loading = false;
            }
        },

        async handleFacebookLogin(response) {
            this.loading = true;
            console.log("Logged in with Facebook:", response);

            // Extract the access token from the response
            const accessToken = response.authResponse.accessToken;
            this.loading = false;

            try {
            this.loading = true;
            // Fetch user profile details from Facebook's Graph API
            const userProfileResponse = await fetch(`https://graph.facebook.com/v13.0/me?fields=id,name,email,picture&access_token=${accessToken}`);
            
            if (!userProfileResponse.ok) {
                throw new Error('Failed to fetch user profile');
            }

            // Parse the response as JSON
            const userProfileData = await userProfileResponse.json();

            console.log("user profile data: ", userProfileData);
            this.user = userProfileData;
            this.loading = false;

            const BNA_USER_DATA = {
                id: userProfileData.id,
                name: userProfileData.name,
                picture: userProfileData.picture.data.url
            };

            console.log("clean user data: ", BNA_USER_DATA)

            try{
                this.loading = true;
                const fb_response = await axios.post(`${this.api_url}/facebook-auth`, BNA_USER_DATA);
                this.loading = false;
                console.log("response from fb auth BNA api: ", fb_response);
                localStorage.setItem("BNA", fb_response.data.token);
                this.$router.push("/profile");

            }catch(error){
                console.log("BNA error saving user info", error);
                this.loading = false;
            }

            // You can access and process other user details as needed
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        },

        async handleLinkedinLogin() {
            const code = this.linkedin_login_code;
            this.loading = true;
            try {
                const response = await axios.post(`${this.api_url}/linkedin-auth/${code}`);
                
                this.loading = false;
                console.log("from BNA API LinkedIn:", response);
                localStorage.setItem("BNA", response.data.token);
                this.$router.push("/profile");
            } catch (error) {
                console.log("Error while requesting access token from LinkedIn:", error);
                this.loading = false;
            }
        }
    },

    mounted(){
        console.log("your current route : ", window.location.href);
        
        if(this.$route.query.code){
            // console.log("user code found!: ", this.$route.query.code);
            this.linkedin_login_code = this.$route.query.code;
        };

        if(this.linkedin_login_code){
            console.log("using prefilled details: ", this.linkedin_login_code)
            this.handleLinkedinLogin()

        }
        
    },
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