import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./views/Home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    // aquí podréis las siguientes rutas
];



const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router