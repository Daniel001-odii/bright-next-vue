<template>
    <div>
        <!-- max-w-screen-2xl -->
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class=" flex flex-wrap items-center justify-between mx-auto p-4">
        <span href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://assets-global.website-files.com/654a036a4d837081164c18b1/65861275fa179165cf72f181_New-Logo%20(1).png" class="h-[60px]" alt="bright-next Logo" />
        </span>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <RouterLink to="/user/profile">
                <button type="button" class="flex flex-row items-center p-3">
                    <img  v-if="user.avatar_url" class="w-8 h-8 rounded-full" :src="user.avatar_url" alt="user photo">
                    <span class="font-bold pl-3">My Account</span>
                </button>
            </RouterLink>
           
           
            <!-- <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button> -->
        </div>
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
            <ul class="flex flex-col md:items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li>
                <RouterLink to="/bn/dashboard" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">My Programs</RouterLink>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Faculty</a>
            </li>
            <li>
                <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Individuals</a>
            </li>
            <div class="relative">
            <button @click="toggleCartMenu" class=" bg-bna_green p-3 rounded-xl text-white font-bold h-10 w-10 text-2xl relative flex justify-center place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="49" height="44" viewBox="0 0 29 24" fill="none">
                    <path d="M10.578 17.7312C8.64527 17.7312 7.60276 16.5716 7.30991 14.6623L5.59972 2.98373H2.39017C1.60536 2.98373 0.925965 2.31605 0.925965 1.50781C0.925965 0.699565 1.60536 0.0318857 2.39017 0.0318857H6.24397C7.71989 0.0318857 8.27043 0.640996 8.44614 1.83579L8.57499 2.76117H26.8132C27.8791 2.76117 28.4531 3.37028 28.4531 4.23709C28.4531 4.40108 28.4179 4.62364 28.3945 4.78763L27.6097 10.1408C27.3286 12.0852 26.2743 13.2332 24.3533 13.2332H10.0626L10.2383 14.4163C10.2969 14.838 10.5429 15.1191 10.9412 15.1191H24.1425C24.857 15.1191 25.4895 15.6345 25.4895 16.4193C25.4895 17.2158 24.857 17.7312 24.1425 17.7312H10.578ZM25.3255 5.37332H8.94983L9.6995 10.621H24.0253C24.4353 10.621 24.6461 10.3516 24.7164 9.92993L25.3255 5.37332ZM11.5737 23.8809C10.332 23.8809 9.31295 22.8735 9.31295 21.6085C9.31295 20.3551 10.332 19.3477 11.5737 19.3477C12.8388 19.3477 13.8461 20.3551 13.8461 21.6085C13.8461 22.8735 12.8388 23.8809 11.5737 23.8809ZM22.198 23.8809C20.9446 23.8809 19.9255 22.8735 19.9255 21.6085C19.9255 20.3551 20.9446 19.3477 22.198 19.3477C23.4513 19.3477 24.4587 20.3551 24.4587 21.6085C24.4587 22.8735 23.4513 23.8809 22.198 23.8809Z" fill="white"/>
                </svg>
                <div  v-if="cart.length > 0" class="bg-red-600 px-2 absolute rounded-full text-sm -top-2 -right-2">
                    <span v-if="cart.length < 9">{{ cart.length }}</span>
                    <span v-else>9+</span>
                </div>
            </button>
            <div v-if="cart_menu" class=" bg-white shadow-xl  min-w-[400px] p-8 flex flex-col gap-4 border-t-8 z-30 rounded-lg border-t-bna_green h-fit absolute -right-5 mt-3">
                <div class="flex flex-col">
                    <div v-if="cart.length > 0">
                        <div class="font-bold flex flex-row justify-between text-black">
                            <span>Course</span>
                            <span>Price</span>
                        </div>
                        <div class="text-black flex flex-row gap-3 hover:bg-gray-100 rounded-md p-2 justify-between" v-for="course in cart">
                            <div class="flex flex-row gap-3">
                                <button @click="removeCourse(course._id)" class="hover:bg-slate-200 w-8 h-8 p-3 flex justify-center items-center rounded-full"><i class="bi bi-x-lg"></i></button>
                                <span class="w-[70%]">{{ course.title }}</span>
                            </div>
                            <div>${{ course.price }}</div>
                        </div>
                    </div>
                    <div v-else class="text-center text-gray-400">
                        <p class="text-bold text-2xl">Your cart is empty!</p>
                        <small>Start by enrolling for courses...</small>
                    </div>
                </div>
                <div v-if="cart.length > 0" class="w-full border-t-gray-200 border-t-2"></div>
                <RouterLink to="/bn/checkout">
                    <button v-if="cart.length > 0" class="bg-bna_green w-fit text-white p-3 rounded-full shadow-blue-400 shadow-lg">PROCEED TO CHECKOUT</button> 
                </RouterLink>
            </div>
        </div>

            </ul>
        </div>
        </div>
        </nav>
    </div>
</template>

<script>
import axios from 'axios';
import { formatTimestamp } from '../utils/formatDateTime';
import store from '@/store';


export default {
    name: "UserProfileView",
    data(){
        return{
            user: '',
            user_joined: '',

            cart_menu: false,
            headers: {
                Authorization : `JWT ${localStorage.getItem('BNA')}`,
            },

            // cart: [],
            total_price: 0,
        }
    },
    methods: {
        async getUser(){
            const headers = {
                Authorization : `JWT ${localStorage.getItem('BNA')}`,
            }

            try{
                const res = await axios.get(`${this.api_url}/get-user`, { headers });
                this.user = res.data.user;
                this.user_joined = res.data.user.createdAt;
            }
            catch(error){
                if(error.response.status == 401){
                    alert("Your previous session expired please Login again.")
                };
                localStorage.removeItem("BNA");
                this.$router.push("/login")
            }
        },

        logout(){
            localStorage.removeItem('BNA');
            this.$router.push('/login');
        },

        formatDateType(timestamp){
            const date = new Date(timestamp);
            const options = { year: "numeric", month: "long", day: "numeric" };
            return date.toLocaleDateString(undefined, options);
        },


        // CART...
        async removeCourse(course_id){
            const headers = this.headers;
            try{
                const response = await axios.post(`${this.api_url}/cart/courses/${course_id}/remove`, {}, { headers });
                console.log(response.data.message);
                
                // update the cart generally for the remove course...
                store.dispatch('fetchCart');
                
            }catch(error){
                console.log("error removing course from cart: ", error);
            }
        },

        toggleCartMenu(){
            this.cart_menu = !this.cart_menu;
            // this.getUserCart()
        }, 

        /*
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
        }
        */
    },
    computed: {
        userReadableDate() {
            return formatTimestamp(this.user_joined)
        },

        // get cart data...
        cart(){
            return store.getters.getCart;
        },

        totalPrice(){
            return store.getters.getTotalPrice;
        }
    },
    mounted(){
        this.getUser();

        // get cart data from store...
        store.dispatch('fetchCart');

        // this.getUserCart();
    }
    
}
</script>

<style scoped>

</style>