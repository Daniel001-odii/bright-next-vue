<template>
    <div class="absolute z-10 bg-[#EEF0F7] h-screen w-full" v-if="set_password_screen">
        <div class=" flex flex-col items-center">
        <div class=" w-[400px] mt-[150px] flex flex-col items-center">
            <img src="../assets/bright-next-logo.png" class=" w-[200px]" alt="bright-next Logo" />
            <div class="mt-6 w-[300px]">
                <h2 class=" font-bold text-2xl text-center text-gray-500">Set Your Password</h2>

                <div v-if="token_error"class="p-5 rounded-md bg-red-200 text-red-600 mt-3">
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
            <p class="text-center p-5">We've sent a cofirmation email and a password reset link to <strong>{{ user.email }}</strong>.</p>
            <!-- <RouterLink to="/password"> -->
                <button @click="set_password_screen = !set_password_screen" class=" px-12 py-3 rounded-full font-bold text-lg text-white bg-bna_blue hover:bg-opacity-90 uppercase shadow-lg shadow-bna_blue">set password</button>
            <!-- </RouterLink> -->
            <!-- <span>{{ $route.query.payment_intent_client_secret }}</span> -->
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
            email: String,
        },
        data(){
            return{
                user:'',

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

            async createNewUser(){
                const form = {
                    user: JSON.parse(localStorage.getItem('BNA_guest_user')),
                }
            
                try{
                    const response = await axios.post(`${this.api_url}/users/guest`, form);
                    console.log("response from create user: ", response)
                    alert("user created!");
                }catch(error){
                    console.log("error creating user: ", error);
                }
            },

            async createPassword(){
                this.security.password_reset_token =  this.$route.query.payment_intent_client_secret;
                const form = {
                    password: this.security.password,
                    reset_token: this.security.password_reset_token,
                };

                try{
                    const response = await axios.post(`${this.api_url}/users/guest/security`, form);
                }catch(error){
                    console.log("error setting password: ", error);
                }
            },

            async checkResetToken(){
                try{
                    const response = await axios.post(`${this.api_url}/users/guest/${this.$route.query.payment_intent_client_secret}`);
                    console.log("response from token checker: ", response);
                    // this.token_error = response.data.message;
                }catch(error){
                    console.log("error checking token", error);

                }   
            }
        },

        mounted() {
            this.getUser();

            this.createNewUser();

            this.checkResetToken();
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