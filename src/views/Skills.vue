<template>
  <section>
    <h2 class="txt-center amatic-sc-bold">
      Skills
    </h2>
    <div
      v-if="!loading"
      class="card-container"
    >
      <card
        v-for="(skill, i) in dbSkills"
        :key="i"
        :go-to-link="skill.link"
      >
        <template #main>
          <div class="card__img">
            <img
              :alt="skill.name"
              :src="skill.img"
            >
          </div>
          <progress-circle :level="skill.level" />
        </template>
        <template #text>
          <div class="txt-center">
            {{ skill.name }}
          </div>
        </template>
      </card>
    </div>
    <div
      v-else
      class="card-container"
    >
      <vue-feather
        type="settings"
        animation="spin"
      />
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import Card from '../components/Card.vue'
import ProgressCircle from '../components/ProgressCircle.vue'
import { supabase } from '../lib/supabaseClient.js'

const dbSkills = ref([])
const loading = ref(false)

const skills = computed(() => {
  return [
    {
      name: 'JavaScript',
      img: '/imgs/js.jpg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      level: 'expert'
    }, {
      name: 'JSON',
      img: '/imgs/json.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
      level: 'expert'
    }, {
      name: 'HTML',
      img: '/imgs/html.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      level: 'professional'
    }, {
      name: 'CSS',
      img: '/imgs/css.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      level: 'professional'
    }, {
      name: 'Node.js',
      img: '/imgs/node.png',
      link: 'https://nodejs.org/',
      level: 'professional'
    }, {
      name: 'React',
      img: '/imgs/react.png',
      link: 'https://react.dev/',
      level: 'professional'
    }, {
      name: 'Vue',
      img: '/imgs/vue.png',
      link: 'https://vuejs.org',
      level: 'professional'
    }, {
      name: 'Python',
      img: '/imgs/python.png',
      link: 'https://www.python.org/',
      level: 'intermediate'
    }, {
      name: 'Elm',
      img: '/imgs/elm.png',
      link: 'https://elm-lang.org/',
      level: 'intermediate'
    }, {
      name: 'Typescript',
      img: '/imgs/typescript.png',
      link: 'https://www.typescriptlang.org/',
      level: 'intermediate'
    }, {
      name: 'PostgreSQL',
      img: '/imgs/postgres.png',
      link: 'https://www.postgresql.org/',
      level: 'intermediate'
    }, {
      name: 'MySQL',
      img: '/imgs/mysql.png',
      link: 'https://www.mysql.com/',
      level: 'intermediate'
    }, {
      name: 'AWS',
      img: '/imgs/aws.png',
      link: 'https://aws.amazon.com/',
      level: 'studying'
    }, {
      name: 'Haskell',
      img: '/imgs/haskell.png',
      link: 'https://www.haskell.org/',
      level: 'studying'
    }, {
      name: 'Clojure',
      img: '/imgs/clojure.png',
      link: 'https://clojure.org/',
      level: 'studying'
    }
  ]
})

async function getSkills () {
  const { data } = await supabase.from('skills')
    .select('name,img,link,level')
    .order('level', { ascending: true })

  dbSkills.value = data
  loading.value = false
}

onMounted(() => {
  loading.value = true
  getSkills()
})
</script>
