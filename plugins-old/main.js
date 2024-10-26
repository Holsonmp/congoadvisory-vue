export default defineNuxtPlugin((nuxtApp) => {
    if (process.client && !window.isScriptsLoaded) {
      // Assurez-vous que les scripts sont chargés une seule fois
      const script = document.createElement('script');
      script.src = '/assets/js/main.js';
      script.async = true;
      document.head.appendChild(script);
  
      // Marquer que les scripts sont déjà chargés
      window.isScriptsLoaded = true;
  
      // Réinitialiser les scripts lorsque la route change
      nuxtApp.hook('page:transition', () => {
        if (window.isScriptsLoaded) {
          // Ici vous pouvez appeler certaines fonctions du main.js
          window.$(window).trigger('load');
        }
      });
    }
  });
  