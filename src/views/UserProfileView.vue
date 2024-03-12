<template>
    <div>
        <h1 class="text-4xl p-5">Welcome to brightnext academy</h1>
        <div class="flex flex-col items-center">
            <h1 class="text-3xl">Your Profile..</h1>
            <p class="flex flex-col justify-center items-center">
                <img v-if="user.avatar_url" alt="profile image" :src="user.avatar_url" height="100px" class="rounded-full">
                <span class="font-bold text-2xl">{{ user.firstname }} {{ user.lastname }} </span>
                <span class=" text-blue-400">{{ user.email }}</span>
                joined: {{ userReadableDate }}
                <!-- {{ user }} -->
            </p>
            <button @click="logout()" class="rounded-lg p-3 bg-green text-white">Logout</button>

        </div>
    </div>
</template>
<script>
import axios from 'axios';
import { formatTimestamp } from '../utils/formatDateTime';


export default {
    name: "UserProfileView",
    data(){
        return{
            user: '',
            user_joined: '',
        }
    },
    methods: {
        async getUser(){
            const headers = {
                Authorization : `JWT ${localStorage.getItem('BNA')}`,
            }

            try{
                const res = await axios.get(`${this.api_url}/get-user`, { headers });
                this.user = res.data.user;
                this.user_joined = res.data.user.createdAt;
                // console.log(res);
            }
            catch(error){
                alert(error)
            }
        },

        logout(){
            localStorage.removeItem('life-gaurd');
            this.$router.push('/login')
        },

        formatDateType(timestamp){
            const date = new Date(timestamp);
            const options = { year: "numeric", month: "long", day: "numeric" };
            return date.toLocaleDateString(undefined, options);
        }
    },
    computed: {
        userReadableDate() {
            return formatTimestamp(this.user_joined)
        },
    },
    mounted(){
        this.getUser();
    }
    
}
</script>
<style scoped>
    
</style>../utils/formatDateTime