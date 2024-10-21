<template>
  <div class="grid">
    <header>
      <vue-feather
        type="menu"
        @click="showMenu()"
      />
      <nav :class="['nav-content', showMobile ? 'open-menu' : 'closed-menu']">
        <div class="logo">
          <router-link to="/">
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

<script setup>
import { ref } from 'vue'
import Socials from './components/Socials.vue'

const showMobile = ref(false)

function showMenu () {
  showMobile.value = !showMobile.value
}
</script>

<style scoped>
.blinking-cursor {
  color: var(--lightgrey);
}

main {
  display: grid;
}

i {
  color: var(--white);
  display: none;
}

.logo {
  display: inline-block;
  color: var(--accent);
  font-size: 30px;
}

.vue-feather--menu {
  color: var(--jet);
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

  .vue-feather--menu {
    color: var(--white);
  }
}
</style>
