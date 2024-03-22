 
 
       async googleAut(response) {
        // console.log(response)
        console.log("decoded credentials: ", decodeCredential(response.credential));
        const decoded_user_data = decodeCredential(response.credential);
        const email = decoded_user_data.email;
        const firstname = decoded_user_data.given_name;
        const lastname = decoded_user_data.family_name;
        const googleId = decoded_user_data.sub;
        const picture = decoded_user_data.picture;
        try {
            const userData = {
                email: email,
                firstname: firstname,
                lastname: lastname,
                googleId: googleId,
                picture: picture,
            }
            console.log("user data from google: ", userData)

            const response = await axios.post(`${this.api_url}/google-auth`, userData);
            localStorage.setItem('BNA', response.data.token);
            alert("login successful!");
            this.$router.push('/bn/dashboard');
            // console.log(response);

        }catch(error){
            console.log(error)
        }
},
