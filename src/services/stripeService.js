// services/stripeService.js
import axios from 'axios';

const BASE_URL = 'http://localhost:4242'; // Change this to your Express server URL

const stripeService = {
  createCheckoutSession() {
    return axios.get(`${BASE_URL}/create-checkout-session`);
  },
  createPaypalOrder() {
    return axios.post(`${BASE_URL}/create-paypal-order`);
  },
  capturePaypalOrder(orderID) {
    return axios.post(`${BASE_URL}/capture-paypal-order`, { orderID });
  },
};

export default stripeService;
