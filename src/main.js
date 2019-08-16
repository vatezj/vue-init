/* eslint-disable no-console,no-unused-vars */
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import store from './store/index'
import router from './router/index'
import common from "./mixins/common";
Vue.use(VueRouter);
Vue.use(store);
Vue.config.productionTip = false;

Vue.mixin(common);


new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});
