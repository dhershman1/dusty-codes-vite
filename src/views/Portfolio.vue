<template>
  <section class="portfolio">
    <h2 class="txt-center amatic-sc-bold">
      Projects
    </h2>
    <div class="card-container">
      <card
        v-for="(project, i) in projects"
        :key="i"
        :go-to-link="project.link"
        :icon="project.icon"
      >
        <template #main>
          <div class="project-name">
            <h2>{{ project.name }}</h2>
            <p class="summary">
              {{ project.summary }}
            </p>
          </div>
        </template>
        <template #text>
          <a
            v-for="(b, j) in project.badges"
            :key="j"
            :href="b.link"
            target="_blank"
            class="badge"
          >
            <img :src="b.badge">
          </a>
        </template>
      </card>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import Card from '../components/Card.vue'

const projects = computed(() => {
  return [
    {
      name: 'Kyanite',
      summary: 'A light weight functional JavaScript library that only depends on itself.',
      link: 'https://github.com/dhershman1/kyanite',
      icon: 'github',
      badges: [{
        badge: 'https://img.shields.io/github/stars/dhershman1/kyanite?style=flat-square',
        link: 'https://github.com/dhershman1/vue-debounce'
      }, {
        badge: 'https://img.shields.io/npm/dm/kyanite.svg?style=flat-square',
        link: 'https://www.npmjs.com/package/kyanite'
      }]
    }, {
      name: 'Vue Debounce',
      summary: 'A simple to use directive for debounce solutions.',
      link: 'https://github.com/dhershman1/vue-debounce',
      icon: 'github',
      badges: [{
        badge: 'https://img.shields.io/github/stars/dhershman1/vue-debounce?style=flat-square',
        link: 'https://github.com/dhershman1/vue-debounce'
      }, {
        badge: 'https://img.shields.io/npm/dm/vue-debounce.svg?style=flat-square',
        link: 'https://www.npmjs.com/package/vue-debounce'
      }]
    }, {
      name: 'Tap Junit',
      summary: 'Silly small, silly easy junit output formatter for tap.',
      link: 'https://github.com/dhershman1/tap-junit',
      icon: 'github',
      badges: [{
        badge: 'https://img.shields.io/github/stars/dhershman1/tap-junit?style=flat-square',
        link: 'https://github.com/dhershman1/tap-junit'
      }, {
        badge: 'https://img.shields.io/npm/dm/tap-junit.svg?style=flat-square',
        link: 'https://www.npmjs.com/package/tap-junit'
      }]
    }, {
      name: 'Phone Fns',
      summary: 'A small, modern, and functional phone number library.',
      link: 'https://github.com/dhershman1/phone-fns',
      icon: 'github',
      badges: [{
        badge: 'https://img.shields.io/github/stars/dhershman1/phone-fns?style=flat-square',
        link: 'https://github.com/dhershman1/phone-fns'
      }, {
        badge: 'https://img.shields.io/npm/dm/phone-fns.svg?style=flat-square',
        link: 'https://www.npmjs.com/package/phone-fns'
      }]
    }, {
      name: 'Randoscando',
      summary: 'A simple library for seed based predictable randomness.',
      link: 'https://github.com/dhershman1/randoscando',
      icon: 'github',
      badges: [{
        badge: 'https://img.shields.io/github/stars/dhershman1/randoscando?style=flat-square',
        link: 'https://github.com/dhershman1/randoscando'
      }, {
        badge: 'https://img.shields.io/npm/dm/randoscando.svg?style=flat-square',
        link: 'https://www.npmjs.com/package/randoscando'
      }]
    }
  ]
})
</script>

<style scoped>
.badge {
  padding-right: 0.5rem;
}
.badge:last-child {
  padding-right: 0;
}
.cards {
  margin-top: 1rem;
}
.summary {
  max-width: 300px;
}
</style>
