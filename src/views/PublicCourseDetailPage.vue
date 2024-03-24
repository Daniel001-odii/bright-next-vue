<template>
    <div>
        <div v-if="loading">Loading course...</div>

        <div v-if="!loading && course" :style="`background: url(${course.image})`" style="background-repeat: no-repeat; background-size: cover;"class="w-full bg-red-50 h-80 course-image"></div>
        
        <div v-if="!loading && course" class="p-8">
            <h1 class="text-center font-bold uppercase text-3xl">{{ course.title }}</h1>
            <div>
                <p class="text-2xl">{{  course.description }}</p>
                <ol class="flex flex-col gap-5 mt-3">
                    <li>10 Weeks (Midweek or Weekend)</li>
                    <li>5 Use Case Projects for portfolio</li>
                    <li>Avg Salary $85,000 - $250,000 Yearly</li>
                    <li>More than 150,000 Open Jobsy</li>
                    <li>Certificate of Completion</li>
                    <li>{{ course.modules}} Modules</li>
                    <li>100% Online</li>
                    <li>Classes starting on 19 January</li>
                </ol>
            </div>
            <div class="flex flex-row gap-8 mt-3">
                <button class="bna_btn bg-bna_green"><i class="bi bi-plus-lg"></i> ADD TO CART</button>

                <RouterLink v-if="user" :to="'/bn/checkout/' + course.title">
                    <button class="bna_btn bg-bna_blue">ENROLL TODAY</button>
                </RouterLink>

                <RouterLink v-else :to="'/checkout/' + course.title">
                    <button class="bna_btn bg-bna_blue">ENROLL TODAY</button>
                </RouterLink>
               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';


    export default {
        name: "CourseDetailPageView",
        data(){
            return{
                loading: false,
                user: '',
                course: '',
            }
        },

        methods:{
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
                    // alert(error.response.data.message);
                }
            },

            async getCourseDetails(){
                this.loading = true;

                try{
                    const response = await axios.get(`${this.api_url}/courses/${this.$route.params.course_title}`);
                    // console.log(response.data);
                    this.course = response.data;
                    this.loading = false;
                }catch(error){
                    console.log(error.response.data);
                    this.loading = false;
                }
            }
        },

        mounted(){
            this.getUser();
            this.getCourseDetails();
        }
    }
</script>

<style scoped>
    .course-image{
        /* background: url('../assets/images/bna_square.jpg'); */
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>