<template>
    <div>
        <div class="d-flex flex-column align-items-center">
            <h2 class="text-primary">{{msg}} {{payAmount}}</h2>
            <form id="payment-form" class="w-75 px-5 d-flex flex-column align-items-center" >
                <div ref="card" class="form-control m-2">
                <!-- A Stripe Element will be inserted here. -->
                </div>
                <input :disabled="lockSubmit" class="btn btn-primary shadow-sm" type="submit" value="Donate" v-on:click.prevent="purchase" />
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
            spk:"pk_live_51OYyjYDfFjBu42f5mKTzyv1m2bAs1cKYwzDzQV5JZS6aLDIZ7CDHmzfJzuZ3XdGt6iyKqqYxVdngkdkfceTGPGf200MwENmmuc",
            stripe:undefined,
            card:undefined,
            msg: 'Donate Here',
            payAmount:"$10.00",
            lockSubmit: false,
            api:"https://yourdomain.com/api/"
            }
        },

        methods:{
            purchase() {
            var self = this;
            self.lockSubmit=true

            self.stripe.createToken(self.cardNumber).then(function(result) {
                if (result.error) {
                alert(result.error.message)
                self.$forceUpdate(); // Forcing the DOM to update so the Stripe Element can update.
                self.lockSubmit=false
                return;
                }
                else{ 
                self.processTransaction(result.token.id)
                }
            })
            .catch((err) => {
                alert("error: "+err.message)
                self.lockSubmit=false
            });
            },

            processTransaction(transactionToken){
            var self=this;
            dt= {
                amount:self.stripCurrency(self.payAmount), //stripe uses an int [with shifted decimal place] so we must convert our payment amount
                currency:"USD",
                description:"something to say",
                token:transactionToken
            }
            var route=self.api+"/charge/card"
            self.$http.post(route,dt, {
                headers: {
                }
            }).then(response => {
                if(response.status==200){
                    alert("Transaction succeeded")
                    self.lockSubmit=false
                }
                else{
                    throw new Error("failed donation")
                }
            }).catch((err) => {
                alert("error: "+err.message)
                self.lockSubmit=false
            });
            },
            stripCurrency(val){
            return val.replace(',','').relpace('$','').replace('.','')
            }

        },

        mounted: function () {
            var self=this;
            self.stripe= Stripe(self.spk);
            self.card = self.stripe.elements().create('card');
            self.card.mount(self.$refs.card);
        },
    }
</script>

<style scoped>

</style>