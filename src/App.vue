<template>
  <div>
    <h1 class="text-8xl font-black text-emerald-800">{{title}}</h1>

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