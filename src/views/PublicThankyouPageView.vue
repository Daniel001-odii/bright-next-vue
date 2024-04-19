<template>
    <div class="absolute z-10 bg-[#EEF0F7] h-screen w-full" v-if="set_password_screen">
        <div class=" flex flex-col items-center">
        <div class=" w-[400px] mt-[150px] flex flex-col items-center">
            <img src="../assets/bright-next-logo.png" class=" w-[200px]" alt="bright-next Logo" />
            <div class="mt-6 w-[300px]">
                <h2 class=" font-bold text-2xl text-center text-gray-500">Set Your Password</h2>

                <div v-if="token_error"class="p-5 rounded-md text-red-600 mt-3 text-center">
                    <strong>Looks like this Token Expired</strong>
                    <p>Request for a new password change link by selecting forgot passsword in the <RouterLink to="/login" class="text-blue-500">Login Page.</RouterLink></p>
                </div>

                <form v-else @submit.prevent="createPassword" class="mt-10">
                    <div class=" flex flex-col mt-3 gap-2 ">
                        <label class="text-sm font-bold" for="password">PASSWORD</label>
                        <input type="password" name="password" id="password" v-model="security.password" placeholder="password" class="rounded-md p-4">
                    </div>

                    <div class=" flex flex-col mt-6 gap-2">
                        <label class="text-sm font-bold" for="password_confirmation">CONFIRM PASSWORD</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" v-model="security.password_confirmation" placeholder="password" class="rounded-md p-4">
                        <small v-if="security.password != security.password_confirmation" class="text-red-500">passwords do not match</small>
                    </div>
                    
                    <div class="mt-12">
                        <button :disabled="security.password != security.password_confirmation" type="button" @click="createPassword" class="bg-bna_blue px-12 py-3 rounded-full font-bold text-white w-full hover:bg-opacity-90 shadow-lg shadow-bna_blue">SAVE</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
    </div>

    <div class="w-full h-screen bubble_screen flex justify-center ">
        <div class=" mt-[150px] flex flex-col justify-center items-center h-[400px] w-[80%] bg-white rounded-3xl bg-opacity-80  backdrop-blur-md gap-3">
            <h1 class="font-bold text-2xl">Thank you! You're all set.</h1>
            <p class="text-center p-5">We've sent a cofirmation email and a password reset link to <strong>{{ email }}</strong>.</p>
            <!-- <RouterLink to="/password"> -->
                <button @click="set_password_screen = !set_password_screen" class=" px-12 py-3 rounded-full font-bold text-lg text-white bg-bna_blue hover:bg-opacity-90 uppercase shadow-lg shadow-bna_blue">set password</button>
            <!-- </RouterLink> -->
            <!-- <span class="w-[100px] text-red-500">reset token:{{ $route.query.payment_intent_client_secret }}</span> -->
        </div>

        
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';

// import SetPassword from '../views/SetpasswordPageView'

    export default {
        name: "PublicThankyouPageView",
        // components: { SetPassword },
        props: {
            auth_user: Boolean,
        },
        data(){
            return{
                user:'',

                email: '',

                set_password_screen: false,

                security: {
                    password: '',
                    password_confirmation: '',
                    password_reset_token:'',
                },

                token_error: '',
            }
        },
        methods: {
            getUser(){
                this.user = JSON.parse(localStorage.getItem('BNA_guest_user'));
            },

            // create user account...
            async createNewUser(){
                const form = {
                    user: JSON.parse(localStorage.getItem('BNA_guest_user')),
                }
            
                try{
                    const response = await axios.post(`${this.api_url}/users/guest`, form);
                    console.log("response from create user: ", response);
                    // if(response.status == )
                    // alert("user created!");
                }catch(error){
                    console.log("error creating user: ", error);
                }
            },


            async createPassword(){
                // this.security.password_reset_token =  this.$route.query.payment_intent_client_secret;
                if(this.$route.query.payment_intent_client_secret){
                    this.security.password_reset_token = this.$route.query.payment_intent_client_secret
                } else if(this.$route.params.reset_token) {
                    this.security.password_reset_token = this.$route.params.reset_token;
                }
                const form = {
                    password: this.security.password,
                    reset_token: this.security.password_reset_token,
                };

                try{
                    const response = await axios.post(`${this.api_url}/users/guest/security`, form);
                    localStorage.setItem("BNA", response.data.token);
                    // alert(response.data.message);
                    // this.loading = false;
                    this.$router.push("/bn/dashboard");
                    console.log("password change successfully: ", response);
                }catch(error){
                    console.log("error setting password: ", error);
                }
            },

            async checkResetTokenAndReturnEmail(){
                // const reset_token = this.$route.query ? this.$route.query.payment_intent_client_secret : this.$route.params.reset_token;

                // check if user is visiting via checkout page or via email link...
                // email link has more clean link/url
                // change password link from link is more verbose
                let reset_token;
                if(this.$route.query.payment_intent_client_secret){
                    reset_token = this.$route.query.payment_intent_client_secret
                } else if(this.$route.params.reset_token) {
                    reset_token = this.$route.params.reset_token;
                }

                try{
                    const response = await axios.post(`${this.api_url}/users/guest/${reset_token}`);
                    console.log("response from token checker: ", response);
                    this.email = response.data.email;
                    // this.token_error = response.data.message;
                }catch(error){
                    console.log("error checking token", error);
                    if(error.response.status == 400){
                        this.token_error = error.response.data.message;
                        this.set_password_screen = !this.set_password_screen;
                    }
                }  
            }
        },

        mounted() {
            this.createNewUser();
            // this.getUser();
            this.checkResetTokenAndReturnEmail();
        }

    }

    /*

    take guest user details from localstorage
    take payment_intent from route

    create new user using the details
    andset user password...

    */
</script>

<style scoped>
.bubble_screen{
    background: url('../assets/images/bubble.png');
    background-size: cover;
    background-position: center;

}

button:disabled{
        @apply bg-gray-400 cursor-not-allowed
    }

</style>