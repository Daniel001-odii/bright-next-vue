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
                <div class=" w-full md:w-[60%]">
                    
                    <button @click="$router.go(-1)" class=" self-start font-bold text-bna_blue"> 
                        <span><i class="bi bi-chevron-left"></i> Go back</span>
                    </button>

                    <form @submit.prevent="payWithStripe"class="mt-3">
                        <div v-if="tab == 0">
                            <h1 class="font-bold text-2xl">1- Account Details</h1>
                            <div class="mt-3 rounded-xl bg-white flex flex-col gap-8 p-10">
                                <div class="flex flex-row gap-10 flex-wrap">
                                    <label class=" flex flex-col grow">
                                        <span>FIRST NAME*</span>
                                        <input type="name" placeholder="Firstname" name="firstname" class="form_input" v-model="user.firstname">
                                    </label>
                                    <label class=" flex flex-col grow">
                                        <span>LAST NAME*</span>
                                        <input type="name" placeholder="Lastname" name="firstname" class="form_input" v-model="user.lastname">
                                    </label>
                                </div>

                                <div class="flex flex-row gap-10 flex-wrap">
                                    <label class=" flex flex-col grow">
                                        <span>EMAIL*</span>
                                        <input type="email" placeholder="e.g johndoe@gmail.com" name="email" class="form_input" v-model="user.email" >
                                    </label>
                                    <label class=" flex flex-col grow">
                                        <span>CONFIRM EMAIL*</span>
                                        <input type="email" placeholder="e.g johndoe@gmail.com" name="email_confirmation" class="form_input" v-model="user.email">
                                    </label>
                                </div>

                                <div class="rounded-xl bg-gray-100 p-5">
                                    <div class="flex items-center">
                                        <input id="link-checkbox" type="checkbox" v-model="accept_TOS" class="w-4 h-4 text-bna_blue bg-gray-100 border-gray-300 rounded focus:ring-bna_blue dark:focus:ring-bna_blue dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                        <label for="link-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">By continuing you accept the <a href="#" class="text-bna_blue dark:text-blue-500 hover:underline">terms of usage.</a>.</label>
                                    </div>
                                </div>

                                <div class="py-5 flex flex-row justify-end gap-6">
                                    <button type="button" class="form_btn bg-bna_green">CANCEL</button>
                                    <button type="button" class="form_btn bg-bna_blue" @click="tab += 1" :disabled="!accept_TOS">CONTINUE</button>
                                </div>
                            </div>
                        </div>

                        <div class="" v-if="tab == 1">
                            <h1 class="font-bold text-2xl">2- Review</h1>
                            <div class="mt-3 rounded-xl bg-white  flex flex-col gap-8 p-10">
                                <h2 class="font-bold text-xl">Your Order</h2>
                                <div class="bg-gray-100 rounded-3xl p-6 flex flex-col gap-3">
                                    <div v-if="courses" class="font-bold text-lg flex flex-row justify-between" v-for="course in courses">
                                        <p class="w-[70%]">{{ course.title}}</p>
                                        <span>$ {{ course.price }}</span>
                                    </div>
                                    <div v-if="course" class="font-bold text-lg flex flex-row justify-between">
                                        <p class="w-[70%]">{{ course.title}}</p>
                                        <span>$ {{ course.price }}</span>
                                    </div>
                                    <div class="font-bold text-lg flex flex-row justify-between text-bna_blue">
                                        <p>Total</p>
                                        <span>$ {{ course.price }}.00</span>
                                    </div>
                                </div>
                                <div class="py-5 flex flex-row justify-end gap-6">
                                    <button type="button" class="form_btn bg-bna_green" @click="tab -= 1">GO BACK</button>
                                    <button type="button" class=" self-end form_btn bg-bna_blue" @click="tab += 1">PURCHASE</button>
                                </div>
                                
                            </div>
                        </div>

                        <div class="" v-if="tab == 2">
                            <h1 class="font-bold text-2xl">3- Payment</h1>
                            <div class="mt-3 rounded-xl bg-white flex flex-col gap-3 p-10">

                                <!-- IMPORT STRIPE COMPONENT HERE -->
                                <div class="flex flex-col gap-2 justify-start items-start">
                                    <h2 class="font-bold text-xl">Pay with Stripe</h2>
                                    <button :disabled="stripe_loading" type="button" @click="payWithStripe" class=" bg-[#2C2C5E] text-white p-5 font-bold rounded-md w-full hover:bg-black">
                                        
                                        <span v-if="stripe_loading" class="flex flex-row gap-3 justify-center items-center">
                                            <div role="status">
                                                <svg aria-hidden="true" class="inline w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                </svg>
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                            <span>Loading Stripe Payment</span>
                                        </span>
                                        <span v-else>Checkout with Stripe <i class="bi bi-stripe"></i></span>
                                    </button>
                                </div>
                               
                                <div class="flex flex-col gap-2 justify-start items-start mt-6">
                                    <h2 class="font-bold text-xl">Pay with Paypal</h2>
                                    <button type="button" class=" bg-yellow-300 text-blue-900 p-5 font-bold rounded-md w-full hover:bg-yellow-400 hover:text-white">
                                        Checkout with Paypal <i class="bi bi-paypal"></i></button>
                                </div>


                                <div class="py-5 flex flex-row justify-end gap-6">
                                    <button type="button" class="form_btn bg-bna_green" @click="tab -= 1">GO BACK</button>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>

                <div class="w-full md:w-[40%] mt-3 md:m-0">
                    <button @click="$router.go(-1)" class=" self-start font-bold text-bna_green"> 
                        <span>Keep Shopping <i class="bi bi-chevron-right"></i></span>
                    </button>
                    <div class="mt-3">
                        <h1 class="font-bold text-2xl">Order Summary</h1>
                        <div class="mt-3 rounded-xl bg-white p-5 flex flex-col gap-4">
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Course</span>
                                <span>Price</span>
                            </div>

                            <div v-if="courses" class="flex flex-row justify-between items-center hover:bg-gray-50 p-2 rounded-md" v-for="(course, index) in courses" :key="index">
                                
                                <div class="flex flex-row items-center gap-3 max-w-[70%]">
                                    <button @click="removeCourse(index)" class="hover:bg-slate-200 w-8 h-8 p-3 flex justify-center items-center rounded-full"><i class="bi bi-x-lg"></i></button>
                                    <span>{{ course.title }} {{ index }}</span>
                                </div>
                                <span>$ {{ course.price }}</span>
                            </div>
                            <div v-if="course" class="flex flex-row justify-between items-center hover:bg-gray-50 p-2 rounded-md">
                                
                                <div class="flex flex-row items-center gap-3 max-w-[70%]">
                                    <button @click="removeCourse(index)" class="hover:bg-slate-200 w-8 h-8 p-3 flex justify-center items-center rounded-full"><i class="bi bi-x-lg"></i></button>
                                    <span>{{ course.title }}</span>
                                </div>
                                <span>$ {{ course.price }}</span>
                            </div>

                            <div class="border-b"></div>
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Subtotal</span>
                                <span>${{ course.price }}</span>
                            </div>
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Estimated Tax</span>
                                <span>$0</span>
                            </div>
                            <div>
                                <p>* Bright Next Academy is required by law to collect transaction taxes such as sales tax, VAT, GST or other similar taxes on purchases in some jurisdictions. The actual tax price will be calculated based on the applicable jurisdictional tax rates when your order is processed.</p>
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
import axios from 'axios';
import PayPal from 'vue-paypal-checkout'
import ThankyouPageView from './ThankyouPageView.vue';


    export default {
        name: "CheckoutPageView",
        components: { PayPal, ThankyouPageView },
        data(){
            return{
                user: {
                    firstname: '',
                    lastname: '',
                    email: '',
                },
                tab: 2,
                courses: [],
                course: {
                    title: '',
                    price: ''
                },

                page_loading: false,

                stripe_loading: false,

                accept_TOS: false,
                thankyou_modal: false,

            }
        },

        methods:{
            removeCourse(index) {
                    this.courses.splice(index, 1);
                    if(this.courses.length <= 0){
                        // do not allow check out course be zero
                        window.location.reload()
                    }
            },

            async getCourseDetails(){
                try{
                    const response = await axios.get(`${this.api_url}/courses/${this.$route.params.course_title}`);
                    console.log(response.data);
                    this.course = response.data;
                    // this.page_loading = false;
                }catch(error){
                    console.log(error.response.data);
                    // this.page_loading = false;
                }
            },

            async getUser(){
                // this.loading = true;
                const headers = {
                    Authorization : `JWT ${localStorage.getItem('BNA')}`,
                }

                try{
                    const res = await axios.get(`${this.api_url}/get-user`, { headers });
                    this.user = res.data.user;
                    // this.loading = false;
                    // console.log(res);
                }
                catch(error){
                    console.log("error getting user")
                    // this.loading = false;
                }
            },

            async payWithStripe() {
                this.stripe_loading = true;

                const checkout = {
                    name: this.course.title,
                    amount: this.course.price,
                    courses: [this.course._id],
                };
                console.log("testing: ", checkout)

                try {
                    const response = await axios.post(`${this.api_url}/payment/stripe`, checkout);
                    console.log(response.data);
                    this.stripe_loading = false;

                    // send the user to the stripe checkout page...
                    window.location.href = response.data.session_url;

                    // Redirect to the checkout page or handle the session response as needed
                } catch (error) {
                    console.error(error);
                    this.stripe_loading = false;
                }
            },

        },

        mounted(){
            this.getUser();
            this.getCourseDetails();
        },

    
    }
</script>

<style scoped>
    .form_input{
        @apply bg-gray-100 border rounded-md p-3
    }

    .form_input:disabled{
        @apply text-gray-400
    }

    .form_btn{
        @apply rounded-3xl px-6 py-3 text-white font-bold shadow-lg
    }

    button:disabled{
        @apply bg-gray-400 cursor-not-allowed
    }
</style>