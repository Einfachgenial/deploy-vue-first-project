<script setup>
import { computed, onMounted } from 'vue';
//import DataBase from '@/components/DataBase.vue';
import { useRoute } from 'vue-router' 
import { useStore } from 'vuex'

const route = useRoute();
const store = useStore();

const project = computed(() => {
    return store.state.projects.find(project => parseInt(project.id) == parseInt(route.params.projectId));
})

onMounted( ()=>{
    store.dispatch("fetchProjects")
})
</script>

<template>
    <div>
       <!-- <DataBase @get-projects="setProjects"/>-->
        <h1>Project Name: </h1>
       <p v-if="project">{{project.name}}</p>
    </div>
</template>