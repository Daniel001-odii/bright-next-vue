<template>

        <nav class=" bg-white flex flex-row relative p-3 justify-between md:justify-around items-center">

            <RouterLink to="/">
                <img src="../assets/bright-next-logo.png" class="w-[200px]">
            </RouterLink>

            <div class=" bg-white md:flex-row gap-5 text-blue-600 font-bold justify-evenly flex opacity-0 h-0 md:opacity-100 md:h-fit absolute top-[100px] flex-col md:relative left-0 md:left-auto p-5 md:p-0 md:top-0 w-full md:w-fit z-20 shadow-lg md:shadow-none" 
            :class="mobile_menu_visible ? 'h-[300px] opacity-100':'h-0 opacity-0'"
            >
                <div class="">Faculty</div>
                <div class="">Be Certified Ready</div>
                <div class="">Individual</div>
                <div class="">Enterprise</div>
                <RouterLink to="/login">
                    <div>Login</div>
                </RouterLink>
            </div>

            <div class="flex flex-row gap-3 justify-evenly">
                <div class="relative">
                    <button @click="cart_menu = !cart_menu" class=" bg-bna_green p-3 rounded-xl text-white font-bold h-10 w-10 text-2xl relative flex justify-center place-items-center">
                        <i class="bi bi-cart"></i>
                        <div v-if="user_cart.length > 0" class="bg-red-500 px-2 absolute rounded-full -top-2 -right-2 text-sm">{{ user_cart.length }}</div>
                    </button>

                    <!-- the user dropdown cart menu -->
                    <div v-if="cart_menu" class=" bg-white shadow-xl  min-w-[300px] p-8 flex flex-col gap-4 border-t-8 z-30 rounded-lg border-t-bna_green h-fit absolute left-0 md:right-0 md:left-auto mt-3">
                        <div v-if="user_cart.length > 0">
                            <div class="flex flex-col">
                                <div class="font-bold flex flex-row justify-between text-black">
                                    <span>Course</span>
                                    <span>Price</span>
                                </div>
                                <div class="text-black flex flex-row gap-3 hover:bg-gray-100 rounded-md p-3 justify-between" v-for="(course, index) in user_cart" :key="index">
                                    <div class="flex flex-row gap-3">
                                        <button @click="removeCourseFromTemporaryCartStorage(course._id)"><i class="bi bi-x-lg"></i></button>
                                        <span class="w-[70%]">{{ course.title }}</span>
                                    </div>
                                    <div>{{ course.price }}</div>
                                </div>
                            </div>
                            <div class="w-full border-t-gray-200 border-t-2"></div>
                            <RouterLink to="/checkout">
                                <button class="bg-bna_green w-fit text-white p-5 rounded-full shadow-blue-400 shadow-lg">PROCEED TO CHECKOUT</button> 
                            </RouterLink>
                        </div>
                        <div v-else class="text-center text-gray-400">
                            <p class="text-bold text-2xl">Your cart is empty!</p>
                            <small>Start by enrolling for courses...</small>
                        </div>
                    </div>
                </div>

                <!-- 
                    <button class=" bg-orange-400 p-3 rounded-xl text-white font-bold">Get Started</button>
                    <button class=" bg-blue-800 p-3 rounded-xl text-white font-bold">Book a Demo</button> 
                -->

            </div>

            <!-- the mobile menu toggler -->
            <button @click="mobile_menu_visible = !mobile_menu_visible" class="text-black text-3xl inline-block md:hidden">
                <i class="bi bi-list"></i>
            </button>
        </nav>
</template>

<script>
import axios from 'axios';


    export default {
        name: "GuestNavbar",
        data(){
            return{
                cart_menu: false,
                user_cart: [],

                mobile_menu_visible: false,

            }
        },

        methods:{

            // remove course from guest user cart...
            removeCourseFromTemporaryCartStorage(course_id) {
                if(this.$route.path == '/checkout' && this.user_cart.length <= 1){
                    alert("You must allow atleast one course before checking out")
                } else {
                    // Get the cart object
                    let temporaryCart = JSON.parse(localStorage.getItem('_BNA_cart'));
                    
                    // Check if the course is already existing to prevent double addition
                    if (temporaryCart.includes(course_id)) {
                        // Filter out the course_id from the temporaryCart
                        temporaryCart = temporaryCart.filter(id => id !== course_id);
                        localStorage.setItem('_BNA_cart', JSON.stringify(temporaryCart));
                    };
                    this.getCoursesInCart();
                }
            },

            // get courses in guest users cart...
            async getCoursesInCart() {
                try {
                    const body = {
                        courses_array: JSON.parse(localStorage.getItem('_BNA_cart')),
                    };

                    console.log("navbar courses currently in cart: ", body);


                    const response = await axios.post(`${this.api_url}/courses/array`, body);
                    console.log("navbar courses array: ", response);
                    this.user_cart = response.data;
                } catch (error) {
                    console.log("failed to get course list: ", error);
                }
            }

        },

        mounted(){
            this.getCoursesInCart();
        }
    }
</script>

<style scoped>

</style>