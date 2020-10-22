import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App";
import router from "./router";
import * as firebase from "firebase";
import { store } from "./store";
import AlertCmp from "./components/Shared/Alert";

Vue.use(Vuetify);
Vue.config.productionTip = false;
Vue.component("app-alert", AlertCmp);

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  firebase,
  render: (h) => h(App),
  created() {
    firebase.initializeApp({
      apiKey: "AIzaSyDfRQJXE0Vtt8Hv5BvudkrpIjYRgdIG9sw",
      authDomain: "vuedevmt.firebaseapp.com",
      databaseURL: "https://vuedevmt.firebaseio.com",
      projectId: "vuedevmt",
      storageBucket: "vuedevmt.appspot.com",
    });
  },
});
