import Vue from 'vue'
import Vuex from 'vuex'
import { WindowsBalloon } from 'node-notifier'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        user: {
            username: window.localStorage.getItem('user' || '[]') == null ? '' : JSON.parse(window.localStorage.getItem('user' || '[]')).username
        }
    },

    mutations: {
        login(state, user){
            this.state.user = user;
            window.localStorage.setItem('user', JSON.stringify(user))
        }
    }
})