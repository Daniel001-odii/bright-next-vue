<template>

<GuestNavbar/>



  <div class="p-8">
      <div class=" flex flex-row flex-wrap justify-start mt-8 gap-10 w-full" >
          
          <div v-if="loading_courses">Loading courses...</div>
          <div v-if="!loading_courses && courses" v-for="(course, index) in courses" :key="index" class="rounded-3xl flex flex-col w-full md:max-w-[400px] gap-6 border-[3px] bg-white border-bna_green relative">
              <div class="floating_brain absolute h-20 w-20 rounded-full bg-white border-[3px] border-bna_green -right-5 -top-10 flex justify-center items-center">
                  <svg class="w-[60px] h-[60px] text-bna_green dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18.5A2.493 2.493 0 0 1 7.51 20H7.5a2.468 2.468 0 0 1-2.4-3.154 2.98 2.98 0 0 1-.85-5.274 2.468 2.468 0 0 1 .92-3.182 2.477 2.477 0 0 1 1.876-3.344 2.5 2.5 0 0 1 3.41-1.856A2.5 2.5 0 0 1 12 5.5m0 13v-13m0 13a2.493 2.493 0 0 0 4.49 1.5h.01a2.468 2.468 0 0 0 2.403-3.154 2.98 2.98 0 0 0 .847-5.274 2.468 2.468 0 0 0-.921-3.182 2.477 2.477 0 0 0-1.875-3.344A2.5 2.5 0 0 0 14.5 3 2.5 2.5 0 0 0 12 5.5m-8 5a2.5 2.5 0 0 1 3.48-2.3m-.28 8.551a3 3 0 0 1-2.953-5.185M20 10.5a2.5 2.5 0 0 0-3.481-2.3m.28 8.551a3 3 0 0 0 2.954-5.185"/>
                  </svg>
              </div>
              <img :src="course.image" class=" rounded-t-2xl">

              <div class="flex flex-col h-full justify-between">
                  <div class="flex flex-col gap-8 p-5">
                      <h3 class="font-bold text-bna_green text-xl">{{ course.title }}</h3>
                      <p>{{ course.description }}</p>
                      <div class="flex flex-col gap-3">
                          <span>10 Weeks (Midweek or Weekend)</span>
                          <span>5 Use Case Projects for portfolio</span>
                          <span>Avg Salary $85,000 - $250,000 Yearly</span>
                          <span>More than 150,000 Open Jobs</span>
                          <span>Certificate of Completion</span>
                          <span>{{ course.modules }} modules</span>
                          <span>100% Online</span>
                          <span>Classes starting on 19 January</span>
                          
                      </div>
                      
                  </div>
                  <div class="w-full flex flex-row justify-between justify-self-end p-5">
                      <!-- <RouterLink to="/checkout">
                          <button class="font-bold text-sm px-6 py-6 rounded-3xl bg-bna_green text-white">ENROLL TODAY</button>
                      </RouterLink> -->
                      <button @click="addCourseToTemporaryStorage(course._id)" class="font-bold text-sm px-6 py-6 rounded-3xl bg-bna_green text-white">ENROLL TODAY</button>
                      

                      <RouterLink :to="'/course/' + course.title">
                          <button class="font-bold text-sm px-6 py-6 rounded-3xl bg-bna_blue text-white">VIEW PROGRAM</button>
                      </RouterLink>
                  </div>
              </div>
          </div>

      </div>
  </div>
</template>

<script>
import axios from 'axios';
import GuestNavbar from '../components/GuestNavbar.vue'

export default {
    name: "HomePageView",
    components: { GuestNavbar },
    data(){
        return{
            courses:'',
            loading_courses: false,

            cart_menu: false,

            user_cart: '',
        }
    },

    methods:{
        async getCourses(){
            this.loading_courses = true;

            try{
                const response = await axios.get(`${this.api_url}/courses`);
                console.log("courses: ", response.data)
                this.courses = response.data;
                this.loading_courses = false;

            }catch(error){
                // alert(error.response.data.message);
                console.log("error loading courses: ", error)
                this.loading_courses = false;
            }
        },

        // check if theres a cart item already exisiting in the localStorage...
        // if not create a new one..
        initializeTemporaryCartStorage(){
            if(!localStorage.getItem('_BNA_cart')){
                const store = localStorage.setItem('_BNA_cart', JSON.stringify([]));
            }
        },

        addCourseToTemporaryStorage(course_id){
            // get the cart object..
            let temporaryCart = JSON.parse(localStorage.getItem('_BNA_cart'));

            // check if the course is already existing so it doesnt get double added...
            if(!temporaryCart.includes(course_id)){
                temporaryCart.push(course_id);
                localStorage.setItem('_BNA_cart', JSON.stringify(temporaryCart));
            }
           
            // Go to the checkout page after a delay
            window.setTimeout(() => {
                this.$router.push('/checkout');
            }, 1000);
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

        async getCoursesInCart() {
            const body = {
                    courses_array: JSON.parse(localStorage.getItem('_BNA_cart')),
                };
            console.log("courses currently in cart: ", body);

            try {
                const response = await axios.post(`${this.api_url}/courses/array`, body);
                console.log("courses array: ", response);
                this.user_cart = response.data;
            } catch (error) {
                console.debug("failed to get course list: ", error);
            }
        }
    },

    mounted(){
        this.getCourses();
        this.initializeTemporaryCartStorage();
        this.getCoursesInCart();
        // console.log("anonymous user cart: ", JSON.stringify(JSON.parse(localStorage.getItem('_BNA_cart'))))
    }
}
</script>

<style scoped>

</style>