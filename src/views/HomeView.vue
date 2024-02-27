<template>
  <div>
    <h1>Bright Next Academy</h1>
    <RouterLink to="/login">
      <button class="border p-4">
        login
      </button>
    </RouterLink>
  </div>
</template>

<script>
import { googleSdkLoaded } from "vue3-google-login";
import axios from "axios";

export default {
  name: "YourComponent",
  data(){
    return{
      userProfile: '',
    }
  },
  methods:{
    async googleSignIn(){
      try{
        const profile = googleUser.getBasicProfile();
        this.userProfile = profile
      }
      catch(error){
        console.error(error)
      }
    }
  }
};
</script>