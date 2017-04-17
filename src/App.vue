<template>
  <div id="app">
    <div v-bind:class="classObject" @click="checktanchuceng">
      <div class="navLeft">
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <img src="./assets/t1.png" @click.stop="toggle">
            <el-menu-item :index="item.index" v-for="item in items" @click="isA = false" :lable="item.title" :name="item.name" :key="item.id">
              <router-link :to="item.url">{{item.name}}</router-link>
            </el-menu-item>
        </el-menu>
      </div>
      <div class="search">
        <el-input placeholder="请输入你要查询的内容" icon="search" v-model="input2" :on-icon-click="handleIconClick"></el-input>      
      </div>
      <div class="navRight">
        <a class="add" v-on:click='add' @click="show = !show">+</a>
        <span class="addThing" v-if="show">
          <a href='javascript:void(0)'>添加群</a>
          <a href='javascript:void(0)'>添加好友</a>
          <a href='javascript:void(0)'>添加任务</a>
        </span>
      </div>
        <div v-bind:class="{ 'class-a' : isA, 'class-b': !isA}" class="personal" @click.stop="">
          <el-row class="tac">
            <el-col>
              <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <router-link to="/User"><el-menu-item index="1" @click="isA = false"><i class="el-icon-more"></i>个人账户</el-menu-item></router-link>   
                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-time"></i>全局静音</template>
                    <el-radio-group v-model="radio3">
                      <el-radio-button label="1小时"></el-radio-button>
                      <el-radio-button label="1  天"></el-radio-button>
                      <el-radio-button label="永 久"></el-radio-button>
                      <el-radio-button label="取 消"></el-radio-button>
                    </el-radio-group>
                </el-submenu>
                <el-menu-item index="3" type="text" @click="dialogVisible = true"><i class="el-icon-d-arrow-left"></i>安全退出</el-menu-item>
              </el-menu>
            </el-col>
          </el-row>
        </div>
        <router-view></router-view>
        <el-dialog title="提示" v-model="dialogVisible" size="tiny">
          <span>确定要退出当前账号吗？</span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
          </span>
        </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      show: false,
      content: '',
      activeIndex: '1',
      dialogVisible: false,
      radio3:'取 消',
      input2: '',
      classObject: localStorage.getItem('sty'),
      isA: false,
      items: [
        { name: '消息' ,title: '1',index: '1',url: '/news',type:'1'},
        { name: '通讯录' ,title: '2',index: '2',url: '/treelist',type:'2'},
        { name: '应用', title: '3',index: '3',url: '/recode',type:'3'}
      ]
    }
  },
   methods: {
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    },
    handleIconClick(ev) {
        console.log(ev);
    },
    toggle: function(){
        this.isA = !this.isA;
    },
    add: function () {
      console.log('+')
    },
    checktanchuceng (){
      if(this.isA=false){
          this.isA = true;
      }
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
      this.infor = true;
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style>
*{
    margin: 0;
    padding: 0;
}
body {
  font-family: Helvetica, sans-serif;
}
.Cont {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #e2e2e2; 
}
.Cont1 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: indigo; 
}
.Cont2 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: powderblue; 
}
.navLeft {
  width: 100%;
  position: relative;
  float: left;
}
.navRight {
  position: relative;
  right: 100px;
}
.navRight .add {
  display: inline-block;
  position: absolute;
  width: 60px;
  height: 60px;
  line-height: 60px;
  font-size: 1.5rem;
  color: #8391a5;
  text-align: center;
}
.navRight .add:hover{
  cursor: pointer;
}
.addThing {
  position: absolute;  
  top: 36px;
  right: -16px;
  z-index: 99;
  overflow: hidden;
}
.addThing a {
  display: block;
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-bottom: 1px solid #ccc;
  background: #FFF;
  color: #000;
}
.addThing a:hover {
  transition: 500ms ease;
  background: #ccc;
}
a {
  text-decoration: none;
}
span:hover {
  cursor: pointer;
}
.el-submenu__title a:hover{
  color: #20a0ff;
}
.el-submenu__title a{
  color: inherit;
}
.el-menu--horizontal .el-menu-item a {
  padding: 22px 0;
} 
.search {
  width: 80%;
  position: relative;
}
.el-input {
  width: 30%;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  right: 20px;
}
.el-input__icon+.el-input__inner {
  margin-top: 12px;
  border-radius: 18px;
}
.pict {
  float: left;
  background: #324157;
  border: none;
}
.navLeft img{
  width: 40px;
  padding: 10px;
  float:left;
}
.personal {
  width: 200px;
  height: 168px;
  position: absolute;
  top: 60px;
  background: #eef1f6;
  z-index: 9;
}
.personal li {
  width: 100%;
  text-align: center;
}
.el-radio-group {
  width:100%;
}
.el-radio-group label {
  width:100%;
}
.el-radio-group label span {
  width:100%;
}
.class-a {
  left: 0;
  transition: 1s ease;
}
.class-b {
  left: -330px;
  transition: 1s ease;  
}
</style>
