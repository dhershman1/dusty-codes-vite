<template>
  <div class="grid">
    <header>
      <vue-feather
        type="menu"
        @click="showMenu()"
      />
      <nav :class="['nav-content', showMobile ? 'open-menu' : 'closed-menu']">
        <div class="logo">
          Dusty Codes
        </div>
        <ul class="nav-items">
          <li>
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/skills">
              Skills
            </router-link>
          </li>
          <li>
            <router-link to="/portfolio">
              Portfolio
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <section>
        <h1 class="amatic-sc-bold">
          Hi, I'm Dustin Hershman
        </h1>
        <span class="typed-text">
          {{ typedText }}
        </span>
        <span class="blinking-cursor">|</span>
      </section>
      <router-view />
    </main>
    <footer>
      <p>
        Made With ❤️ by <a
          class="link"
          href="https://github.com/dhershman1"
          target="_blank"
        >Dustin Hershman</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const showMobile = ref(false)
const typedText = ref('')
const isAdding = ref(true)
const idx = ref(1)

function showMenu () {
  showMobile.value = !showMobile.value
}

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
main {
  display: grid;
  justify-content: center;
}

i {
  color: var(--white);
  display: none;
}

.logo {
  display: inline-block;
  color: var(--accent);
  font-size: 30px;
  margin-left: 0.8rem;
}

.blinking-cursor {
  color: var(--white);
  font-size: 16px;
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

@media screen and (max-width: 768px) {
  i {
    display: flex;
    padding: 1rem;
    justify-content: end;
  }
}

@media (prefers-color-scheme: light) {
  .blinking-cursor {
    color: var(--dark);
  }
}
</style>
