<template>
  <div>
    <h1 class="text-8xl font-black text-emerald-800">{{title}}</h1>
    <h2 class="text-6xl text-pink-700">Bon dia!</h2>

    <RouterView/>
  </div>
</template>
<script>
export default {
  name: "App",
  data(){
    return{
      title: "Holaaa!🪲"
    }
  }
  
}
</script>
<style>
  
</style>