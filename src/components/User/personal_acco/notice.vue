<template>
    <div id="about">
        <h1>通知</h1>
        <p>{{noticeMsg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                noticeMsg: '我是通知组件'
            }
        }
    }
</script>