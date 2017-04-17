<template>
    <div id="lala">
        <h1 @click="up">主题</h1>
        <h1 @click="up1">主题</h1>
        <h1 @click="up2">主题</h1>
        <p id="op">{{msg}}</p>
        <el-tag>主题一</el-tag>
        <el-tag type="gray">主题二</el-tag>
        <el-tag type="primary">主题三</el-tag>
        <el-tag type="success">主题四</el-tag>
        <el-tag type="warning">主题五</el-tag>
        <el-tag type="danger">主题六</el-tag>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: "我是主题组件"
            }
        },
        methods: {
            up: function() {
                localStorage.setItem('sty','Cont')
                console.log("1") 
                location.reload()   
            },
            up1: function() {
                localStorage.setItem('sty','Cont1')
                location.reload()  
            },
             up2: function() {
                localStorage.setItem('sty','Cont2')
                location.reload()  
            }
        }
         
    }
</script>

<style>
    .el-tag {
        padding: 40px 88px;
        font-size: 20px;
    }
</style>