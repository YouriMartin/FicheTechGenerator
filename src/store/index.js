import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        itemInStage: [],
        tableParam: null,
    },
    mutations: {
        addToStage(state, item) {
            state.itemInStage.push(item);
        },
        createTab(state, infos) {
            state.tableParam = infos;
        }
    },
    actions: {
        addToStage(context, item) {
            context.commit('addToStage', item)
        },
        createTab(context, infos) {
            context.commit('createTab', infos)
        }
    },
    modules: {
    }
})