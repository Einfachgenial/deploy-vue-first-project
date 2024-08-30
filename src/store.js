import { createStore } from 'vuex';
import db from '@/db.js'
import { collection, getDocs } from "firebase/firestore"; 


export default createStore({
    state: {
        projects: [],
        currentSong: null
      },
      mutations: {
        SET_PROJECTS(state, payload) {
          state.projects = payload;
        }
      },
      actions: {
        /*fetchSongs({commit}) {
          axios({
            method: "get",
            url: "https://orangevalleycaa.org/api/music",
            params: {
              order: "name"
            }
          })
            .then(response => (commit("SET_PROJECTS", response.data)))
            .catch(error => console.log(error));
          }*/
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
               commit("SET_PROJECTS", snapData)
               
           });
          }
      }
});











