<template>
    <div>
        <div class="py-10">
            <h1 class="text-3xl text-blue text-center underline">Admin Panel</h1>
            <form action="" @submit.prevent="submitData()">
                <div class="flex flex-col items-center gap-y-5 py-10">
                    <input class="w-96 border p-2 rounded" v-model="form.name" type="text"  placeholder="Product Name" >
                    <input class="w-96 border p-2 rounded" v-model="form.color" type="text"  placeholder="Product Color" >
                    <input class="w-96 border p-2 rounded" v-model="form.description" type="text"  placeholder="Product Dscription" >
                    <input class="w-96 border p-2 rounded" v-model="form.discount" type="number"  placeholder="Product Discount" >
                    <input class="w-96 border p-2 rounded" v-model="form.size" type="text"  placeholder="Product Size" >
                    <input class="w-96 border p-2 rounded" v-model="form.price" type="text"  placeholder="Product Price" >
                    <input type="text" v-model="form.image" class="w-96 border p-2 rounded" placeholder="Image URL">
                    <button class="py-2 rounded w-96 text-white bg-pink" >Submit Data</button>
                </div>
            </form>
        </div>
        <router-link to="/" class="no-underline mx-5 px-4 py-1 rounded bg-blue-150 text-white">Go to Home</router-link>
    </div>
</template>
<script>
import axios from 'axios'

    export default{
        data(){
            return {
                form : {
                    name : '',
                    color : '',
                    description : '',
                    discount : '',
                    size : '',
                    price : '',
                    image : '',
                },
            }
        },
        methods : {
            submitData(){
                console.log(this.form)
                axios.post('https://ecommerceweb-ab26b-default-rtdb.firebaseio.com/product.json', this.form).then( res => {
                   console.log(res) 
                })
            }
        }
    }
</script>