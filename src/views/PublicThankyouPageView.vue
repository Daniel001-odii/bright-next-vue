<template>
    <div class="absolute z-10 bg-[#EEF0F7] h-screen w-full" v-if="set_password_screen">
        <SetPassword/>
    </div>

    <div class="w-full h-screen bubble_screen flex justify-center ">
        <div class=" mt-[150px] flex flex-col justify-center items-center h-[400px] w-[80%] bg-white rounded-3xl bg-opacity-80  backdrop-blur-md gap-3">
            <h1 class="font-bold text-2xl">Thank you! You're all set.</h1>
            <p class="text-center p-5">We've sent a password reset link to <strong>johndoe@gmail.com</strong>! </p>
            <!-- <RouterLink to="/password"> -->
                <buttonn @click="set_password_screen = !set_password_screen" class=" px-12 py-3 rounded-full font-bold text-lg text-white bg-bna_blue hover:bg-opacity-90 uppercase shadow-lg shadow-bna_blue">set password</buttonn>
            <!-- </RouterLink> -->
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';

import SetPassword from '../views/SetpasswordPageView'

    export default {
        name: "PublicThankyouPageView",
        components: { SetPassword },
        props: {
            auth_user: Boolean,
            email: String,
        },
        data(){
            return{
                user:'',

                set_password_screen: false,
            }
        },
        methods: {
            async getUser(){
                this.loading = true;
                const headers = {
                    Authorization : `JWT ${localStorage.getItem('BNA')}`,
                }

                try{
                    const res = await axios.get(`${this.api_url}/get-user`, { headers });
                    this.user = res.data.user;
                    this.loading = false;
                    console.log(res);
                }
                catch(error){
                    console.log("error getting user: ", error)
                    this.loading = false;
                }
            },
        },

        mounted() {
            // this.getUser();
        }

    }
</script>

<style scoped>
.bubble_screen{
    background: url('../assets/images/bubble.png');
    background-size: cover;
    background-position: center;

}
</style>