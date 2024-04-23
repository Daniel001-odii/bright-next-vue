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

                    <form @submit.prevent="coursePurchase" class="mt-3">
                        <div class="mt-3">
                            <h1 class="font-bold text-2xl" :class="tab > 0 ? 'bg-white p-5 w-full':''">
                                <span v-if="tab > 0"> <i class="bi bi-check-circle-fill text-bna_green"></i></span>
                                <span v-else>
                                   1 -
                                </span> 
                                Account Details
                            </h1>
                            <div v-if="tab == 0" class="mt-3 rounded-xl bg-white flex flex-col gap-8 p-10">
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

                        <div class="mt-3">
                            <h1 class="font-bold text-2xl" :class="tab != 1 ? 'bg-white p-5 w-full':''">
                                <span v-if="tab > 1"> <i class="bi bi-check-circle-fill text-bna_green"></i></span>
                                <span v-else>
                                   2 -
                                </span> 
                                Review
                            </h1>
                            <div v-if="tab == 1" class="mt-3 rounded-xl bg-white  flex flex-col gap-8 p-10">
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

                        <div class="mt-3">
                            <h1 class="font-bold text-2xl" :class="tab != 2 ? 'bg-white p-5 w-full':''">3- Payment</h1>
                            <div v-if="tab == 2" class="mt-3 rounded-xl bg-white flex flex-col gap-3 p-10">

                                <!-- IMPORT STRIPE COMPONENT HERE -->
                                <div class="flex flex-col gap-2 justify-start items-start">
                                    <!-- <h2 class="font-bold text-xl">Credit Card</h2> -->

                                    <!-- <div class="flex flex-col gap-3"> -->
                                        <label for="stripe" class="font-bold text-xl py-3 flex justify-start items-center gap-6">
                                            <input type="radio" name="payment_type" id="stripe" value="stripe" @change="selectPaymentmethod" v-model="payment_type"/>
                                            Credit Card
                                        </label>

                                       
                                        
                                    <!-- </div> -->
                                   
                                    <!-- <div id="stripe_checkout" class=" w-full flex justify-center items-center">

                                    </div> -->
                                    <!-- STRIPE ELEMENTS -->
                                    <span v-if="messages" class=" text-red-500">{{ messages }}</span>
                               
                                    <form
                                    v-if="payment_type == 'stripe'"
                                        id="payment-form"
                                        @submit.prevent="SUBMIT_STRIPE_PAYMENT"
                                        class="w-full"
                                        >
                                        <!-- <div id="link-authentication-element" /> -->
                                        <div id="payment-element" />
                                        <button
                                            id="submit"
                                            class="form_btn bg-bna_green mt-3"
                                            :disabled="stripe_pay_loading"
                                        >
                                            Pay with stripe
                                        </button>
                                    </form>

                                    
                                </div>
                               
                                <label for="paypal" class="font-bold text-xl py-3 flex justify-start items-center gap-6">
                                    <input type="radio" name="payment_type" id="paypal" value="paypal" v-model="payment_type" @change="selectPaymentmethod" />
                                    Paypal
                                </label>

                                <div v-if="payment_type == 'paypal'" class="flex flex-col gap-2 justify-start items-start mt-6">
                                    <h2 class="font-bold text-xl">Paypal</h2>
                                    <button :disabled="loading_paypal" @click="INITIATE_PAYPAL_PAYMENT" type="button" class=" py-3 px-6 rounded-full text-blue-500 font-semibold shadow-lg shadow-blue-300">
                                        <span v-if="loading_paypal">loading...</span>
                                        <span v-else>CONNECT</span>
                                    </button>
                                </div>

                                <div v-if="payment_type == 'stripe' || payment_type == 'paypal'" class="flex flex-row flex-wrap gap-3 justify-betweeni items-end">
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
                        <!-- {{ cart }} -->
                        <div class="mt-3 rounded-xl bg-white p-5 flex flex-col gap-4">
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Course</span>
                                <span>Price</span>
                            </div>

                            <div v-if="cart" class="flex flex-row justify-between items-center hover:bg-gray-50 p-2 rounded-md" v-for="(course, index) in cart" :key="index">
                                
                                <div class="flex flex-row items-center gap-3 max-w-[70%]">
                                    <button v-if="cart.length > 1" @click="removeCourseFromCart(course._id)" class="hover:bg-slate-200 w-8 h-8 p-3 flex justify-center items-center rounded-full"><i class="bi bi-x-lg"></i></button>
                                    <span>{{ course.title }}</span>
                                </div>
                                <span>$ {{ course.price }}</span>
                            </div>

                            <div class="border-b"></div>
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Subtotal</span>
                                <div>
                                    <span v-if="has_discount_code" class=" text-bna_green">${{ total_price - (total_price * 0.05) }}</span>
                                    <span :class="has_discount_code ? ' line-through text-[12px] text-gray-400':''">${{ total_price.toLocaleString() }}</span>
                                </div>
                                
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
import store from '@/store';

