<template>
  <transition name="slide-fade">
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
  </transition>
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
