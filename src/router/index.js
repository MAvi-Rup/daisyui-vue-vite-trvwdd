import {createRouter, createWebHashHistory} from 'vue-router'

import Home from '../Component/Home.vue'
import Projects1 from '../Component/Projects1.vue'
import Projects2 from '../Component/Projects2.vue'
import Projects3 from '../Component/Projects3.vue'

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
    },
    {
        path: '/projects2',
        name: 'Projects2',
        component : Projects2,
    },
    {
        path: '/projects3',
        name: 'Projects3',
        component : Projects3,
    },
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

export default router;