import { loadStripe } from "@stripe/stripe-js";

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
                tab: 0,
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

                // cart: [],
                // total_price: 0,

                has_discount_code: false,
                payment_loading: false,

                messages: '',

                card_number: '',
                expiry: '',
                cvc: '',

                token_from_stripe: '',

                client_secret_returned: '',
                stripe: '',
                elements: '',

                stripe_pay_loading: false,

                payment_type: '',

                loading_paypal: false,


            }
        },

        methods:{
           
            async removeCourseFromCart(course_id){
                const headers = this.headers;
                try{
                    const response = await axios.post(`${this.api_url}/cart/courses/${course_id}/remove`, {}, { headers });
                    console.log(response.data.message);


                    // get cart data from store...
                    store.dispatch('fetchCart');

                    if(this.cart.length <= 0 || this.cart == []){
                        this.$router.push('/bn/dashboard')
                    }


                }catch(error){
                    console.log("error removing course from cart: ", error);
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


            async fetchClientSecret() {
                const response = await axios.post(`${this.api_url}/payment/create-checkout-session`);
                console.log("response from create payment session: ", response);
                return response.data.session.client_secret;
            },

            async STRIPE_ELEMENTS_INIT() {
                this.stripe_pay_loading = true;

                let total_price;

                // i have used a fixed value here for the discount price, but it obviouvly should be
                // dynamic and fed from the database, this is just used for development and test purposes...

                if(this.has_discount_code){
                    total_price = this.total_price - (this.total_price * 0.05);
                } else {
                    total_price = this.total_price
                }


                
                const submit_to_server = {
                    amount: total_price
                }

                try {
                    const responseConfig = await fetch(`${this.api_url}/payment/config`);
                    if (!responseConfig.ok) {
                    throw new Error('Failed to fetch config data');
                    }
                    const { publishableKey } = await responseConfig.json();

                    this.stripe = await loadStripe(publishableKey);

                    const responsePaymentIntent = await axios.post(`${this.api_url}/payment/create-payment-intent`, submit_to_server);
    
                    console.log("response from payment intent: ", responsePaymentIntent)

                    // if (!responsePaymentIntent.ok) {
                    //     console.error("response from payment intent: ", responsePaymentIntent)
                    //     throw new Error('Failed to create payment intent');
                    
                    // }

                    const clientSecret = await responsePaymentIntent.data.clientSecret;

                    // const { clientSecret, error: backendError } = await responsePaymentIntent.json();

                    this.client_secret_returned = clientSecret;

                    // if (backendError) {
                    // throw new Error(backendError.message);
                    // }

                    // this.messages = "client secret returned";

                    this.elements = this.stripe.elements({clientSecret});

                    const paymentElement = this.elements.create('payment');
                    paymentElement.mount("#payment-element");

                    // const linkAuthenticationElement = elements.create("linkAuthentication");
                    // linkAuthenticationElement.mount("#link-authentication-element");

                    console.log("stripe client secret: ", clientSecret);

                    // checkout and create invoice
                    this.checkoutCourseAndCreateInvoice("stripe");

                    this.stripe_pay_loading = false;

                } catch (error) {
                    console.log("error from stripe elements: ", error);
                    this.messages = error.message;
                    this.stripe_pay_loading = false;
                }
            },

            async SUBMIT_STRIPE_PAYMENT(){
                this.stripe_pay_loading = true;
                const elements = this.elements;
                const stripe = this.stripe;
                // const { error } = await stripe.confirmPayment({
                //     elements,
                //     confirmParams: {
                //     return_url: `${window.location.origin}/bn/thankyou`
                //     }
                // });
                const response = await stripe.confirmPayment({
                    elements,
                    confirmParams: {
                    return_url: `${window.location.origin}/bn/thankyou`
                    }
                });

                console.log("response from submitted stripe payment: ", response)

                if (error.type === "card_error" || error.type === "validation_error") {
                    this.messages = error.message;
                } else {
                    this.messages = "An unexpected error occured.";
                };
                this.stripe_pay_loading = false;
               
            },

            async startStripe(){
                const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
                const { token, error } = await stripe.createToken('card', {
                    card: {
                    number: this.card_number,
                    exp_month: this.expiry.split('/')[0],
                    exp_year: this.expiry.split('/')[1],
                    cvc: this.cvc,
                    },
                });
                this.token_from_stripe = token;
                if (error) {
                    console.error(error);
                    // Handle error
                } else {
                    console.log(token);
                    // Send token to your backend for payment processing
                }
            },

            async handleStripeSubmit(){
                try{
                    const response = await axios.post('http://localhost:4242/process-payment', {
                    token: this.token_from_stripe, // Replace with the actual token generated from Stripe.js
                    });

                    if (response.data.success) {
                    console.log('Payment successful');
                    // Redirect or show success message
                    } else {
                    console.error('Payment failed');
                    // Show error message
                    }
                } catch (error) {
                    console.error('Error processing payment:', error);
                    // Show error message
                }
            },

            async INITIATE_PAYPAL_PAYMENT(){
                this.loading_paypal = true;

                let total_price;

                // i have used a fixed value here for the discount price, but it obviouvly should be
                // dynamic and fed from the database, this is just used for development and test purposes...
                
                if(this.has_discount_code){
                    total_price = this.total_price - (this.total_price * 0.05);
                } else {
                    total_price = this.total_price
                }



                const body = {
                    product: {
                        price: total_price,
                    }
                }

                try{
                    const response = await axios.post(`${this.api_url}/payment/paypal`, body);
                    console.log("paypal response: ", response)
                    const payment_url = response.data.links;
                    window.location.href = payment_url;

                    this.loading_paypal = false;
                }catch(error){
                    console.log("error initiating paypal payment...");
                    this.loading_paypal = false;
                }
            },

            // checkout courses and create invoice...
            async checkoutCourseAndCreateInvoice(payment_method){
                let courses = [];
                const headers = this.headers;

                this.cart.forEach(course => {
                    courses.push(course._id);
                });

                const form = {
                    courses_array: courses,
                    payment_method,
                    total_amount: this.total_price,
                };

                try{
                    const response = await axios.post(`${this.api_url}/courses/enroll`, form, { headers } );
                    console.log("reponse from course checkout: ", response)
                }catch(error){
                    console.log("error checking out: ", error);
                }
            },

            
            selectPaymentmethod(){
                if(this.payment_type == 'stripe'){
                    this.STRIPE_ELEMENTS_INIT();
                }
            },
        },

        computed: {
            // get cart data...
            cart(){
                return store.getters.getCart;
            },

            total_price(){
                // this.total_price = store.getters.getTotalPrice;
                return store.getters.getTotalPrice;
            }
        },

        mounted(){
            // get user data...
            this.getUser();

            // get cart data from store...
            store.dispatch('fetchCart');

            // new stripe elements...
            // this.STRIPE_ELEMENTS_INIT()

            // initialize stripe embedded page element...
            // this.initialize();

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