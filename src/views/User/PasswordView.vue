<template>
    <div>
        <PageTitle class="font-bold text-3xl">Change Password</PageTitle>

<div class="flex flex-col bg-white rounded-lg mt-6 justify-center items-center px-5 md:px-24 py-5">
    <div class="flex flex-row justify-center w-full gap-10 mt-12">
       
        <div class=" flex flex-col gap-6 w-full">
            <div class="flex flex-col">
                <label for="password">CURRENT PASSWORD</label>
                <input type="password" id="password" class=" border p-4 rounded-lg bg-gray-100 w-full" placeholder="********">
            </div>
            <div class="flex flex-col">
                <label for="password_confirmation">NEW PASSWORD</label>
                <input type="password" id="password_confirmation" class=" border p-4 rounded-lg bg-gray-100 w-full" placeholder="********">
            </div>
        </div>
    </div>

    <div class=" w-full rounded-2xl bg-gray-100 p-8 font-bold mt-8 flex flex-col gap-4 ">
        <p>Your Password must have the following:</p>
        <ol>
            <li v-for="required in requirements">{{ required }}</li>
        </ol>
    </div>

    <div class="flex flex-row self-end gap-4 mt-8">
        <button class="bna_btn  bg-bna_green">cancel</button>
        <button class="bna_btn  bg-bna_blue">save</button>
    </div>
</div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';



export default {
    name: "PasswordView",
    components: { PageTitle },
    data(){
        return{
            requirements: [
                "At least 8 characters long but 10 or more is better.",
                "A combination of uppercase letters, lowercase letters, numbers, and symbols.",
                "Not your name or last name",
                "Significantly different from your previous passwords.",
            ]
        }
    }
}
</script>

<style scoped>

</style>