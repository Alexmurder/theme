<template>
    <div id="about">
        <h1 @click='about'>关于</h1>
        <p>{{aboutMsg}}</p>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                aboutMsg: '我是关于组件'
            }
        },
        methods: {
            about: function() {
                console.log(999)
            }
        }
    }
</script>