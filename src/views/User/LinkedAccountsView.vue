<template>
    <div>
        <div class="flex flex-col">
               
                <PageTitle> Linked Accounts</PageTitle>

                <!-- {{  user }} -->
                <div class="flex flex-col bg-white rounded-lg mt-6 justify-center items-center px-5 md:px-24 py-5 gap-6">
                    <div class="account_card">
                        <div class="flex flex-row gap-3">
                            <img src="../../assets/images/google.svg">
                            <span>Google</span>
                        </div>
                        <span v-if="user && user.provider == 'google'"> {{  user.email  }}</span>
                        <button v-else class="bna_btn bg-bna_blue">connect</button>
                        
                    </div>

                    <div class="account_card">
                        <div class="flex flex-row gap-3">
                            <img src="../../assets/images/facebook.svg">
                            <span>Facebook</span>
                        </div>
                        <span v-if="user && user.provider == 'facebook'"> {{  user.username  }}</span>
                        <button  v-else class="bna_btn bg-bna_blue">connect</button>
                    </div>

                    <div class="account_card">
                        <div class="flex flex-row gap-3">
                            <img src="../../assets/images/linkedin.svg">
                            <span>Linkedin</span>
                        </div>

                        <span v-if="user && user.provider == 'linkedin'">connected</span>
                        <button v-else class="bna_btn bg-bna_blue">connect</button>
                    </div>
                </div>
        </div>
    </div>
</template>



<script>
import PageTitle from '@/components/PageTitle.vue'
import axios from 'axios'

export default {
    name: "LinkedAccountsView",
    components: { PageTitle },
    data(){
        return{
            user: '',
        }
    },
    methods:{
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
    },

    mounted(){
        this.getUser();
    }

}
</script>

<style scoped>
    .account_card{
        @apply flex flex-row justify-center md:justify-between border rounded-lg w-full items-center font-bold p-3 hover:bg-slate-50 flex-wrap gap-3
    }

    .bna_btn{
        @apply w-full md:w-fit
    }
</style>