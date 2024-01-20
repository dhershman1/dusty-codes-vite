<template>
  <div :class="['progress-circle', props.level]">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="22.2 22.2 44.4 44.4"
      style="transform: rotate(0deg);"
    >
      <circle
        fill="transparent"
        cx="44.4"
        cy="44.4"
        r="20"
        stroke-width="4.45"
        stroke-dasharray="125.664"
        stroke-dashoffset="0"
        class="progress-circle__underlay"
      />
      <circle
        fill="transparent"
        cx="44.4"
        cy="44.4"
        r="20"
        stroke-width="4.45"
        stroke-dasharray="125.664"
        :stroke-dashoffset="`${translatedLevel}px`"
        class="progress-circle__overlay"
      />
    </svg>
    <div class="progress-circle__info">
      {{ props.level }}
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  level: {
    type: String,
    default: 'novice'
  }
})

const translatedLevel = computed(() => {
  const offsets = {
    expert: 0,
    professional: 25,
    intermediate: 50,
    novice: 75
  }

  return offsets[props.level]
})
</script>

<style scoped>
.progress-circle {
  height: 150px;
  width: 150px;
  position: relative;
  display: inline-flex;
  vertical-align: middle;
}

.progress-circle__info {
  position: absolute;
  text-transform: capitalize;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.progress-circle__underlay {
  stroke: rgba(0, 0, 0, .1);
  z-index: 1;
}

.progress-circle__overlay {
  stroke: currentColor;
  z-index: 2;
  transition: all .6s ease-in-out;
}

.progress-circle svg {
  width: 100%;
  height: 100%;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
}

.novice {
  color: rgb(43, 89, 148);
  caret-color: rgb(43, 89, 148);
}

.intermediate {
  color: rgb(255, 193, 7);
  caret-color: rgb(255, 193, 7);
}

.professional {
  color: rgb(76, 175, 80);
  caret-color: rgb(76, 175, 80);
}

.expert {
  color: var(--accent);
  caret-color: var(--accent);
}
</style>
