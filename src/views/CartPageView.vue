<template>
    <div>
        <h1 class="p-5 font-bold text-2xl">Your Shopping Cart</h1>
        <div class="w-full  flex flex-col p-8">

        <div class=" flex flex-col gap-4">
            <!-- COURSE CARD STARTS HERE -->
            <label :for="course_card" v-for="(course, index) in courses" :key="course.price" class="flex flex-row gap-3 items-center justify-between hover:bg-gray-200 rounded-md p-3">
                <div  class="flex flex-row gap-3 items-center ">
                    <input type="checkbox" name="course_card" id="course_card" :value="course.price" v-model="checked_courses"/>
                    <div class=" w-20 h-20 bg-blue-500 rounded-lg overflow-hidden border-[3px] border-blue-500">
                        <img src="../assets/images/bna_square.jpg" class=" h-full w-full">
                    </div>
                    <div>
                        <h3 class=" font-bold text-xl">{{ course.title }}</h3>
                        <div class=" max-w-[450px]">{{ course.description }}</div>
                    </div>
                </div>
                
                <div class=" font-bold text-xl">${{ course.price }}</div>
                <button @click="removeCourse(index)" class="font-bold text-xl rounded-lg  hover:bg-gray-200 p-3"><i class="bi bi-x-lg"></i></button>
            </label>
            <!-- COURSE CARD ENDS HERE.... -->

            <!-- EMPTY CART -->
            <div v-if="courses.length <= 0" class="font-bold text-3xl text-slate-300 text-center p-8">Oops.. Your cart Empty</div>
        </div>

        <div class="flex flex-row mt-3 ">
            <span class="font-bold text-xl">Total: ${{  Math.ceil(checked_courses.reduce((accumulator, currentValue) => accumulator + currentValue, 0)) }}</span>
        </div>

        <div class=" flex flex-row mt-4">
            <button :disabled="courses.length <= 0" class="flex flex-row items-center bg-bna_green hover:bg-opacity-80 px-20 py-3 text-lg font-bold text-white rounded-full gap-3">
                <span>Checkout</span>
                <span class="bg-white px-3 rounded-lg text-bna_green">{{ checked_courses.length }}</span>
            </button>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CartPageView",
        data(){
            return{
                checkout_total: 0,
                checked_courses:[],

                courses: [
                {
                    id: 1,
                    title: "Introduction to Programming",
                    description: "Learn the basics of programming with this introductory course. No prior experience required.",
                    price: 49.99
                },
                {
                    id: 2,
                    title: "Web Development Fundamentals",
                    description: "Master the fundamentals of web development including HTML, CSS, and JavaScript.",
                    price: 59.99
                },
                {
                    id: 3,
                    title: "Data Science Essentials",
                    description: "Discover the essential concepts and techniques of data science, including data analysis and visualization.",
                    price: 69.99
                }
                ],
            }
        },

        methods: {
            removeCourse(index) {
                    this.courses.splice(index, 1);
                    this.checked_courses.splice(index, 1);
                    if(this.courses.length <= 0){
                        // do not allow check out course be zero
                        // window.location.reload()
                    }
            },
        }
    }
</script>

<style scoped>
button:disabled{
    @apply bg-gray-200 cursor-not-allowed
}
</style>