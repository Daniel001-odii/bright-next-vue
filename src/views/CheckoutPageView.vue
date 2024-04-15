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
                                    <button type="button" class="form_btn bg-bna_green" @click="$router.go(-1)">CANCEL</button>
                                    <button type="button" class="form_btn bg-bna_blue" @click="tab += 1" :disabled="!accept_TOS">CONTINUE</button>
                                </div>
                            </div>
                        </div>

                        <div v-if="tab == 1">
                            <h1 class="font-bold text-2xl">2- Review</h1>
                            <div class="mt-3 rounded-xl bg-white  flex flex-col gap-8 p-10">
                                <h2 class="font-bold text-xl">Your Order</h2>
                                <div class="bg-gray-100 rounded-3xl p-6 flex flex-col gap-3">
                                    <div v-if="cart" class="font-bold text-lg flex flex-row justify-between" v-for="course in cart">
                                        <p class="w-[70%]">{{ course.title}}</p>
                                        <span>$ {{ course.price }}</span>
                                    </div>
                                    <div class="font-bold text-lg flex flex-row justify-between text-bna_blue">
                                        <p>Total</p>
                                        <span>$ {{ total_price.toLocaleString() }}.00</span>
                                    </div>
                                </div>
                                <div class="py-5 flex flex-row justify-end gap-6">
                                    <button type="button" class="form_btn bg-bna_green" @click="tab -= 1">GO BACK</button>
                                    <button type="button" class=" self-end form_btn bg-bna_blue" @click="tab += 1">
                                        <!-- <span v-if="payment_loading">loading...</span>
                                       <span v-else>PURCHASE</span>  -->
                                       PURCHASE
                                    </button>
                                </div>
                                
                            </div>
                        </div>

                        <div v-if="tab == 2">
                            <h1 class="font-bold text-2xl">3- Payment</h1>
                            <div class="mt-3 rounded-xl bg-white flex flex-col gap-3 p-10">

                                <!-- IMPORT STRIPE COMPONENT HERE -->
                                <div class="flex flex-col gap-2 justify-start items-start">
                                    <h2 class="font-bold text-xl">Credit Card</h2>
                                    <div id="checkout" class=" w-full flex justify-center items-center">

                                    </div>
                                </div>
                               
                                <div class="flex flex-col gap-2 justify-start items-start mt-6">
                                    <h2 class="font-bold text-xl">Paypal</h2>
                                    <button type="button" class=" py-3 px-6 rounded-full text-blue-500 font-semibold shadow-lg shadow-blue-300">
                                        CONNECT
                                    </button>
                                </div>

                                <div class="flex flex-row flex-wrap gap-3 justify-betweeni items-end">
                                    <div class="flex flex-row gap-3 items-end">
                                        <div class="flex flex-col gap-3 mt-6">
                                            <label for="promo_code" class="font-bold">PROMO CODE</label>
                                            <input type="text" class="rounded-md w-52 bg-slate-100" name="promo_code" id="promo_code" :disabled="has_discount_code"/>
                                        </div>
                                        <button type="button" class="form_btn bg-bna_green shadow-blue-300 shadow-lg">APPLY</button>
                                    </div>
                                    <div class="flex flex-row items-center gap-3 font-bold">
                                        <span>or</span>
                                        <input type="checkbox" class="bg-slate-100" v-model="has_discount_code"/>
                                        <div class="flex p-2 border-dashed rounded-lg border-gray-700 border-2 ">SPRING</div>
                                        <span>5% of discount</span>
                                    </div>
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

                            <div v-if="cart" class="flex flex-row justify-between items-center hover:bg-gray-50 p-2 rounded-md" v-for="(course, index) in cart" :key="index">
                                
                                <div class="flex flex-row items-center gap-3 max-w-[70%]">
                                    <button v-if="cart.length > 1" @click="removeCourse(course._id)" class="hover:bg-slate-200 w-8 h-8 p-3 flex justify-center items-center rounded-full"><i class="bi bi-x-lg"></i></button>
                                    <span>{{ course.title }}</span>
                                </div>
                                <span>$ {{ course.price }}</span>
                            </div>

                            <div class="border-b"></div>
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Subtotal</span>
                                <span>${{ total_price.toLocaleString() }}</span>
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

import { stripePromise } from '../main'

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
                tab: 1,
                courses: [],
                course: {
                    title: '',
                    price: ''
                },

                page_loading: false,

                stripe_loading: false,

                accept_TOS: false,
                thankyou_modal: false,

                headers: {
                    Authorization: `JWT ${localStorage.getItem('BNA')}`
                },

                cart: [],
                total_price: 0,

                has_discount_code: false,

                payment_loading: false,

            }
        },

        methods:{
            removeCourseOld(index) {
                    this.courses.splice(index, 1);
                    if(this.courses.length <= 0){
                        // do not allow check out course be zero
                        window.location.reload()
                    }
            },

            async removeCourse(course_id){
                const headers = this.headers;
                try{
                    const response = await axios.post(`${this.api_url}/cart/courses/${course_id}/remove`, {}, { headers });
                    console.log(response.data.message);
                    this.getUserCart();
                }catch(error){
                    console.log("error removing course from cart: ", error);
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
                const headers = this.headers;

                const checkout = {
                    name: this.course.title,
                    amount: this.course.price,
                    courses: [this.course._id],
                };
                console.log("testing: ", checkout)

                try {
                    const response = await axios.post(`${this.api_url}/payment/stripe`, checkout, { headers });
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


            async initiateStripePayment(){
                this.course.name = "Course Purchase";
                this.course.price = this.total_price;
                const form = {
                    course_product: this.course,
                };

                try{
                    const response = await axios.post(`${this.api_url}/payment/create-checkout-session`, form);
                    // console.log("response from stripe payment :", response);
                    return response.data.session.client_secret;
                }catch(error){
                    console.log("error with stripe payment: ", error);
                }
            },

            async getUserCart() {
                const headers = this.headers;

                try{
                    const response = await axios.get(`${this.api_url}/cart`, { headers });
                    // console.log("user's cart: ", response);
                    this.cart = response.data.cart.courses;
                    this.total_price = 0;
                    this.cart.forEach(course => {
                        // Convert the price to a number and add it to the total price
                        this.total_price += parseFloat(course.price);
                    });
                }catch(error){
                    console.log("error getting user cart: ", error)
                }
            },

            async initialize() {
                this.payment_loading = true;
                const clientSecret = await this.fetchClientSecret();
                const stripe = await stripePromise;
                const checkout = await stripe.initEmbeddedCheckout({
                    fetchClientSecret: () => Promise.resolve(clientSecret),
                });
                checkout.mount('#checkout');
                this.payment_loading = false;
                this.tab += 1;
            },

            async fetchClientSecret() {
                const response = await axios.post(`${this.api_url}/payment/create-checkout-session`);
                console.log("response from create payment session: ", response);
                return response.data.session.client_secret;
            },
        },

        mounted(){
            this.getUser();
            // this.getCourseDetails();
            this.getUserCart();

            this.initialize();

            // cart cannot be empty and user is allowed to checkout...
            // if(this.$route.name == "checkout" && !this.cart.course){
            //     this.$router.push("/bn/dashboard");
            // }
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


    #checkout > .App-Container{
        width: 100% !important;
        border: 3px solid red !important;
    }
</style>