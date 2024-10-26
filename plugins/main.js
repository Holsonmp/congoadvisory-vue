export default defineNuxtPlugin(() => {
    if (process.client) {
      const script = document.createElement('script');
      script.src = '/assets/js/main.js';
      script.async = true;
      document.head.appendChild(script);
    }
  });
  