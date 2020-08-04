<template>
  <div >
    <h1>{{ msg1 }}</h1>
    <h2>Essential Links</h2>
   <mytest></mytest> 
  </div>
</template>

<script> 
import mytest from'./mytest'
export default {
  name: 'index',
  components:{mytest},
}

</script>



