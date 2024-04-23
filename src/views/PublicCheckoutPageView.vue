<template>
<div class="min-h-screen">
    
<GuestNavbar/>


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
                                        <input @keyup="checkForExisitingEmail" type="email" placeholder="e.g johndoe@gmail.com" name="email" class="form_input" v-model="user.email" >
                                        <small v-if="email_already_exists" class="text-red-500">There is already an account with this email address. <RouterLink to="/login" class="underline text-blue-500">Sign In</RouterLink> or <RouterLink to="/password/reset" class="underline text-blue-500">Reset password</RouterLink></small>
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
                                    <button type="button" class="form_btn bg-bna_blue" @click="tab += 1" :disabled="!accept_TOS || email_already_exists">CONTINUE</button>
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

                               <!-- client secret: {{ client_secret_returned }} -->
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
                    <!-- {{ user }} -->
                    <div class="mt-3">
                        <h1 class="font-bold text-2xl">Order Summary</h1>
                        <div class="mt-3 rounded-xl bg-white p-5 flex flex-col gap-4">
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Course</span>
                                <span>Price</span>
                            </div>

                            <div v-if="courses" class="flex flex-row justify-between items-center hover:bg-gray-50 p-2 rounded-md" v-for="(course, index) in courses" :key="index">
                                <div class="flex flex-row items-center gap-3 max-w-[70%]">
                                    <button @click="removeCourseFromTemporaryCartStorage(course._id)" v-if="courses.length > 1" class="hover:bg-slate-200 w-8 h-8 p-3 flex justify-center items-center rounded-full"><i class="bi bi-x-lg"></i></button>
                                    <span>{{ course.title }} {{ index }}</span>
                                </div>
                                <span>$ {{ course.price }}</span>
                            </div>

                            <div class="border-b"></div>
                            <div class="w-full flex flex-row font-bold justify-between">
                                <span>Subtotal</span>
                                <div>
                                    <span v-if="has_discount_code" class=" text-bna_green">${{ total_price - (total_price * 0.05) }}</span>
                                    <span :class="has_discount_code ? ' line-through text-[12px] text-gray-400':''">${{ total_price }}</span>
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

import { loadStripe } from "@stripe/stripe-js";

// import { loadScript } from '@paypal/paypal-js'

import PaypalButton from '../components/PaypalButton.vue';
import GuestNavbar from '@/components/GuestNavbar.vue';

    export default {
        name: "PublicCheckoutPageView",
        components: { PayPal, ThankyouPageView, PaypalButton, GuestNavbar },
        data(){
            return{
                user: {
                    firstname: '',
                    lastname: '',
                    email: '',
                    confirm_email: '',
                    password_reset_token: '',
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

                cart: '',
                cart_menu: false,
                stripe_pay_loading: false,
                has_discount_code: false,
                messages: false,

                payment_type: '',
                client_secret_returned: '',

                total_price: 0,

                email_already_exists: false,

                loading_paypal: false,

               
        

            }
        },

        methods:{
          
            async STRIPE_ELEMENTS_INIT() {
                this.stripe_pay_loading = true;

                const submit_to_server = {
                    amount: this.total_price,
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
                    this.user.password_reset_token = clientSecret;

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
                    this.stripe_pay_loading = false;

                } catch (error) {
                    console.log("error from stripe elements: ", error);
                    this.messages = error.message;
                    this.stripe_pay_loading = false;
                }
            },

            async SUBMIT_STRIPE_PAYMENT(){
                // save guest user data...
                localStorage.setItem('BNA_guest_user', JSON.stringify(this.user));

                this.stripe_pay_loading = true;
                const elements = this.elements;
                const stripe = this.stripe;
                const { error } = await stripe.confirmPayment({
                    elements,
                    confirmParams: {
                    return_url: `${window.location.origin}/thankyou`
                    },
                });  
            
                if (error.type === "card_error" || error.type === "validation_error") {
                    this.messages = error.message;
                } else {
                    this.messages = "An unexpected error occured.";
                };
                
                

                this.stripe_pay_loading = false;
            },

            selectPaymentmethod(){
                if(this.payment_type == 'stripe'){
                    this.STRIPE_ELEMENTS_INIT();
                }
            },

            // create user account...
            async createNewUser(){
                const form = {
                    user: JSON.parse(localStorage.getItem('BNA_guest_user')),
                }
            
                try{
                    const response = await axios.post(`${this.api_url}/users/guest`, form);
                    console.log("response from create user: ", response)
                    alert("user created!");
                }catch(error){
                    console.log("error creating user: ", error);
                }
            },

            // avoide already existing users to proceed with guest checkout
            // exisitng users must sign in to checkout on courses...
            async checkForExisitingEmail(){
                try{
                    const response = await axios.post(`${this.api_url}/get-user/${this.user.email}`);
                    console.log("checking email: ", response.data.message);
                    this.email_already_exists = false;
                }catch(error){
                    console.log("error checking email: ", error);
                    this.email_already_exists = true;
                }
            },


           

           

            // get courses in temporary storage...
            async getCoursesInCart() {
                const body = {
                        courses_array: JSON.parse(localStorage.getItem('_BNA_cart')),
                    };
                console.log("courses currently in cart: ", body)
                try {
                    const response = await axios.post(`${this.api_url}/courses/array`, body);
                    console.log("courses array: ", response);
                    this.courses = response.data;
                    this.cart = response.data;

                    const totalPrice = this.courses.reduce((sum, course) => {
                    // Parse the price string to a number before adding to the sum
                    return sum + parseFloat(course.price);
                    this.total_price = sum + parseFloat(course.price);
                    }, 0);

                    this.total_price = totalPrice;

                } catch (error) {
                    console.debug("failed to get course list: ", error);
                }
            },

            removeCourseFromTemporaryCartStorage(course_id) {
                // Get the cart object
                let temporaryCart = JSON.parse(localStorage.getItem('_BNA_cart'));
                
                // Check if the course is already existing to prevent double addition
                if (temporaryCart.includes(course_id)) {
                    // Filter out the course_id from the temporaryCart
                    temporaryCart = temporaryCart.filter(id => id !== course_id);
                    localStorage.setItem('_BNA_cart', JSON.stringify(temporaryCart));
                };
                this.getCoursesInCart();
            },

            // initiate paypal payment ...
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


        },

        mounted(){
            this.getCoursesInCart();
            
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