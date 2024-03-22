<template>
    <Navbar/>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';

    export default {
        name: "LayoutTemplate",
        components: { Navbar },
        
    }
</script>

<style scoped>

</style>