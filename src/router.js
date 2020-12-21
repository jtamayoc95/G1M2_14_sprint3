import vueRouter from 'vue-router'
import User from './components/User'
import UserBalance from './components/UserBalance'
import UserLogout from './components/UserLogout'

import App from './App'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/user/:username',
            name: "user",
            component: User
        },
        {
            path: '/user/data/:username',
            name: "user_balance",
            component: UserBalance
        },
        
        {
            path: '/logout',
            name: "user_logout",
            component: UserLogout
        },
    ]
})
export default router