import Vue from "vue";
import Vuex from "vuex";
import * as firebase from "firebase";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/4/47/New_york_times_square-terabass.jpg",
        id: "meetup1",
        title: "Meetup in New York",
        date: "2017-07-17",
        location: "New York",
        description: "New York, New York!",
      },
      {
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg",
        id: "meetup2",
        title: "Meetup in Paris",
        date: "2017-07-19",
        location: "Paris",
        description: "It's Paris!",
      },
      {
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/7/7a/Paris_-_Blick_vom_gro%C3%9Fen_Triumphbogen.jpg",
        id: "meetup13",
        title: "Meetup in Paris",
        date: "2017-07-19",
        location: "Paris",
        description: "It's Paris!",
      },
    ],
    user: null,
    error: null,
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload);
    },
    setUser(state, payload) {
      state.user = payload;
      console.log("mutation");
    },
    setError(state, payload) {
      state.error = payload;
      console.log("payload", payload);
    },
    setError(state, payload) {
      state.error = payload;
    },
    clearError(state) {
      state.error = null;
    },
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: "kfdlsfjslakl12",
      };
      console.log("commit,payload", commit, payload);
      // Reach out to firebase and store it
      commit("createMeetup", meetup);
    },
    signupUser({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid,
            registeredMeetups: [],
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setError", error);
        });
    },
    signInUser({ commit }, payload) {
      firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then((user) => {
          const newUser = {
            id: user.uid,
            registeredMeetups: [],
          };
          commit("setUser", newUser);
        })
        .catch((error) => {
          commit("setError", error);
          console.log(error);
        });
    },
    clearError({ commit }) {
      commit("clearError");
    },
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date;
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5);
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId;
        });
      };
    },
    user(state) {
      return state.user;
    },
    error(state) {
      return state.error;
    },
  },
});
