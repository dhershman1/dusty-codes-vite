<template>
  <section class="landing txt-center">
    <figure class="landing__image">
      <img
        alt="progessive-app"
        :src="svg"
      >
    </figure>
    <div class="landing__title">
      <h1 class="amatic-sc-bold">
        Hi, I'm Dustin Hershman
      </h1>
      <span class="typed-text">
        {{ typedText }}
      </span>
      <span class="blinking-cursor">|</span>
      <div class="landing__cta">
        <a
          href="https://www.npmjs.com/~killparadise"
          target="_blank"
          class="btn btn__primary btn--lg"
        >
          Check out my open source work
        </a>
      </div>
      <socials />
    </div>
  </section>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import Socials from '../components/Socials.vue'
import useDetectColorScheme from 'vue-color-detect'

const typedText = ref('')
const isAdding = ref(true)
const idx = ref(1)
const schemeMode = useDetectColorScheme()
const svg = computed(() => {
  if (schemeMode.value === 'LIGHT') {
    return '/svgs/progressive-app.svg'
  }

  return '/svgs/progressive-app-dark.svg'
})

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

figure img {
  height: auto;
  max-width: 100%;
}

.landing {
  display: grid;
  grid-template-columns: 70% 30%;
}

.landing__title {
  align-self: center;
}

.landing__cta {
  margin-top: 2rem;
  margin-bottom: 2rem;
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
  figure {
    margin: 0;
  }

  .landing {
    grid-template-rows: 1fr min-content;
    grid-template-columns: none;
    gap: 0;
  }

  .landing__title {
    align-self: flex-start;
  }

  .landing__image img {
    height: 300px;
    width: 300px;
  }
}
</style>
