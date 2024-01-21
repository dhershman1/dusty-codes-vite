<template>
  <div class="card">
    <section class="card__actions">
      <a
        v-if="props.goToLink"
        :href="props.goToLink"
        target="_blank"
      >
        <vue-feather :type="icon" />
      </a>
    </section>
    <section class="card__main">
      <slot name="main" />
    </section>
    <section class="card__text">
      <slot name="text" />
    </section>
  </div>
</template>

<script setup>
const props = defineProps({
  goToLink: {
    type: String,
    required: false,
    default: ''
  },
  icon: {
    type: String,
    default: 'external-link'
  }
})
</script>
