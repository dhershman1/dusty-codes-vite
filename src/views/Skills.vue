<template>
  <section>
    <h1>Skills</h1>
    <div class="card-container">
      <card
        v-for="(skill, i) in skills"
        :key="i"
        :go-to-link="skill.link"
      >
        <template #main>
          <div>
            <img
              :alt="skill.name"
              :src="`/imgs/${skill.img}`"
            >
          </div>
          <progress-circle :level="skill.level" />
        </template>
        <template #text>
          {{ skill.name }}
        </template>
      </card>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Card from '../components/Card.vue'
import ProgressCircle from '../components/ProgressCircle.vue'

const skills = computed(() => {
  return [
    {
      name: 'HTML',
      img: 'html.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      level: 'professional'
    }, {
      name: 'JavaScript',
      img: 'js.jpg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      level: 'expert'
    }, {
      name: 'CSS',
      img: 'css.jpg',
      link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      level: 'professional'
    }, {
      name: 'Node.js',
      img: 'node.png',
      link: 'https://nodejs.org/',
      level: 'professional'
    }, {
      name: 'Python',
      img: 'python.png',
      link: 'https://www.python.org/',
      level: 'intermediate'
    }, {
      name: 'React',
      img: 'react.png',
      link: 'https://react.dev/',
      level: 'professional'
    }, {
      name: 'Vue',
      img: 'vue.png',
      link: 'https://vuejs.org',
      level: 'professional'
    }, {
      name: 'Elm',
      img: 'elm.png',
      link: 'https://elm-lang.org/',
      level: 'intermediate'
    }, {
      name: 'PostgreSQL',
      img: 'postgres.png',
      link: 'https://www.postgresql.org/',
      level: 'intermediate'
    }, {
      name: 'MySQL',
      img: 'mysql.png',
      link: 'https://www.mysql.com/',
      level: 'intermediate'
    }, {
      name: 'JSON',
      img: 'json.png',
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
      level: 'expert'
    }, {
      name: 'Haskell',
      img: 'haskell.jpg',
      link: 'https://www.haskell.org/',
      level: 'novice'
    }, {
      name: 'Clojure',
      img: 'clojure.png',
      link: 'https://clojure.org/',
      level: 'novice'
    }
  ]
})
</script>
