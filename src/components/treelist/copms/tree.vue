<template>
    <div class="tree">
      <el-button>组织</el-button>
      <h1>{{tree}}</h1>
    </div>
</template>

<script>
  export default {
    name:'tree',
    component:{

    },
    data() {
      return {
        tree:'组织列表'
      };
    }
  };
</script>
