import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    cart: [],
    totalPrice: 0,
  },
  getters: {
    getCart: state => state.cart,
    getTotalPrice: state => state.totalPrice,
  },
  mutations: {
    SET_CART(state, cart) {
      state.cart = cart;
    },
    SET_TOTAL_PRICE(state, totalPrice) {
      state.totalPrice = totalPrice;
    },

  },
  actions: {
    async fetchCart({ commit }) {
      const headers = {
        Authorization: `JWT ${localStorage.getItem('BNA')}`
      };

      try {
        const response = await axios.get(`${process.env.VUE_APP_API_URL}/cart`, { headers });
        const cart = response.data.cart.courses;
        let totalPrice = 0;
        cart.forEach(course => {
          totalPrice += parseFloat(course.price);
        });
        commit('SET_CART', cart);
        commit('SET_TOTAL_PRICE', totalPrice);

      } catch (error) {
        console.log("Error fetching cart: ", error);
      }
    },

  },
  modules: {
  }
})
