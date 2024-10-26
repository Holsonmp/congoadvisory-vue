// plugins/slick.js
import 'slick-carousel'; // Importer le package Slick

export default defineNuxtPlugin(() => {
  if (process.client) {
    // Rendre jQuery et Slick disponibles globalement
    window.jQuery = require('jquery');
    require('slick-carousel'); // S'assurer que Slick est chargé

    // Initialisation de Slick si nécessaire
    window.jQuery.fn.slick && window.jQuery('.global-carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      // Ajoutez d'autres options ici si nécessaire
    });
  }
});
