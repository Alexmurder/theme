import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import news from "./components/news/news.vue";
import recode from "./components/recode/recode.vue";
import User from "./components/User/User.vue";

import allot from "./components/treelist/copms/allot.vue";
import backlog from "./components/treelist/copms/backlog.vue";
import chatlist from "./components/treelist/copms/chatlist.vue";
import group from "./components/treelist/copms/group.vue";
import tree from "./components/treelist/copms/tree.vue";
import treelist from "./components/treelist/treelist.vue";

import currency from "./components/User/personal_acco/currency.vue";
import security from "./components/User/personal_acco/security.vue";
import notice from "./components/User/personal_acco/notice.vue";
import theme from "./components/User/personal_acco/theme.vue";
import about from "./components/User/personal_acco/about.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [{
        path: "/news",
        component: news
    },
    {
        path: "/recode",
        component: recode
    },
    {
        path: "/User",
        component: User,
        children: [{
                path: "/currency",
                component: currency
            },
            {
                path: "/security",
                component: security
            },
            {
                path: "/notice",
                component: notice
            },
            {
                path: "/theme",
                component: theme
            },
            {
                path: "/about",
                component: about
            }
        ]
    },
    {
        path: "/treelist",
        component: treelist,
        children: [{
                path: "/group",
                component: group
            },
            {
                path: "/chatlist",
                component: chatlist
            },
            {
                path: "/tree",
                component: tree
            },
            {
                path:"/allot",
                component:allot
            },
            {
                path:"/backlog",
                component:backlog
            }
        ]
    },{
        path: "/",
        redirect:"/news"
    }
]

var router = new VueRouter({
    routes
})
export default router;