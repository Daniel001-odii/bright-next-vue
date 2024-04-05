<template>
    <div>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <span href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://assets-global.website-files.com/654a036a4d837081164c18b1/65861275fa179165cf72f181_New-Logo%20(1).png" class="h-[60px]" alt="bright-next Logo" />
        </span>
        <div class="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" class="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                <span class="sr-only">Open user menu</span>
                <img  v-if="user.avatar_url" class="w-8 h-8 rounded-full" :src="user.avatar_url" alt="user photo">
            </button>
            <span class="font-bold pl-3">My Account</span>
            <!-- Dropdown menu -->
            <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                <div class="px-4 py-3">
                <span class="block text-sm text-gray-900 dark:text-white">{{ user.firstname }} {{ user.lastname }} {{ user.username }} </span>
                <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">{{ user.email }}</span>
                </div>
                <ul class="py-2" aria-labelledby="user-menu-button">
                <li>
                    <RouterLink to="/bn/dashboard" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</RouterLink>
                </li>
                <li>
                    <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</RouterLink>
                </li>
                <li>
                    <RouterLink to="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</RouterLink>
                </li>
                <li>
                    <span @click="logout()" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</span>
                </li>
                </ul>
            </div>
            <button data-collapse-toggle="navbar-user" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-user" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
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
                <i class="bi bi-cart"></i>
                <div class="bg-red-500 h-3 w-3 absolute rounded-full -top-1 -right-1"></div>
            </button>
            <div v-if="cart_menu" class=" bg-white shadow-xl  min-w-[400px] p-8 flex flex-col gap-4 border-t-8 z-30 rounded-lg border-t-bna_green h-fit absolute -right-5 mt-3">
                <div class="flex flex-col">
                    <div v-if="cart.length > 0">
                        <div class="font-bold flex flex-row justify-between text-black">
                            <span>Course</span>
                            <span>Price</span>
                        </div>
                        <div class="text-black flex flex-row gap-3 hover:bg-gray-100 rounded-md p-2" v-for="course in cart">
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

            cart: [],
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
                this.getUserCart();
                
            }catch(error){
                console.log("error removing course from cart: ", error);
            }
        },

        toggleCartMenu(){
            this.cart_menu = !this.cart_menu;
            this.getUserCart()
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
        }
    },
    computed: {
        userReadableDate() {
            return formatTimestamp(this.user_joined)
        },
    },
    mounted(){
        this.getUser();
    }
    
}
</script>

<style scoped>

</style>