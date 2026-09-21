<script setup>
import { ref } from 'vue'
import Socials from './components/Socials.vue'
import brand from './assets/brand.svg'

const showMobile = ref(false)

function showMenu () {
  showMobile.value = !showMobile.value
}
</script>

<template>
  <div class="grid">
    <header>
      <button
        class="menu-icon"
        aria-label="Toggle menu"
        @click="showMenu()"
      >
        ☰
      </button>
      <nav :class="['nav-content', showMobile ? 'open-menu' : 'closed-menu']">
        <div class="logo">
          <router-link
            class="brand__wrapper"
            to="/"
          >
            <span class="brand">
              <brand />
            </span>
            Dusty Codes
          </router-link>
        </div>
        <ul class="nav-items">
          <li>
            <router-link to="/about">
              About
            </router-link>
          </li>
          <li>
            <router-link to="/experience">
              Experience
            </router-link>
          </li>
          <li>
            <router-link to="/skills">
              Skills
            </router-link>
          </li>
          <li>
            <router-link to="/projects">
              Projects
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
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
      <socials />
    </footer>
  </div>
</template>

<style scoped>
.blinking-cursor {
  color: var(--lightgrey);
}

main {
  display: grid;
}

.menu-icon {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  line-height: 1;
  color: var(--jet);
  display: none;
}

.logo {
  display: inline-block;
  color: var(--accent);
  font-size: 30px;
}

@media screen and (max-width: 768px) {
  .menu-icon {
    display: flex;
    padding: 1rem;
    justify-content: end;
  }
}

@media (prefers-color-scheme: light) {
  .blinking-cursor {
    color: var(--dark);
  }

  .menu-icon {
    color: var(--white);
  }
}
</style>
