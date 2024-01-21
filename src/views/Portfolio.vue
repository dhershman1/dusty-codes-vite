<template>
  <section class="portfolio">
    <h1>Portfolio</h1>
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
      summary: 'A light weight functional JavaScript library that only depends on itself',
      link: 'https://github.com/dhershman1/kyanite',
      icon: 'github',
      badges: [{
        badge: 'https://img.shields.io/badge/Kyanite-Documentation-blue?style=flat-square',
        link: 'https://kyanite.dusty.codes/'
      }, {
        badge: 'https://img.shields.io/npm/dm/kyanite.svg?style=flat-square',
        link: 'https://www.npmjs.com/package/kyanite'
      }]
    }, {
      name: 'Vue Debounce',
      summary: 'A simple to use directive for debounce solutions',
      link: 'https://github.com/dhershman1/vue-debounce',
      icon: 'github',
      badges: [{
        badge: 'https://img.shields.io/github/stars/dhershman1/vue-debounce?style=flat-square',
        link: 'https://github.com/dhershman1/vue-debounce'
      }, {
        badge: 'https://img.shields.io/npm/dm/vue-debounce.svg?style=flat-square',
        link: 'https://www.npmjs.com/package/vue-debounce'
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
