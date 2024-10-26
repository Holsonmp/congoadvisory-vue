export default defineNuxtPlugin(() => {
    if (process.client) {
      const script = document.createElement('script');
      script.src = 'assets/js/vendor/jquery-3.6.0.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  });
  