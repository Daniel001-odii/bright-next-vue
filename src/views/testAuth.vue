<template>
  <div>
    <button @click="loginWithFacebook" id="fb-login-button">Login with Facebook</button>
    <div id="profile-info" style="display: none;">
      <p id="profile-name"></p>
      <div id="profile-picture"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.initializeFacebookSDK();
  },
  methods: {
    initializeFacebookSDK() {
      // Initialize Facebook SDK
      window.fbAsyncInit = function() {
        FB.init({
          appId: '7274975539289923',
          cookie: true,
          xfbml: true,
          version: 'v12.0'
        });

        // Check login status
        FB.getLoginStatus(response => {
          this.statusChangeCallback(response);
        });
      };

      // Load Facebook SDK asynchronously
      (function(d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    },
    statusChangeCallback(response) {
      if (response.status === 'connected') {
        // User is logged into your webpage and Facebook.
        console.log('Logged in and authenticated');
        this.getUserProfile();
      } else {
        // User is not logged into your webpage or Facebook.
        console.log('Not logged into your webpage or Facebook.');
      }
    },
    getUserProfile() {
      FB.api('/me', { fields: 'name,picture' }, response => {
        console.log('Successful login for: ' + response.name);
        document.getElementById('profile-name').innerText = 'Name: ' + response.name;
        document.getElementById('profile-picture').innerHTML =
          '<img src="' + response.picture.data.url + '" alt="Profile Picture">';
        document.getElementById('profile-info').style.display = 'block';
        document.getElementById('fb-login-button').style.display = 'none';
      });
    },
    loginWithFacebook() {
      FB.login(
        response => {
          this.statusChangeCallback(response);
        },
        { scope: 'public_profile,email' }
      );
    }
  }
};
</script>
