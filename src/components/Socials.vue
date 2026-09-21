<template>
  <section class="socials">
    <a
      href="https://github.com/dhershman1"
      target="_blank"
      aria-label="My Github Profile"
    >
      <github-icon />
    </a>
    <a
      href="https://www.linkedin.com/in/dustin-hershman/"
      target="_blank"
      aria-label="My LinkedIn Profile"
    >
      <linkedin-icon />
    </a>
    <a
      href="https://bsky.app/profile/dusty.codes"
      target="_blank"
      aria-label="My BlueSky Profile"
    >
      <span aria-hidden="true">@</span>
    </a>
  </section>
</template>

<script setup>
import { GithubIcon } from '@dev.icons/vue/mono'
import LinkedinIcon from 'devicon/icons/linkedin/linkedin-original.svg'
</script>

<style scoped>
svg {
  width: 1.5rem;
  height: 1.5rem;
}

span {
  font-size: 1.5rem;
  line-height: 1;
}
</style>
