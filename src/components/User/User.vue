<template>
  <div id="personal">
    <el-row class="tac" v-if="information" :gutter="24">
      <el-col :span="8">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1" @click="infor = true;information=false"><i class="el-icon-more"></i>个人账户</el-menu-item>
          <el-menu-item index="2" @click="infor = false"><i class="el-icon-setting"></i>安全设置</el-menu-item>        
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-time"></i>全局静音</template>
              <el-radio-group v-model="radio3">
                <el-radio-button label="1小时"></el-radio-button>
                <el-radio-button label="1  天"></el-radio-button>
                <el-radio-button label="永 久"></el-radio-button>
                <el-radio-button label="取 消"></el-radio-button>
              </el-radio-group>
          </el-submenu>
          <el-menu-item index="4" type="text" @click="dialogVisible = true;infor = false"><i class="el-icon-d-arrow-left"></i>安全退出</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <el-dialog title="提示" v-model="dialogVisible" size="tiny">
      <span>确定要退出当前账号吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <transition name="fade">
    <el-row :gutter="24" v-if="infor" >
      <el-col :span="8">
        <el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
          <router-link :to="item.path" v-for="item in children" :key="item.id"><el-menu-item :index="item.number"><i :class="item.icon"></i>{{item.name}}</el-menu-item></router-link>
        </el-menu>
      </el-col>
      <el-col :span="16">
        <router-view>

        </router-view>
      </el-col>
    </el-row>
    </transition>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false,
      radio3:'取 消',
      infor:true,
      information:false,
      activeName: 'first',
      children: [
        {
          "path": "/currency",
          "name": "通用",
          "number":"1",
          "icon":"el-icon-menu",
          "actName":"first"
        },
        {
          "path": "/security",
          "name": "安全",
          "number":"2",
          "icon":"el-icon-setting",
          "actName":"two"
        },
        {
          "path": "/notice",
          "name": "通知",
          "number":"3",
          "icon":"el-icon-plus",
          "actName":"three"
        },
        {
          "path": "/theme",
          "name": "主题",
          "number":"4",
          "icon":"el-icon-share",
          "actName":"four"
        },
        {
          "path": "/about",
          "name": "关于",
          "number":"5",
          "icon":"el-icon-information",
          "actName":"five"
        }
      ]
    };
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
        this.infor = false;
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>
<style scoped>
body {
  font-family: Helvetica, sans-serif;
}
* {
  padding:0;
  margin:0 auto;
  box-sizing:border-box;
}
#personal {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  bottom: 0;
}
a {
  text-decoration:none;
}
.tac i {
  padding:0 10px;
}
.tac em {
  float:right;
  line-height:50px;
  font-size:12px;
}
.el-menu {
  width:100%;
}
.el-menu div {
  width:100%;
}
.el-menu div label {
  width:100%;
  text-align:center;
  background:#fff;
  overflow:hidden;
}
.el-menu div label span {
  height:40px;
  line-height:40px;
  padding:0;
}
.el-radio-button__inner {
  width:100%;
  border:none; 
  border-radius:5px;
}
.el-radio-button:first-child .el-radio-button__inner {
  border-radius:5px;
}
.el-radio-button:last-child .el-radio-button__inner {
  border-radius:5px;
}
/*个人账号*/
#personal {
  overflow:hidden;
  min-width:700px;
}
body,html{
  width:100%;
}
.el-row {
  width:100%;
}
.el-col {
  float:left;
  padding:0 !important;
  margin:0 auto !important;
  /*text-align:center;*/
}
.haha {
  background:red;
}
.el-menu-item i {
  padding:0 10px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
