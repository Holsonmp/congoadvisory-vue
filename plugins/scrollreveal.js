// plugins/scrollReveal.js
import ScrollReveal from 'scrollreveal';

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.ScrollReveal = ScrollReveal; // Rends ScrollReveal global
  }
});
