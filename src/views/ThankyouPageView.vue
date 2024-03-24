<template>
    <div class="w-full h-screen bubble_screen flex justify-center ">
        <div class=" mt-[150px] flex flex-col justify-center items-center h-[400px] w-[80%] bg-white rounded-3xl bg-opacity-80  backdrop-blur-md gap-3">
            <h1 class="font-bold text-2xl">Thank you! You're all set.</h1>
            <p class="text-center">We've sent a confirmation email with details to {{ user.email }}</p>
            <RouterLink to="/bn/dashboard">
                <button class=" px-12 py-3 rounded-full font-bold text-lg text-white bg-bna_blue hover:bg-opacity-90 uppercase shadow-lg shadow-bna_blue">Go to dashboard</button>
            </RouterLink>
            <!-- <RouterLink to="/password">
                <button class=" px-12 py-3 rounded-full font-bold text-lg text-white bg-bna_blue hover:bg-opacity-90 uppercase shadow-lg shadow-bna_blue">set password</button>
            </RouterLink> -->
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';
import axios from 'axios';

    export default {
        name: "ThankyouPageView",
        props: {
            auth_user: Boolean,
            email: String,
        },
        data(){
            return{
                user:'',
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
            this.getUser();
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