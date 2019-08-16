const common = {
    namespaced: true,
    state: {
        commontest:'commontest'
    },
    mutations: {
        setCommontest(state, data) {
            state.commontest = data;
        },
    },
    actions: {
        setCommontest({commit}, data) {
            commit('setCommontest', data);
        },
    }
};
export default common
