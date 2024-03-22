<template>
    <div>
        <div class="w-full bg-red-50 h-80 course-image">

        </div>
        <!-- <img src="../assets/images/bna_square.jpg" class="w-full"> -->
        <div class="p-8">
            <h1 class="text-center font-bold uppercase text-3xl">AWS MACHINE Learning Engineer</h1>
            <div>
                <p class="text-2xl">Learn to master AWS machine learning services to create scalable, efficient AI solutions on Amazon Web services.</p>
                <ol class="flex flex-col gap-5 mt-3">
                    <li>10 Weeks (Midweek or Weekend)</li>
                    <li>5 Use Case Projects for portfolio</li>
                    <li>Avg Salary $85,000 - $250,000 Yearly</li>
                    <li>More than 150,000 Open Jobsy</li>
                    <li>Certificate of Completion</li>
                    <li>12 Modules</li>
                    <li>100% Online</li>
                    <li>Classes starting on 19 January</li>
                </ol>
            </div>
            <div class="flex flex-row gap-8 mt-3">
                <button class="bna_btn bg-bna_green"><i class="bi bi-plus-lg"></i> ADD TO CART</button>

                <RouterLink to="/bn/checkout">
                    <button class="bna_btn bg-bna_blue">ENROLL TODAY</button>
                </RouterLink>
               
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CourseDetailPageView",
    }
</script>

<style scoped>
    .course-image{
        background: url('../assets/images/bna_square.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
</style>