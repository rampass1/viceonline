<template>
    <div class="">
        <div v-for="eachCartElement in cartData" :key=eachCartElement.name class="">
            <div class="flex shadow-xl hover:shadow-2xl">
                <div class="w-3/12">
                    <img :src="`${eachCartElement.image}`" alt="product image" class="w-20">
                </div>
                <div class="w-9/12 px-3">
                    <p class="text-lg">{{eachCartElement.name}}</p>
                    <!-- <p>Rs. {{ product.discount ? dicountedPrice(product.price, product.discount) : product.price}}</p> -->
                </div>
            </div>
        </div>
        <!-- <p>{{this.$store.state.cart}}</p> -->
    </div>
</template>
<script>
// import image from './assets/men.jpg'

export default {
    data(){
        return{
            cartData: this.$store.state.cart
        }
    },
     methods:{
    }
}
</script>
