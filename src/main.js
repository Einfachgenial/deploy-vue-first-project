import './assets/main.css'
import db from '@/db.js'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'
import { collection, getDocs } from "firebase/firestore"; 
//import store from "./store.js"

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

  const store = createStore({
    state () {
        return {
            projects: []
        }
      },
      mutations: {
        SET_PROJECTS(state, payload) {
          state.projects = payload;
            console.log(state.projects)
        }
      },
      actions: {
         async fetchProjects({commit}) {
            const querySnapshot = await getDocs(collection(db, "projects"));
            const snapData = [];
             querySnapshot.forEach((doc) => {
               snapData.push({
                 id: doc.id,
                 name: doc.data().name,
                 text: doc.data().text,
                 imageUrl: doc.data().imageurl,
               });
               //console.log(snapData);
              
            });
           commit("SET_PROJECTS", snapData)
          }
      }
});


const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')


