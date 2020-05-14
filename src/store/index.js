import Vue from 'vue'
import Vuex from 'vuex'
import mod1 from './modules/mod1' // 引入各个模块的代码
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        mod1
    },
    getters
})

export default store