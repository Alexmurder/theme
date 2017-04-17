import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'


// 引入组件
import router from "./router.js"

Vue.use(ElementUI)

new Vue({
    router,
    el: '#app',
    render: h => h(App)
})