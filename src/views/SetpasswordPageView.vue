<template>
    <div class=" flex flex-col items-center">
        <div class=" w-[400px] mt-[150px] flex flex-col items-center">
            <img src="../assets/bright-next-logo.png" class=" w-[200px]" alt="bright-next Logo" />
            <div class="mt-6">
                <h2 class=" font-bold text-2xl text-center text-gray-500">Set Your Password</h2>
                <form class="mt-10">
                    <div class=" flex flex-col mt-3 gap-2 w-[300px]">
                        <label class="text-sm font-bold" for="password">PASSWORD</label>
                        <input type="password" name="password" id="password" v-model="form.password" placeholder="password" class="rounded-md p-4">
                    </div>

                    <div class=" flex flex-col mt-6 gap-2 w-[300px]">
                        <label class="text-sm font-bold" for="password">CONFIRM PASSWORD</label>
                        <input type="password" name="password" id="password" v-model="form.password" placeholder="password" class="rounded-md p-4">
                    </div>
                    
                    <div class="mt-12">
                        <button class="bg-bna_blue px-12 py-3 rounded-full font-bold text-white w-full hover:bg-opacity-90 shadow-lg shadow-bna_blue">SAVE</button>
                    </div>
                    
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
                    password: '',
                    password_confirmation: ''
                }
            }
        }
    }
</script>

<style scoped>

</style>