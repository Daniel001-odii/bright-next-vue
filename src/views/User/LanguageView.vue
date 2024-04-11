<template>
    <div>
        <div class="flex flex-col">
            <PageTitle class="font-bold text-3xl">Language Preference</PageTitle>

            <div class="flex flex-col bg-white rounded-lg mt-6 justify-center items-center px-5 md:px-24 py-5">
                
                <select class="border p-6 w-full rounded-lg">
                    <option>Spanish</option>
                </select>
                <div class="flex flex-row self-end gap-4 mt-8">
                    <button class="bna_btn  bg-bna_blue">save</button>
                </div>
            </div>

            
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';


export default {
    name: "LanguageView",
    components: { PageTitle },
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>