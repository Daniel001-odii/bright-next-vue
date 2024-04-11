<template>
    <div>
        <div class="flex flex-col">
            <PageTitle class="font-bold text-3xl">Subscription</PageTitle>

            <div class="flex flex-col bg-white rounded-lg mt-6 px-5 md:px-24 py-5 gap-8">
                <h3 class="font-bold text-xl text-start mt-6">Payment Methods</h3>
                <button class="bna_btn bg-bna_green w-fit mt-4">add payment method</button>
                
                <div>
                    <h3 class="font-bold text-xl text-start mt-6">Billing Currency</h3>
                    <p>Your Current billing currency is set to USD (US Dollar).</p>
                </div>

                <div>
                    <h3 class="font-bold text-xl text-start mt-6">Upcoming bill</h3>
                    <p class="py-3">Billing cycle: Jan 24, 2024-Feb 23, 2024</p>
                    <div class="w-full flex flex-row justify-between mt-4">
                        <span class="font-bold text-lg">App Fees</span>
                        <span class="font-bold text-lg">$99.00</span>
                    </div>
                    <div class="w-full flex flex-row justify-between mt-4">
                        <span class="font-bold text-lg">Running total</span>
                    </div>
                    <div class="w-full flex flex-row justify-between mt-4">
                        <span class="font-bold text-lg">Courses + Fees</span>
                        <span class="font-bold text-lg">$347.00</span>
                    </div>
                    <div>
                        <button class="bna_btn bg-bna_green mt-6">view details</button>
                    </div>
                </div>

                <div>
                    <h3 class="font-bold text-xl text-start mt-6">Billing History</h3>
                    <p>List of courses you have purchased and its montly payment.</p>
                    
                    <div class="flex flex-col">
                        <div class="relative overflow-x-auto">
                            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                <tbody>
                                    <tr class="bg-white">
                                        <th scope="row" class="border-r px-6 py-4 font-medium text-gray-900 ">
                                            Basic Knowledge of AI and Machine Learning
                                        </th>
                                        <td class=" border-r px-6 py-4">
                                            <span class=" bg-green-200 rounded-xl px-3 font-bold">Paid</span>
                                        </td>
                                        <td class=" border-r px-6 py-4">
                                            March 06
                                        </td>
                                        <td class="border-r px-6 py-4">
                                            $2999
                                        </td>
                                        <td class=" px-6 py-4">
                                            Invoice
                                        </td>
                                    </tr>
                                    
                                </tbody>
                            </table>
                        </div>
                        <button class="bna_btn bg-bna_green mt-5 w-fit">view more</button>
                    </div>

                </div>

                <div>
                    <h3 class="font-bold text-xl text-start mt-6">Statement of charges</h3>
                    <p>View a summary of all your Shopify charges for any date range within the last 90 days.</p>
                    <button class="bna_btn bg-bna_blue mt-5">view all summary</button>
                </div>

                </div>

                
        </div>
    </div>
</template>

<script>
import PageTitle from '@/components/PageTitle.vue'


export default {
    name: "SubscriptionView",
    components: { PageTitle },
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>