<template>

  

            
        

    <div class="mt-8">
        
        <div class="px-8">
            <h1 class=" text-xl font-bold self-start capitalize" v-if="user.firstname">Welcome, {{ user.firstname }}!</h1>
            <h1 class=" text-xl font-bold self-start capitalize" v-if="user.username">Welcome, {{ user.username.split(" ")[0] }}!</h1>
        </div>

        <div class=" flex flex-row flex-wrap justify-between mt-8 gap-3 w-full p-8">
                <div class=" flex flex-row justify-between items-center bg-white rounded-xl p-3 gap-8 w-[300px]">
                    <div>
                        <p class="font-bold">Enrolled Courses</p>
                        <span>6</span>
                    </div>
                    <div>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"/>
                        </svg>
                    </div>
                </div>

                <div class=" flex flex-row justify-between items-center bg-white rounded-xl p-3 gap-8 w-[300px]">
                    <div>
                        <p class="font-bold">Certifications</p>
                        <span>2</span>
                    </div>
                    <div>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"/>
                        </svg>

                    </div>
                </div>
        </div>



        <div class=" p-8 relative overflow-x-auto">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <caption class="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Enrolled Courses
                    <p class="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse the list of courses you have enrolled in with the number of modules for each course and price tags attached.</p>
                </caption>
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Course
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Modules
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Web Development Bootcamp
                        </th>
                        <td class="px-6 py-4">
                            10
                        </td>
                        <td class="px-6 py-4">
                            $2999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Data Science Fundamentals
                        </th>
                        <td class="px-6 py-4">
                            8
                        </td>
                        <td class="px-6 py-4">
                            $1999
                        </td>
                        <td class="px-6 py-4 text-right">
                            <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class=" flex flex-col w-full p-8 justify-start items-start text-left  mx-auto">
            <h1 class=" text-xl font-bold self-start">New Courses for you</h1>

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
                            <!-- <RouterLink :to="'/bn/checkout/' + course.title"> -->
                                <button @click="addCourseToCart(course._id, course.title)" class="font-bold text-sm px-6 py-6 rounded-3xl bg-bna_green text-white">ENROLL TODAY</button>
                            <!-- </RouterLink> -->
                            

                            <RouterLink :to="'/bn/course/' + course.title">
                                <button class="font-bold text-sm px-6 py-6 rounded-3xl bg-bna_blue text-white">VIEW PROGRAM</button>
                            </RouterLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>

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

            loading_courses: false,
            courses: [],

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
                // console.log(res);
            }
            catch(error){
                alert(error)
            }
        },

        async getCourses(){
            this.loading_courses = true;

            try{
                const response = await axios.get(`${this.api_url}/courses`);
                console.log("courses: ", response.data)
                this.courses = response.data;
                this.loading_courses = false;

            }catch(error){
                alert(error.response.data.message);
                this.loading_courses = false;
            }
        },

        formatDateType(timestamp){
            const date = new Date(timestamp);
            const options = { year: "numeric", month: "long", day: "numeric" };
            return date.toLocaleDateString(undefined, options);
        },

        // add course to users cart temporarily...
        async addCourseToCart(course_id, course_title){
            const headers = {
                Authorization : `JWT ${localStorage.getItem('BNA')}`,
            };

            try{
                const response = await axios.post(`${this.api_url}/courses/${course_id}/enroll`, {}, { headers });
                console.log("course enrolled...", response);

                // update cart...
                store.dispatch('fetchCart');

                // open the checkout page...
                this.$router.push(`/bn/checkout`);
                
            }catch(error){
                console.log("error enrolling course...");
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
        this.getCourses();
    }
    
}
</script>
<style scoped>
    
</style>