<template>
  <section class="experience">
    <h2 class="txt-center amatic-sc-bold">
      Experience
    </h2>
    <div class="timeline">
      <div
        v-for="item in exp"
        :key="item.name"
        class="timeline-item"
      >
        <div class="timeline-marker">
          <vue-feather
            class="is-small"
            type="briefcase"
          />
        </div>
        <div class="timeline-content">
          <p class="heading">
            {{ item.date }}
          </p>
          <b>{{ item.name }}</b>
          <p>{{ item.position }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const exp = computed(() => {
  return [
    {
      date: 'November 2024 - Present',
      name: 'CareAcademy',
      position: 'Senior Software Engineer'
    },
    {
      date: 'September 2021 - November 2024',
      name: 'Axuall, Inc',
      position: 'Senior Full Stack Software Engineer'
    }, {
      date: 'August 2020 - May 2021',
      name: 'Olive AI',
      position: 'Software Automation Engineer'
    }, {
      date: 'June 2018 - June 2020',
      name: 'Budget Dumpster',
      position: 'Full Stack Software Engineer'
    }, {
      date: 'July 2017 - June 2020',
      name: 'Case Western Reserve University',
      position: 'Instructor'
    }, {
      date: 'May 2014 - June 2018',
      name: 'Dealer Tire',
      position: 'Software Developer'
    }
  ]
})
</script>
