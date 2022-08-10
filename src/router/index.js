import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../Component/Home.vue'
import Projects1 from '../Component/Projects1.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component : Home,
    },
    {
        path: '/projects1',
        name: 'Projects1',
        component : Projects1,
    }
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router;