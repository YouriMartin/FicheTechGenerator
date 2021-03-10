import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        itemInStage: [],
    },
    mutations: {
        addToStage(state, item) {
            state.itemInStage.push(item);
        }
    },
    actions: {
        addToStage(context, item) {
            context.commit('addToStage', item)
        }
    },
    modules: {
    }
})