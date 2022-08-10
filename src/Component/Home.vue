<template>
<Hero />
<Education />
<About />
<Projects />


    
</template>

<script>

import Hero from './Hero.vue'
import About from './About.vue'
import Education from './Education.vue'
import Projects from './Projects.vue'


export default {
    name:'Home',
    components:{
        Hero,About,Education,Projects,
    }
}
</script>
