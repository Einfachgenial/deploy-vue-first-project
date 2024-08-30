<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router'
import DataBase from '@/components/DataBase.vue';

const route = useRoute();
//defineProps(['projects'])
const projects = ref([])
function setProjects(payload){
    projects.value = payload;
}
</script>
<template>
    <div>
        <DataBase @get-projects="setProjects"/>
        <h1>Projekte</h1>
        <div class="container d-flex" v-for="project in projects" :key="project.id">
            <div class="col-6">
                <img class="img-thumbnail" :src="route.path + 'src/assets/'+project.imageUrl" :alt="project.name">
                <div class="details-wrap">
                    <h4>{{project.name}}</h4>
                    <p>{{project.imageUrl}}</p>
                    <p>{{project.id}}</p>
                </div>
                <router-link :to="'/'+ project.id">View Details</router-link>
            </div>
         </div>
    </div>
</template>