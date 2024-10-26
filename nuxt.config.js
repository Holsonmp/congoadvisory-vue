export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { charset: "utf-8" },
        {
          name: "description",
          content: "Congo Advisory & Business Consulting",
        },
        { name: "keywords", content: "Congo Advisory & Business Consulting" },
      ],
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: true,
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Unbounded:wght@400;500;600;700&display=swap",
        },
        { rel: "stylesheet", href: "/assets/css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/css/all.min.css" },
        { rel: "stylesheet", href: "/assets/css/magnific-popup.min.css" },
        { rel: "stylesheet", href: "/assets/css/slick.min.css" },
        { rel: "stylesheet", href: "/assets/css/animate.min.css" },
        { rel: "stylesheet", href: "/assets/css/imageRevealHover.css" },
        { rel: "stylesheet", href: "/assets/css/style.css" },
        { rel: "icon", href: "https://cdn-hx.ssl-files.holduix.dev/assets/logo/favicon.png", type: "image/png" },
      ],
      script: [
        {
          src: "https://unpkg.com/scrollreveal@4.0.0/dist/scrollreveal.min.js"
        },
        {
          hid: "scrollreveal-init",
          innerHTML: `
						ScrollReveal({
							scale: 0.85,
							duration: 1000,
						});
						document.documentElement.classList.remove('no-js');
						document.documentElement.classList.add('js');
					`,
          type: "text/javascript",
          charset: "utf-8"
        },
        { src: "/assets/js/vendor/jquery-3.6.0.min.js", body: true },
        { src: "assets/js/slick.min.js", body: true },
        { src: "assets/js/bootstrap.min.js", body: true },
        { src: "assets/js/jquery.magnific-popup.min.js", body: true },
        { src: "assets/js/jquery.counterup.min.js", body: true },
        { src: "assets/js/imagesloaded.pkgd.min.js", body: true },
        { src: "/assets/js/isotope.pkgd.min.js", body: true },
        { src: "/assets/js/gsap.min.js", body: true },
        { src: "/assets/js/twinmax.js", body: true },
        { src: "/assets/js/imageRevealHover.js", body: true },
        { src: "/assets/js/jarallax.min.js", body: true },
        { src: "/assets/js/jquery.marquee.min.js", body: true },
        { src: "/assets/js/jquery-ui.min.js", body: true },
        { src: "/assets/js/waypoints.js", body: true },
        { src: "/assets/js/wow.js", body: true },
        { src: "/assets/js/main.js", body: true },
      ],
    },

    loading: { color: "#0d4ea1", height: "4px" },
  },
  
  /*
	plugins: [
		{ src: '~/plugins/slick.js', mode: 'client' },
		{ src: '~/plugins/scrollreveal.js', mode: 'client' },
		{ src: '~/plugins/bootstrap.js', mode: 'client' },
		{ src: '~/plugins/magnific-popup.js', mode: 'client' },
		{ src: '~/plugins/counterup.js', mode: 'client' },
		{ src: '~/plugins/isotope.js', mode: 'client' },
		{ src: '~/plugins/gsap.js', mode: 'client' },
		{ src: '~/plugins/twinmax.js', mode: 'client' },
		{ src: '~/plugins/imageRevealHover.js', mode: 'client' },
		{ src: '~/plugins/jarallax.js', mode: 'client' },
		{ src: '~/plugins/jquery-marquee.js', mode: 'client' },
		{ src: '~/plugins/jquery-ui.js', mode: 'client' },
		{ src: '~/plugins/waypoints.js', mode: 'client' },
		{ src: '~/plugins/wow.js', mode: 'client' }
	],
*/
  compatibilityDate: "2024-10-26",
});
