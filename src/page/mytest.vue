<template>
    <h2>test...{{msg}}</h2>
</template>
<script>
export default {
    name:'mytest',
    props:{
        msg:{
            type:String,
            default:"test msg"
        }
    },
    methods:{

    },
    data(){
        return{
            
        }
    }
}
</script>
<style>
.red{color: red;}
</style>