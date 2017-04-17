<template>
    <div id="friends" >
      <el-tabs v-model="activeName" @tab-click="handleClick" >
        <el-tab-pane label="A" name="first">阿明</el-tab-pane>
        <el-tab-pane label="B" name="second">白菜</el-tab-pane>
        <el-tab-pane label="C" name="third">常五</el-tab-pane>
        <el-tab-pane label="D" name="fourth">狄仁杰</el-tab-pane>
        <el-tab-pane label="E" name="fifth">饿了么</el-tab-pane>
        <el-tab-pane label="F" name="sixth">方唐镜</el-tab-pane>
        <el-tab-pane label="G" name="seventh">关羽</el-tab-pane>
        <el-tab-pane label="H" name="eighth">何太冲</el-tab-pane>
        <el-tab-pane label="I" name="ninth">艾青</el-tab-pane>
        <el-tab-pane label="J" name="tenth">蒋介石</el-tab-pane>
        <el-tab-pane label="K" name="eleth">康有为</el-tab-pane>
        <el-tab-pane label="L" name="twelth">梁启超</el-tab-pane>
        <el-tab-pane label="M" name="thirth">毛泽东</el-tab-pane>
        <el-tab-pane label="N" name="forteenth">纳兰性德</el-tab-pane>
        <el-tab-pane label="O" name="fifteenth">欧阳修</el-tab-pane>
        <el-tab-pane label="P" name="sixteenth">派大星</el-tab-pane>
        <el-tab-pane label="Q" name="seventeenth">钱学森</el-tab-pane>
        <el-tab-pane label="R" name="eighteenth">任我行</el-tab-pane>
        <el-tab-pane label="S" name="ninteenth">索额图</el-tab-pane>
        <el-tab-pane label="T" name="twentyth">陶行知</el-tab-pane>
        <el-tab-pane label="U" name="twentyoneth">UFO</el-tab-pane>
        <el-tab-pane label="V" name="twentytwoth">view</el-tab-pane>
        <el-tab-pane label="W" name="twentythreeth">王安石</el-tab-pane>
        <el-tab-pane label="X" name="twentyfourth">萧子升</el-tab-pane>
        <el-tab-pane label="Y" name="twentyfiveth">杨无敌</el-tab-pane>
        <el-tab-pane label="Z" name="twentysixth">张作霖</el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
  export default {
    name:'chatlist',
    component:{

    },
    data() {
      return {
        activeName: 'first',
        chatlist:'好友列表'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };
</script>
