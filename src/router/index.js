import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Index from '@/views/home/index'
import config from "../config/config";


Vue.use(Router);

const routes = [];

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            children: routes
        }
    ]
});

router.beforeEach((to, from, next) => {
    console.log(to);
    const HOME_PAGE = config.HOME_PAGE;
    //页面中转
    // if (to.name === 'index' || to.path === '/index' || to.path === '/') {
    //     next({path: HOME_PAGE});
    //     return false;
    // }
    // //无效页面跳转至首页
    // if (!to.name && from.meta.model !== 'Login' && to.path !== HOME_PAGE) {
    //     next({path: '/404'});
    //     return false;
    // }
    // if (to.meta.model === 'Login' && store.state.logged) {
    //     next({path: HOME_PAGE});
    //     return false;
    // }
    // if (!store.state.logged && to.meta.model !== 'Login' && to.meta.model !== 'error') {
    //     next({
    //         name: 'login',
    //         query: {redirect: to.fullPath}
    //     });
    //     return false;
    // }
    next();
});
router.afterEach(route => {
   console.log(route)
});

export default router
