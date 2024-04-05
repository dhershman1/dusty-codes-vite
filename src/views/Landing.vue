<template>
  <section class="heading txt-center">
    <div class="heading__title">
      <h1 class="amatic-sc-bold">
        Hi, I'm Dustin Hershman
      </h1>
      <span class="typed-text">
        {{ typedText }}
      </span>
      <span class="blinking-cursor">|</span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const typedText = ref('')
const isAdding = ref(true)
const idx = ref(1)

function typeAnimation (textToType) {
  setTimeout(function () {
    // set the text of typeText to a substring of
    // the textToType using idx.
    typedText.value = textToType.slice(0, idx.value)
    if (isAdding.value) {
      // adding text
      if (idx.value > textToType.length) {
        // no more text to add
        isAdding.value = false
        // break: wait 2s before playing again
        setTimeout(function () {
          typeAnimation(textToType)
        }, 2000)
        return
      } else {
        // increment idx by 1
        idx.value++
      }
    }
    // call itself
    typeAnimation(textToType)
  }, 120)
}
onMounted(() => {
  typeAnimation('A Fullstack Software Engineer')
})
</script>

<style scoped>

.heading {
  display: grid;
}

.heading__title {
  width: 50%;
  justify-self: center;
  padding-bottom: 1rem;
  border-bottom: 2px solid var(--accent);
}

.typed-text {
  font-size: 18px;
}

.blinking-cursor {
  color: var(--white);
  font-size: 18px;
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}

@keyframes blink {

  from,
  to {
    color: transparent;
  }

  50% {
    color: #2c3e50;
  }
}

@media (prefers-color-scheme: light) {
  .blinking-cursor {
    color: var(--dark);
  }
}

@media screen and (max-width: 768px) {
  .heading__title {
    width: 100%;
  }
}
</style>
