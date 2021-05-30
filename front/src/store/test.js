export default {
    state: {
        messege: 'Hello Vuex 3'
    },
    mutations: {}, // for state
    actions: {}, // for api
    getters: {
        getMessage(state) {
            return state.messege
        }
    }
}