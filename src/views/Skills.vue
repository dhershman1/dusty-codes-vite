<template>
  <section class="skills">
    <h2 class="txt-center amatic-sc-bold">
      Skills
    </h2>
    <figure>
      <img src="/svgs/percents.svg">
    </figure>
    <div class="card-container">
      <card
        v-for="(skill, i) in skills"
        :key="i"
        :go-to-link="skill.link"
      >
        <template #main>
          <div class="card__img">
            <img
              :alt="skill.name"
              :src="`/imgs/${skill.img}`"
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
  </section>
</template>

<script setup>
import Card from '../components/Card.vue'
import ProgressCircle from '../components/ProgressCircle.vue'

const skills = [
  {
    name: 'JavaScript',
    img: 'js.jpg',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    level: 'expert'
  }, {
    name: 'JSON',
    img: 'json.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    level: 'expert'
  }, {
    name: 'HTML',
    img: 'html.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    level: 'professional'
  }, {
    name: 'CSS',
    img: 'css.png',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    level: 'professional'
  }, {
    name: 'Node.js',
    img: 'node.png',
    link: 'https://nodejs.org/',
    level: 'professional'
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
    name: 'Python',
    img: 'python.png',
    link: 'https://www.python.org/',
    level: 'intermediate'
  }, {
    name: 'Elm',
    img: 'elm.png',
    link: 'https://elm-lang.org/',
    level: 'intermediate'
  }, {
    name: 'Typescript',
    img: 'typescript.png',
    link: 'https://www.typescriptlang.org/',
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
    name: 'Ruby',
    img: 'ruby.png',
    link: 'https://www.ruby-lang.org/en/',
    level: 'studying'
  }, {
    name: 'Golang',
    img: 'go.png',
    link: 'https://go.dev/',
    level: 'studying'
  }, {
    name: 'AWS',
    img: 'aws.png',
    link: 'https://aws.amazon.com/',
    level: 'studying'
  }, {
    name: 'Haskell',
    img: 'haskell.png',
    link: 'https://www.haskell.org/',
    level: 'studying'
  }, {
    name: 'Clojure',
    img: 'clojure.png',
    link: 'https://clojure.org/',
    level: 'studying'
  }
]
</script>

<style scoped>
figure {
  display: block;
  position: relative;
  text-align: center;
}

figure img {
  height: 300px;
}

@media screen and (max-width: 768px) {
  figure {
    margin: 0
  }

  figure img {
    width: 300px;
  }
}
</style>
