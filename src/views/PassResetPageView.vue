<template>
    <div class=" flex flex-col items-center">
        <div class=" w-[400px] mt-[150px] flex flex-col items-center">
            <img src="../assets/bright-next-logo.png" class=" w-[200px]" alt="bright-next Logo" />
            <div class="mt-6">
                <h2 class=" font-bold text-2xl text-center text-gray-500">Reset Your Password</h2>
                <form class="mt-10">
                    <p class="text-center font-bold">Enter your email and we will send a link<br/> to reset your password</p>
                    <div class=" flex flex-col mt-6 gap-2 w-[300px]">
                        <label class="text-sm font-bold" for="email">EMAIL</label>
                        <input type="email" name="email" id="email" v-model="form.email" placeholder="email" class="rounded-md p-4">
                    </div>
                    
                    <div class="mt-12">
                        <button class="bg-bna_blue px-12 py-3 rounded-full font-bold text-white w-full hover:bg-opacity-90 shadow-lg shadow-bna_blue">SAVE</button>
                    </div>
                    <!-- <div> -->
                    <button class="w-full mt-6 underline font-bold">cancel</button>
                    <!-- </div> -->
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "SetpasswordPageView",
        data(){
            return{
                form: {
                    email: '',
                }
            }
        }
    }
</script>

<style scoped>

</style>