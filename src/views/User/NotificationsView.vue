<template>
   <!-- <div class="flex flex-col"> -->
                <PageTitle class="font-bold text-3xl">Notifications Preferences</PageTitle>

                <div class="flex flex-col bg-white rounded-lg mt-6 justify-center items-center px-5 md:px-24 py-5 gap-6 relative">
                    <div class=" w-full flex flex-col">
                        <p class="mt-12">Configure your notification settings by checking the delivery method you prefer. Uncheck the box if you do not wish to receive the notifications for that communication type. SMS notifications require a verified phone number. You may receive up to three messages per day and message rates may apply. Reply STOP to end.</p>
                        <div class="flex flex-row flex-wrap gap-8 mt-8 self-end">
                            <button class="bna_btn bg-bna_green">Unsubscribe from All Mail</button>
                            <button class="bna_btn bg-bna_blue">Unsubscribe from All SMS</button>
                        </div>
                    </div>

                    <div class="w-full mt-12 flex flex-col gap-12">
                        <div class="flex flex-col gap-4">
                            <h2 class="font-bold text-2xl">Payment Reminders</h2>
                            <p>Send me messages for payment reminders</p>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                            </label>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h2 class="font-bold text-2xl">Alumni Services</h2>
                            <p>Keep me connected with alumni support.</p>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                            </label>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                            </label>
                        </div>

                        <div class="flex flex-col gap-4">
                            <h2 class="font-bold text-2xl">Learning Progress</h2>
                            <p>Notify me with due date reminders, check-ins and more to help me stay on track of my learning goals.</p>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                            </label>
                            <label class="inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" class="sr-only peer">
                                <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                            </label>
                        </div>
                    

                    <!-- <div class="flex flex-col gap-4 w-full"> -->
                            <div>
                                <h2 class="font-bold text-2xl">Marketing Communications</h2>
                                <p>Learn about new courses and programs, scholarship opportunities and upcoming special events.</p>
                                <span><strong>Upcoming special events and webinars</strong></span>
                            </div>
                            

                            <!-- FIRST -->
                            <div class="flex flex-col gap-3">
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Call</span>
                                </label>
                            </div>

                            <!-- PROMOTIONS -->
                            <div class="flex flex-col gap-3">
                                <span class="mt-6"><strong>Promotions</strong></span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Call</span>
                                </label>
                            </div>

                            <!-- SCHORLARSHIP ACCEPT -->
                            <div class="flex flex-col gap-3">
                                <span class="mt-6"><strong>Scholarship</strong></span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Call</span>
                                </label>
                            </div>

                            <!-- SURVEYS ACCEPT -->
                            <div class="flex flex-col gap-3">
                                <span class="mt-6"><strong>Surveys to improve my experience</strong></span>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">SMS</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Email</span>
                                </label>
                                <label class="inline-flex items-center cursor-pointer">
                                    <input type="checkbox" value="" class="sr-only peer">
                                    <div class="relative w-11 h-6 bg-gray-400  peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-bna_green"></div>
                                    <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Phone Call</span>
                                </label>
                            </div>
                    </div>
                </div>
        <!-- </div> -->
</template>

<script>
import PageTitle from '@/components/PageTitle.vue';


export default {
    name: "NotificationsView",
    components: { PageTitle },
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>