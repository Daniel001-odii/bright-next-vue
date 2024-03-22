<template>

<!-- <Navbar/> -->
  <div class="flex flex-col max-w-screen-3xl  mx-auto">
    <router-view/>
  </div>

</template>

<script> 
import { initFlowbite } from 'flowbite'
import Navbar from '@/components/Navbar'


export default {
  components: { Navbar },
  mounted(){
    initFlowbite();
  }
}
</script>

<style>
  
</style>
