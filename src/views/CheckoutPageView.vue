<template>
<div class="h-screen">
    <div class=" flex flex-col justify-center items-center w-full mt-10">
        <section class=" flex flex-col w-[300px] relative h-6 items-center">
            <div class="flex w-[80%] bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            <div class=" absolute -top-3 flex flex-row w-full justify-between">
                <div class="flex flex-col items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full dark:ring-gray-900 shrink-0" :class="tab >= 0 ? 'bg-bna_green':'bg-gray-400'">
                        <svg class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </div>
                    <div class="mt-3">
                        <h3 class="font-medium" :class="{'text-bna_green':tab >= 0}">Account</h3>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full dark:ring-gray-900 shrink-0" :class="tab >= 1 ? 'bg-bna_green':'bg-gray-400'">
                        <svg class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </div>
                    <div class="mt-3">
                        <h3 class="font-medium" :class="{'text-bna_green':tab >= 1}">Review</h3>
                    </div>
                </div>

                <div class="flex flex-col items-center">
                    <div class="z-10 flex items-center justify-center w-6 h-6 rounded-full dark:ring-gray-900 shrink-0" :class="tab >= 2 ? 'bg-bna_green':'bg-gray-400'">
                        <svg class="w-2.5 h-2.5 text-blue-100 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </div>
                    <div class="mt-3">
                        <h3 class="font-medium" :class="{'text-bna_green':tab >= 2}">Payment</h3>
                    </div>
                </div>
            </div>   

        </section>

        <section class=" w-full flex flex-col md:ps-8 mt-20">
            <div class="flex flex-col md:flex-row gap-3 p-3">
                <div class=" w-full md:w-[60%] mt-3">
                    <button class=" self-start font-bold text-bna_blue"> 
                        <span><i class="bi bi-chevron-left"></i> Go back</span>
                    </button>

                    <form class="mt-3">
                        <div v-if="tab == 0">
                            <h1 class="font-bold text-2xl">1- Account Details</h1>
                            <div class="mt-3 rounded-xl bg-white flex flex-col gap-8 p-10">
                                <div class="flex flex-row gap-10 flex-wrap">
                                    <label class=" flex flex-col grow">
                                        <span>FIRST NAME*</span>
                                        <input type="name" placeholder="Firstname" name="firstname" class="form_input">
                                    </label>
                                    <label class=" flex flex-col grow">
                                        <span>LAST NAME*</span>
                                        <input type="name" placeholder="Lastname" name="firstname" class="form_input">
                                    </label>
                                </div>

                                <div class="flex flex-row gap-10 flex-wrap">
                                    <label class=" flex flex-col grow">
                                        <span>EMAIL*</span>
                                        <input type="email" placeholder="e.g johndoe@gmail.com" name="email" class="form_input">
                                    </label>
                                    <label class=" flex flex-col grow">
                                        <span>CONFIRM EMAIL*</span>
                                        <input type="name" placeholder="e.g johndoe@gmail.com" name="email_confirmation" class="form_input">
                                    </label>
                                </div>

                                <div class="rounded-xl bg-gray-100 p-5">
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" v-model="accept_TOS" class="w-4 h-4 text-bna_blue bg-gray-100 border-gray-300 rounded focus:ring-bna_blue dark:focus:ring-bna_blue dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">By continuing you accept the <a href="#" class="text-bna_blue dark:text-blue-500 hover:underline">terms of usage.</a>.</label>
                                    </div>
                                </div>

                                <div class="py-5 flex flex-row justify-end gap-6">
                                    <button class="form_btn bg-bna_green">CANCEL</button>
                                    <button class="form_btn bg-bna_blue" @click="tab += 1" :disabled="!accept_TOS">CONTINUE</button>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5" v-if="tab == 1">
                            <h1 class="font-bold text-2xl">2- Review</h1>
                            <div class="mt-3 rounded-xl bg-white  flex flex-col gap-8 p-10">
                                <h2 class="font-bold text-xl">Your Order</h2>
                                <div class="bg-gray-100 rounded-3xl p-6 flex flex-col gap-3">
                                    <div class="font-bold text-lg flex flex-row justify-between" v-for="course in courses">
                                        <p class="w-[70%]">{{ course.title}}</p>
                                        <span>$ {{ course.amount }}</span>
                                    </div>
                                    <div class="font-bold text-lg flex flex-row justify-between text-bna_blue">
                                        <p>Total</p>
                                        <span>$ 289.0</span>
                                    </div>
                                </div>
                                <div class="py-5 flex flex-row justify-end gap-6">
                                    <button class="form_btn bg-bna_green" @click="tab -= 1">GO BACK</button>
                                    <button class=" self-end form_btn bg-bna_blue" @click="tab += 1">PURCHASE</button>
                                </div>
                                
                            </div>
                        </div>

                        <div class="mt-5" v-if="tab == 2">
                            <h1 class="font-bold text-2xl">3- Payment</h1>
                            <div class="mt-3 rounded-xl bg-white flex flex-col gap-3 p-10">
                                <div class="flex flex-col gap-2 justify-start items-start">
                                    <h2 class="font-bold text-xl">Pay with Stripe</h2>
                                    <button class=" bg-[#2C2C5E] text-white p-5 font-bold rounded-md">Checkout with Stripe</button>
                                </div>
                               
                                <div class="flex flex-col gap-2 justify-start items-start mt-6">
                                    <h2 class="font-bold text-xl">Pay with Paypal</h2>
                                    <button class=" bg-yellow-400 text-white p-5 font-bold rounded-md">Checkout with Paypal</button>
                                </div>

                                <div class="py-5 flex flex-row justify-end gap-6">
                                    <button class="form_btn bg-bna_green" @click="tab -= 1">GO BACK</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

                <div class="w-full md:w-[40%] mt-3 md:m-0">
                    <button class=" self-start font-bold text-bna_green"> 
                        <span>Keep Shopping <i class="bi bi-chevron-right"></i></span>
                    </button>
                    <div class="mt-3">
                        <h1 class="font-bold text-2xl">Order Summary</h1>
                        <div class="mt-3 rounded-xl bg-white p-5 flex flex-col gap-4">
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Course</span>
                                <span>Price</span>
                            </div>
                            <div class="flex flex-row justify-between items-center hover:bg-gray-50 p-2 rounded-md" v-for="(course, index) in courses" :key="index">
                                
                                <div class="flex flex-row items-center gap-3 max-w-[70%]">
                                    <button @click="removeCourse(index)" class="hover:bg-slate-200 w-8 h-8 p-3 flex justify-center items-center rounded-full"><i class="bi bi-x-lg"></i></button>
                                    <span>{{ course.title }} {{ index }}</span>
                                </div>
                                <span>$ {{ course.amount }}</span>
                            </div>
                            <div class="border-b"></div>
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Subtotal</span>
                                <span>$299.99</span>
                            </div>
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Estimated Tax</span>
                                <span>$0</span>
                            </div>
                            <div>
                                <p>* Bright Next Academy is required by law to collect transaction taxes such as sales tax, VAT, GST or other similar taxes on purchases in some jurisdictions. The actual tax amount will be calculated based on the applicable jurisdictional tax rates when your order is processed.</p>
                            </div>
                            <div>
                                <p>*Excluding transaction taxes such as sales tax, VAT, GST and other similar taxes</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</div>
</template>

<script>
    export default {
        name: "CheckoutPageView",
        data(){
            return{
                tab: 0,
                courses: [
                    {id: 0, title: "Basic Knowledge of AI and Machine Learning", amount: 150},
                    {id: 1, title: "Advanced AI and Machine Learning", amount: 149}
                ],
                accept_TOS: false,
            }
        },

        methods:{
            removeCourse(index) {
                // if(this.courses.length >= 1 && index != 0){
                    this.courses.splice(index, 1);
                    if(this.courses.length <= 0){
                        // do not allow check out course be zero
                        window.location.reload()
                    }
                // }
            },
        }
    }
</script>

<style scoped>
    .form_input{
        @apply bg-gray-100 border rounded-md p-3
    }

    .form_btn{
        @apply rounded-3xl px-6 py-3 text-white font-bold shadow-lg
    }

    button:disabled{
        @apply bg-gray-400 cursor-not-allowed
    }
</style>