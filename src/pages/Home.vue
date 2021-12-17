<template>
  <div>
      <div class="relative pt-20">
        <div class="flex justify-between absolute top z-20 left-0 right-0 top-1/2 transform -translate-y-1/2">
          <button v-on:click="prev()">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-b-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
            <button v-on:click="next()"><svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-b-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <b-carousel ref="myCarousel"
          id="carousel-no-animation"
          style="text-shadow: 0px 0px 2px #000"
          no-animation
          indicators
          img-width="1024"
          img-height="200"
        >
          <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=10"></b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=12" ></b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=22"></b-carousel-slide>
          <b-carousel-slide img-src="https://picsum.photos/1024/300/?image=23" ></b-carousel-slide>
        </b-carousel>
      </div>
      <div class="my-10 px-4 lg:px-12 xl:px-16">
        <button class="px-4 py-1 bg-blue-150 text-white rounded" v-on:click="getproductdata()">Click Here</button>
      </div>
      <div  class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 my-10  px-4 lg:px-12 xl:px-16 gap-x-4 gap-y-4">
        <div v-for="product in products" :key="product.name" class="px-2 py-3 space-y-3 flex flex-col justify-between hover:shadow-xl group rounded border">
          <div class="">
            <div class="flex justify-end">
               <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <img :src="product.image" alt="">
          </div>
          <div>
            <p class="text-lg capitalize text-blue-150 text-justify ">{{ product.name }}</p>
            <div class="flex items-center justify-between">
              <p>
                <span>Rs. {{ product.discount ? dicountedPrice(product.price, product.discount) : product.price}}</span>
              </p>
              <p v-if="product.discount" class="space-x-2">
                <span class="line-through">{{product.price}}</span>
                <span class="border px-2 bg-pink text-white font-bold">{{product.discount}}% off</span>
              </p>
            </div>
            <button class="bg-blue w-full group-hover:bg-blue-dark text-white px-4 py-1 rounded">Add To Cart</button>
          </div>
        </div>
      </div>
      <router-link to = "/admin">Router Link 1</router-link>
  </div>
</template>



<script>
import axios from 'axios'

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      products: [],
    }
  },
  mounted() {
    this.getproductdata();
  },
  methods: {
      prev() {
        this.$refs.myCarousel.prev()
      },
      next() {
        this.$refs.myCarousel.next()
      },
      getproductdata(){
        axios.get('https://ecommerceweb-ab26b-default-rtdb.firebaseio.com/product.json')
        .then(res => {
          this.products = Object.values(res.data)
          console.log(res)
        })
        // --------- without axios ----------
        // fetch('https://ecommerceweb-ab26b-default-rtdb.firebaseio.com/product.json')
        // .then(response => response.json())
        // .then(json => {
        //   this.products = Object.values(json);
        //   console.log(this.products);
        // })
      },
      dicountedPrice(price, discount){
        return parseInt(price/100*(100 - discount))
      }
    }
    
}
</script>
