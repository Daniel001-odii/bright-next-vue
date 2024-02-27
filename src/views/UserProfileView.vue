<template>
    <div>
        <h1>Your Profile..</h1>
        <p class="flex flex-col justify-center items-center">
            <img v-if="user.avatar_url" alt="profile image" :src="user.avatar_url" height="100px" class="rounded-full">
            {{ user.firstname }} {{ user.lastname }} <br/>
            {{ user.email }}<br/>
            joined: {{ user.createdAt }}
            <!-- {{ user }} -->
        </p>
        <button @click="logout()" class="rounded-lg p-3 bg-green text-white">Logout</button>
    </div>
</template>
<script>
import axios from 'axios';


export default {
    name: "UserProfileView",
    data(){
        return{
            user: '',
        }
    },
    methods: {
        async getUser(){
            // console.log(localStorage.getItem('life-gaurd'))
            const headers = {
                Authorization : `JWT ${localStorage.getItem('life-gaurd')}`,
            }

            try{
                const res = await axios.get(`${this.api_url}/get-user`, { headers });
                this.user = res.data.user;
                // console.log(res);
            }
            catch(error){
                alert(error)
            }
        },

        logout(){
            localStorage.removeItem('life-gaurd');
            this.$router.push('/login')
        }
    },
    mounted(){
        this.getUser();
    }
    
}
</script>
<style scoped>
    
</style>