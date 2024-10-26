export default defineNuxtPlugin(() => {
	if (process.client) {
	  const script = document.createElement('script');
	  script.src = 'https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js';
	  script.async = true;
	  script.onload = () => {
		// Initialiser ScrollReveal après le chargement du script
		ScrollReveal({
		  scale: 0.85,
		  duration: 1000,
		});
  
		// Manipuler la classe 'no-js' pour ajouter 'js'
		document.documentElement.classList.remove('no-js');
		document.documentElement.classList.add('js');
	  };
	  document.head.appendChild(script);
	}
  });
  