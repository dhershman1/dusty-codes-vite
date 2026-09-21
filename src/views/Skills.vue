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
            <component
              :is="skill.icon"
              aria-hidden="true"
            />
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
import {
  Javascript as JavascriptIcon,
  Json as JsonIcon,
  Css3 as Css3Icon,
  NodejsIcon,
  _React as ReactIcon,
  _Vue as VuejsIcon,
  Python as PythonIcon,
  Elm as ElmIcon,
  TypescriptIcon,
  Postgresql as PostgresqlIcon,
  Mysql as MysqlIcon,
  Ruby as RubyIcon,
  Go as GoIcon,
  Aws as AwsIcon,
  HaskellIcon,
  Clojure as ClojureIcon
} from '@dev.icons/vue'
// @dev.icons/vue's Html5 icon renders flat black instead of the brand orange, so sourced from devicon directly
import Html5Icon from 'devicon/icons/html5/html5-original.svg'

const skills = [
  {
    name: 'JavaScript',
    icon: JavascriptIcon,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    level: 'expert'
  }, {
    name: 'JSON',
    icon: JsonIcon,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON',
    level: 'expert'
  }, {
    name: 'HTML',
    icon: Html5Icon,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    level: 'professional'
  }, {
    name: 'CSS',
    icon: Css3Icon,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    level: 'professional'
  }, {
    name: 'Node.js',
    icon: NodejsIcon,
    link: 'https://nodejs.org/',
    level: 'professional'
  }, {
    name: 'React',
    icon: ReactIcon,
    link: 'https://react.dev/',
    level: 'professional'
  }, {
    name: 'Vue',
    icon: VuejsIcon,
    link: 'https://vuejs.org',
    level: 'professional'
  }, {
    name: 'Python',
    icon: PythonIcon,
    link: 'https://www.python.org/',
    level: 'intermediate'
  }, {
    name: 'Elm',
    icon: ElmIcon,
    link: 'https://elm-lang.org/',
    level: 'intermediate'
  }, {
    name: 'Typescript',
    icon: TypescriptIcon,
    link: 'https://www.typescriptlang.org/',
    level: 'intermediate'
  }, {
    name: 'PostgreSQL',
    icon: PostgresqlIcon,
    link: 'https://www.postgresql.org/',
    level: 'intermediate'
  }, {
    name: 'MySQL',
    icon: MysqlIcon,
    link: 'https://www.mysql.com/',
    level: 'intermediate'
  }, {
    name: 'Ruby',
    icon: RubyIcon,
    link: 'https://www.ruby-lang.org/en/',
    level: 'studying'
  }, {
    name: 'Golang',
    icon: GoIcon,
    link: 'https://go.dev/',
    level: 'studying'
  }, {
    name: 'AWS',
    icon: AwsIcon,
    link: 'https://aws.amazon.com/',
    level: 'studying'
  }, {
    name: 'Haskell',
    icon: HaskellIcon,
    link: 'https://www.haskell.org/',
    level: 'studying'
  }, {
    name: 'Clojure',
    icon: ClojureIcon,
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
