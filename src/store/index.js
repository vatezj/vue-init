import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import common from './modules/common'
Vue.use(Vuex);

const store = new Vuex.Store({
    modules: {
        common
    },
    state,
    mutations,
    actions
});
export default store
