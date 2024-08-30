<script setup>

import db from '@/db.js'
import { collection, getDocs } from "firebase/firestore"; 
import { onMounted, ref } from 'vue';

const projects = ref([])
const emit = defineEmits(['getProjects'])


onMounted( async()=>{
    const querySnapshot = await getDocs(collection(db, "projects"));
     const snapData = [];
      querySnapshot.forEach((doc) => {
        snapData.push({
          id: doc.id,
          name: doc.data().name,
          text: doc.data().text,
          imageUrl: doc.data().imageurl,
        });
        projects.value = snapData;
    });

    emit('getProjects', projects.value)
})

</script>

<template>

</template>
