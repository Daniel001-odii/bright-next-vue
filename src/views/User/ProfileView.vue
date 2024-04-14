<template>
    <div>
        <div class="flex flex-col">
            <PageTitle>Basic information</PageTitle>

            <div v-if="user" class="flex flex-col bg-white rounded-lg mt-6 justify-center items-center px-5 md:px-24 py-5">
                <div class="flex flex-col  md:flex-row justify-center items-center w-full gap-10 mt-12">
                    <div class="flex flex-col justify-center items-center w-fit md:w-[300px]">
                        <!-- <div class="flex justify-center items-center bg-bna_green h-32 w-32 rounded-full text-5xl text-white">JD</div> -->
                        <div class="flex justify-center items-center bg-bna_green h-32 w-32 rounded-full text-5xl text-white overflow-hidden">
                            <img :src="user.avatar_url" class=" h-full"/>
                        </div>
                        <button type="butto" class=" text-bna_blue underline font-bold p-3 text-xl">Upload Picture</button>
                    </div>

                    <div class=" flex flex-col gap-3 w-full">
                        <div class="flex flex-col">
                            <label for="name">NAME</label>
                            <input type="name" id="name" class=" border p-4 rounded-lg bg-gray-100 w-full" placeholder="John Doe" :value="`${user.firstname} ${user.lastname}`">
                        </div>
                        <div class="flex flex-col">
                            <label for="email">EMAIl</label>
                            <input type="email" id="email" class=" border p-4 rounded-lg bg-gray-100 w-ful " placeholder="johndoe@mail.com" :value="user.email">
                        </div>
                    </div>
                </div>

                <div class=" rounded-2xl bg-gray-100 p-8 font-bold mt-8 flex flex-col gap-4 ">
                    <p>In order to graduate, you must complete a one-time verification of your identity. You will need to upload your government-issued ID and photo to Netverify.</p>
                    <button class="bg-bna_blue bna_btn w-fit">VERIFY</button>
                </div>

                <div class="flex flex-row self-end gap-4 mt-8">
                    <button class="bna_btn  bg-bna_green">cancel</button>
                    <button class="bna_btn  bg-bna_blue">save</button>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import PageTitle from '@/components/PageTitle.vue';

    export default {
        name: "ProfileView",
        components: { PageTitle },
        data(){
            return{
                user: '',
                is: '',
            }
        },

        methods: {
            async getUser(){
                const headers = {
                    Authorization : `JWT ${localStorage.getItem('BNA')}`,
                }

                try{
                    const res = await axios.get(`${this.api_url}/get-user`, { headers });
                    console.log("user: ", res)
                    this.user = res.data.user;
                    this.user_joined = res.data.user.createdAt;
                }
                catch(error){
                    console.log("error getting user: ", error)
                    if(error.response.status == 401){
                        alert("Your previous session expired please Login again.")
                    };
                    localStorage.removeItem("BNA");
                    this.$router.push("/login")
                }
        },
        },

        mounted(){
            this.getUser();
        }
    }
</script>

<style scoped>

</style>