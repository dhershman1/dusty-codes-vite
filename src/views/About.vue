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
          I've had a love for programming after teaching myself a little bit of Java for Runescape bots and private
          servers, all with the power of Notepad! From there the rest is history and I've loved writing code ever since.
        </p>
        <p>
          I currently spend most of my time working in Node.js, JavaScript, and Python, but I'm always wanting to learn
          more! My interests include API design, writing clean and quality code, and functional programming
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
