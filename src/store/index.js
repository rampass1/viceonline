import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count : 0,
        cart: [],
    },
    mutations:{
        increment(state){
            state.count++
        },
        addToCart(state, payload) {
            state.cart.push(payload);
        }
    }
})
export {store}
export default function () {
	return store
}