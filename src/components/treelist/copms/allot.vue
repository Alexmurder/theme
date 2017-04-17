<template>
<el-form ref="form" :model="form" label-width="80px">
  <el-form-item label="活动名称">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="活动时间">
    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" ></el-date-picker>
    <el-col class="line" :span="2">-</el-col>
    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 10%;"></el-time-picker>
  </el-form-item>
  <el-form-item label="活动性质">
    <el-checkbox-group v-model="form.type">
      <el-checkbox label="性质1" name="type"></el-checkbox>
      <el-checkbox label="性质2" name="type"></el-checkbox>
      <el-checkbox label="性质3" name="type"></el-checkbox>
      <el-checkbox label="性质4" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="任务内容">
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>
</template>
<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }
  }
</script>
<style>
.el-input {
    width: 30%;
    line-height: 60px;
    text-align: center;
    position: absolute;
    right: 20px;
}
.el-radio-group label span {
    width: 18px; 
    height: 18px;
}
.el-textarea__inner {
    display: block;
    resize: vertical;
    padding: 5px 7px;
    line-height: 1.5;
    width: 80%;
    font-size: 14px;
    color: #1f2d3d;
    background-image: none;
    border: 1px solid #bfcbd9;
    border-radius: 4px;
    -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
}
.el-input__icon+.el-input__inner {
    margin-top: 2px;
    border-radius: 18px;
}
</style>