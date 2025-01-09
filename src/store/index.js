import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: {
            id: null,
            name: null,
            email: null,
            kakaoToken: null,
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        clearUser(state) {
            state.user = {
                id: null,
                name: null,
                email: null,
                kakaoToken: null,
            };
        }
    },
    actions: {
        setUser({ commit }, user) {
            commit('setUser', user);
        },
        clearUser({ commit }) {
            commit('clearUser');
        }
    },
    getters: {
        getUser: state => state.user,
    }
});

export default store;
