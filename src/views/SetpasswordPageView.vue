<template>
    <div class=" flex flex-col items-center">
        <div class=" w-[400px] mt-[150px] flex flex-col items-center">
            <img src="../assets/bright-next-logo.png" class=" w-[200px]" alt="bright-next Logo" />
            <div class="mt-6 w-[300px]">
                <h2 class=" font-bold text-2xl text-center text-gray-500">Set Your Password</h2>

                <div v-if="token_error"class="p-5 rounded-md bg-red-200 text-red-600 mt-3">
                    <strong>Looks like this Token Expired</strong>
                    <p>Request for a new password change link by selecting forgot passsword in the <RouterLink to="/login" class="text-blue-500">Login Page.</RouterLink></p>
                </div>

                <form @submit.prevent="SetPassword" class="mt-10">
                    <div class=" flex flex-col mt-3 gap-2 ">
                        <label class="text-sm font-bold" for="password">PASSWORD</label>
                        <input type="password" name="password" id="password" v-model="form.password" placeholder="password" class="rounded-md p-4">
                    </div>

                    <div class=" flex flex-col mt-6 gap-2">
                        <label class="text-sm font-bold" for="password_confirmation">CONFIRM PASSWORD</label>
                        <input type="password" name="password_confirmation" id="password_confirmation" v-model="form.password" placeholder="password" class="rounded-md p-4">
                    </div>
                    
                    <div class="mt-12">
                        <button type="button" @click="SetPassword" class="bg-bna_blue px-12 py-3 rounded-full font-bold text-white w-full hover:bg-opacity-90 shadow-lg shadow-bna_blue">SAVE</button>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios';


    export default {
        name: "SetpasswordPageView",
        data(){
            return{
                form: {
                    password: '',
                    password_confirmation: ''
                },
                token_error: false,
            }
        },

        methods:{
            async SetPassword(){
                try{
                    const form = {
                    newPassword: this.form.password,
                    resetToken: this.$route.params.reset_token
                    }
                    const response = await axios.post(`${this.api_url}/pass/${this.$route.reset_token}/reset`, form);
                    console.log(response);
                    this.$router.push("/login");
                }catch(error){
                    if(error.response.status == 400){
                        this.token_error = true
                    }
                }
                
            },
        }
    }
</script>

<style scoped>

</style>