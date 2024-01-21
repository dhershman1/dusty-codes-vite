<template>
  <section class="portfolio">
    <h1>Portfolio</h1>
    <div class="cards">
      <card
        v-for="(project, i) in projects"
        :key="i"
        :go-to-link="project.link"
      >
        <template #main>
          <div class="project-name">
            <h2>{{ project.name }}</h2>
          </div>
          <div>
            <p class="summary">
              {{ project.summary }}
            </p>
          </div>
        </template>
        <template #text>
          <p>Maybe a badge or 2?</p>
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
      type: 'Library',
      summary: 'A fully functional library of functions for use in any app',
      link: 'https://github.com/dhershman1/kyanite'
    }
  ]
})
</script>

<style scoped>
.cards {
  margin-top: 1rem;
}
.summary {
  max-width: 300px;
}
</style>
