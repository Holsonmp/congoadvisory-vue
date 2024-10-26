export default defineNuxtPlugin(() => {
    if (process.client) {
      const script = document.createElement('script');
      script.src = '/assets/js/gsap.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  });
  