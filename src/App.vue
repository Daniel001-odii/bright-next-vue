<template>

  <div class="flex flex-col max-w-screen-xl  mx-auto">
    <router-view/>
  </div>

</template>

<script> 
import { initFlowbite } from 'flowbite'

export default {
  mounted(){
    initFlowbite();
  }
}
</script>

<style>

</style>
