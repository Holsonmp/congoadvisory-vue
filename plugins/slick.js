/*
import $ from 'jquery';
import 'slick-carousel'; // Assurez-vous que Slick est importé

export default defineNuxtPlugin(() => {
  if (process.client) {
    window.$ = $; // Rendre jQuery accessible globalement
    window.jQuery = $; // Rendre jQuery accessible globalement
  }
});
*/
export default defineNuxtPlugin(() => {
    if (process.client) {
      const script = document.createElement('script');
      script.src = '/assets/js/slick.min.js';
      script.async = true;
      document.head.appendChild(script);
    }
  });
  