export default defineNuxtPlugin(() => {
    if (process.client && !window.isScriptsLoaded) {
      // Assurez-vous que les scripts sont chargés une seule fois
      const script = document.createElement('script');
      script.src = '/assets/js/main.js';
      script.async = true;
      document.head.appendChild(script);
  
      // Marquer que les scripts sont déjà chargés
      window.isScriptsLoaded = true;
  

    }
});
  