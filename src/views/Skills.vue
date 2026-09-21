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
              :src="`/icons/${skill.icon}.svg`"
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
    icon: 'javascript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    level: 'expert'
  }, {
    name: 'JSON',
    icon: 'json',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    level: 'expert'
  }, {
    name: 'HTML',
    icon: 'html5',
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    level: 'professional'
  }, {
    name: 'CSS',
    icon: 'css3',
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    level: 'professional'
  }, {
    name: 'Node.js',
    icon: 'nodejs',
    link: 'https://nodejs.org/',
    level: 'professional'
  }, {
    name: 'React',
    icon: 'react',
    link: 'https://react.dev/',
    level: 'professional'
  }, {
    name: 'Vue',
    icon: 'vuejs',
    link: 'https://vuejs.org',
    level: 'professional'
  }, {
    name: 'Python',
    icon: 'python',
    link: 'https://www.python.org/',
    level: 'intermediate'
  }, {
    name: 'Elm',
    icon: 'elm',
    link: 'https://elm-lang.org/',
    level: 'intermediate'
  }, {
    name: 'Typescript',
    icon: 'typescript',
    link: 'https://www.typescriptlang.org/',
    level: 'intermediate'
  }, {
    name: 'PostgreSQL',
    icon: 'postgresql',
    link: 'https://www.postgresql.org/',
    level: 'intermediate'
  }, {
    name: 'MySQL',
    icon: 'mysql',
    link: 'https://www.mysql.com/',
    level: 'intermediate'
  }, {
    name: 'Ruby',
    icon: 'ruby',
    link: 'https://www.ruby-lang.org/en/',
    level: 'studying'
  }, {
    name: 'Golang',
    icon: 'go',
    link: 'https://go.dev/',
    level: 'studying'
  }, {
    name: 'AWS',
    icon: 'aws',
    link: 'https://aws.amazon.com/',
    level: 'studying'
  }, {
    name: 'Haskell',
    icon: 'haskell',
    link: 'https://www.haskell.org/',
    level: 'studying'
  }, {
    name: 'Clojure',
    icon: 'clojure',
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
