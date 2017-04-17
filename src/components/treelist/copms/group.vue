<template>
    <div class="chatlist">
      <el-button>群</el-button>
      <h1>{{group}}</h1>
    </div>
</template>

<script>
  export default {
    name:'group',
    component:{

    },
    data() {
      return {
        group:'群列表'
      };
    }
  };
</script>
