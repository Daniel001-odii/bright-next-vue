<template>
    <div>
        <div class="flex flex-col">
               
                <PageTitle> Linked Accounts</PageTitle>

                <div class="flex flex-col bg-white rounded-lg mt-6 justify-center items-center px-5 md:px-24 py-5 gap-6">
                    <div class="account_card">
                        <div class="flex flex-row gap-3">
                            <img src="../../assets/images/google.svg">
                            <span>Google</span>
                        </div>
                        <button class="bna_btn bg-bna_blue">connect</button>
                    </div>

                    <div class="account_card">
                        <div class="flex flex-row gap-3">
                            <img src="../../assets/images/facebook.svg">
                            <span>Facebook</span>
                        </div>
                        <button class="bna_btn bg-bna_blue">connect</button>
                    </div>

                    <div class="account_card">
                        <div class="flex flex-row gap-3">
                            <img src="../../assets/images/linkedin.svg">
                            <span>Linkedin</span>
                        </div>
                        <button class="bna_btn bg-bna_blue">connect</button>
                    </div>
                </div>
        </div>
    </div>
</template>



<script>
import PageTitle from '@/components/PageTitle.vue'


export default {
    name: "LinkedAccountsView",
    components: { PageTitle },
    data(){
        return{
            
        }
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