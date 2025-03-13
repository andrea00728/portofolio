
import GestLayout from '@/components/gestLayout.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

import AproposPage from '@/views/aproposPage.vue';
import ContactPage from '@/views/contactPage.vue';
import ProjetPage from '@/views/projetPage.vue';
import AccueillePage from '@/views/accueillePage.vue';
const routes    =   [
    {
        path:'/',
        component:GestLayout,
        children:[
            {path:'/',redirect:'/accueil'},
            {path:'/accueil',component:AccueillePage},
             {path:'/apropos',component:AproposPage},
             {path:'/contact',component:ContactPage},
             {path:'/projet',component:ProjetPage},
        ],
    }
];
const router=createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;