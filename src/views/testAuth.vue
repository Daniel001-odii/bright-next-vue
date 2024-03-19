<template>
  <button @click="linkedInLogin">test</button>
</template>

<script setup>
  import { onMounted } from "vue";
  import { useLinkedIn, LinkedInCallback } from "vue3-linkedin-login";
  import axios from "axios";

  const { linkedInLogin, exchangeCodeForToken, getAccount, getMail } =
    useLinkedIn({
      clientId: "86zgoouj5v6t14",
      clientSecret: "orlZyosk0IXKu7lc",
      redirectUri: "http://localhost:8081/login",

      // onSuccess: console.log("your url: ", window.location.href),
      // https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=86zgoouj5v6t14&client_secret=orlZyosk0IXKu7lc&code=AQSmhN3z4iX_QQJK1BmR1sthOus_SiVrQ5wIHKobMC4hdBLGLxBPh4xytTNPGwoNlOZ-6VaHL8NzLAdDg8lrmGCVAH8zE2fgPtZTF6thTAmCirAD3pUXPRk8IJSAMKsbfhCS10agJc6S81xieKX53sMTkmOWb_oa49_69hqTDSiw4mjac2ejSS_xhUuUBAP2c7oLhfD2tngW0NhfVqY&redirect_uri=http://localhost:8080
      
      onSuccess: async (code) => {
        console.log("login success")
        // const MY_EXCHANGE = await axios.get(`https://linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${code}&redirect_uri=${redirectUri}`)

        // console.log("see your code results bro: ", MY_EXCHANGE);
      },

      scope: "email openid profile",
      onError: (error) => {
        console.log(error);
      },
    });

  onMounted(() => {
    LinkedInCallback();
  });
</script>