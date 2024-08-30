import { createStore } from 'vuex';
import db from '@/db.js'
import { collection, getDocs } from "firebase/firestore"; 

// Create Store from Vuex. store is global and can be reach from component with : const store = useStore();
// 'state' are the all global variable are stored
// From component you call with 'dispatch' an 'actions' function. Then the 'actions' calls the 'mutations'
export default createStore({
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