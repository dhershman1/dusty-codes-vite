<template>
  <section class="txt-center about">
    <h2 class="amatic-sc-bold">
      About Me
    </h2>
    <figure class="about__image">
      <img src="/svgs/code-review.svg">
    </figure>
    <div class="about__text">
      <article>
        <p>Welcome to my personal site!</p>
        <p>
          My journey into programming started in an unexpected way—by teaching myself Java to create Runescape bots and private servers, all with the power of Notepad! That early curiosity sparked a lifelong passion for writing code and solving problems. Since then, I've grown into a full-stack developer with over 10 years of experience, primarily working with Node.js, JavaScript, and Python.
        </p>
        <p>
          I'm passionate about creating clean, high-quality code and have a strong interest in functional programming. Whether it's designing APIs, building web applications, or diving into new technologies, I love the challenge of continuously learning and refining my craft.
        </p>
        <p>Please take your time to checkout my skills and projects!</p>
      </article>
    </div>
    <socials />
  </section>
</template>

<script setup>
import Socials from '../components/Socials.vue'
</script>

<style scoped>
figure {
  margin: 0;
}

figure img {
  height: 300px;
}

.about__text {
  display: grid;
}

.about__text article {
  width: 50%;
  justify-self: center;
}

.about p {
  font-size: 16px;
}

@media screen and (max-width: 768px) {
  figure {
    margin: 0
  }

  figure img {
    width: 300px;
  }

  .about__text article {
    width: 100%;
  }
}
</style>
