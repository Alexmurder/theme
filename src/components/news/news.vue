<template>  
  <div class="head">  
    <p> {{ title }} </p>   
  </div>  
</template>  
  
<script type="text/javascript">  
  export default {  
      data() {  
        return {  
          title: "这是消息"  
        }  
      } 
  }
</script>

<style>
  .head{
    position: absolute;
    top: 60px;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
