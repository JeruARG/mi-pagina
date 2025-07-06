// main.js - Código optimizado para NextPlay Studios

document.addEventListener('DOMContentLoaded', () => {
  // Filtros y búsqueda
  const searchInput = document.getElementById('searchInput');
  const filterSelect = document.getElementById('filterSelect');
  const gamesGrid = document.getElementById('gamesGrid');
  const allGames = Array.from(gamesGrid.children);
  function filterGames() {
    const search = searchInput.value.toLowerCase();
    const filter = filterSelect.value;
    allGames.forEach(card => {
      const title = card.querySelector('h3').textContent.toLowerCase();
      const isProx = card.querySelector('.proximamente') !== null;
      let show = true;
      if (search && !title.includes(search)) show = false;
      if (filter === 'disponible' && isProx) show = false;
      if (filter === 'proximamente' && !isProx) show = false;
      card.style.display = show ? '' : 'none';
    });
  }
  searchInput.addEventListener('input', filterGames);
  filterSelect.addEventListener('change', filterGames);

  // Mostrar/ocultar descripción
  gamesGrid.querySelectorAll('.desc-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      const desc = this.parentElement.querySelector('.desc-text');
      const lang = document.getElementById('langSelect').value;
      if (desc.style.display === 'none' || !desc.style.display) {
        desc.style.display = 'block';
        this.textContent = lang === 'en' ? 'Hide' : 'Ocultar';
      } else {
        desc.style.display = 'none';
        this.textContent = translations[lang]['info'] || 'Info';
      }
    });
  });

  // Traducciones ES/EN
  const translations = {
    es: {
      'nav-inicio': 'Inicio',
      'nav-juegos': 'Juegos',
      'nav-about': 'Sobre Nosotros',
      'nav-contacto': 'Contacto',
      'hero-title': 'NextPlay Studios',
      'hero-desc': 'Desarrollamos videojuegos originales, creativos y divertidos para todas las edades.<br>¡Explora nuestros juegos y únete a la comunidad NextPlay!',
      'hero-cta': 'Ver juegos',
      'games-title': 'Nuestros Juegos',
      'gratis': 'Gratis',
      'descargar': 'Descargar',
      'proximamente': 'Próximamente',
      'info': 'Info',
      'about-title': 'Sobre Nosotros',
      'about-1': 'Somos un equipo apasionado por los videojuegos y la tecnología. Creamos experiencias digitales únicas, priorizando la diversión, la creatividad y la innovación.',
      'about-2': 'En NextPlay Studios creemos en el poder de los juegos para conectar personas y despertar la imaginación.',
      'contact-title': 'Contacto',
      'contact-1': '¿Querés contactarnos, colaborar o enviarnos tus ideas?',
      'discord-link': 'Unite a la comunidad',
      'footer': '&copy; 2025 NextPlay Studios. Todos los derechos reservados.',
      'install-app': 'Instalar app',
      // Descripciones de juegos
      'desc-starfighter': 'Dispara y sobrevive en intensas batallas espaciales.',
      'desc-ninja-frog': 'Salta y esquiva obstáculos como una rana ninja.',
      'desc-the-king-knight-remake': 'Una nueva versión del clásico de aventuras medievales.',
      'desc-banana-monkey': 'Recoge bananas y esquiva peligros en la jungla.',
      'desc-animal-run': 'Corre con tu animal favorito y supera obstáculos.',
      'desc-pizza-tycoon': 'Conviértete en el magnate de la pizza y gestiona tu negocio.',
      'desc-minijuegos-234': '¡Compite en divertidos minijuegos multijugador!',
      'desc-the-zombie-apocalypse-remake': 'Remake mejorado del clásico de supervivencia zombi.',
      'desc-big-quest': 'Embárcate en una gran aventura llena de desafíos.',
      'desc-the-history-of-the-word': 'Descubre la historia detrás de las palabras.',
      'desc-the-king-knight': 'Vive la aventura de un caballero en busca de gloria.',
      'desc-the-king-knight-dlc': 'Expansión con nuevas rutas y desafíos para el caballero.',
      'desc-the-colector': 'Recolecta objetos raros y completa tu colección.',
      'desc-wild-war': 'Participa en batallas salvajes y conquista territorios.',
      'desc-billar': 'Demuestra tu habilidad en la mesa de billar virtual.',
      'desc-starfighter-2-demo': 'Prueba la demo de la secuela del clásico espacial.',
      'desc-agarrar-la-fruta': 'Recoge la mayor cantidad de frutas posible.',
      'desc-las-aventuras-del-poli': 'Acompaña al poli en sus increíbles aventuras.',
      'desc-the-king-knight-beta-cancelada': 'Versión beta cancelada del caballero rey.'
    },
    en: {
      'nav-inicio': 'Home',
      'nav-juegos': 'Games',
      'nav-about': 'About Us',
      'nav-contacto': 'Contact',
      'hero-title': 'NextPlay Studios',
      'hero-desc': 'We develop original, creative and fun video games for all ages.<br>Explore our games and join the NextPlay community!',
      'hero-cta': 'See games',
      'games-title': 'Our Games',
      'gratis': 'Free',
      'descargar': 'Download',
      'proximamente': 'Coming Soon',
      'info': 'Info',
      'about-title': 'About Us',
      'about-1': 'We are a team passionate about video games and technology. We create unique digital experiences, prioritizing fun, creativity and innovation.',
      'about-2': 'At NextPlay Studios we believe in the power of games to connect people and spark imagination.',
      'contact-title': 'Contact',
      'contact-1': 'Want to contact us, collaborate or send us your ideas?',
      'discord-link': 'Join the community',
      'footer': '&copy; 2025 NextPlay Studios. All rights reserved.',
      'install-app': 'Install app',
      // Descripciones de juegos
      'desc-starfighter': 'Shoot and survive in intense space battles.',
      'desc-ninja-frog': 'Jump and dodge obstacles like a ninja frog.',
      'desc-the-king-knight-remake': 'A new version of the classic medieval adventure.',
      'desc-banana-monkey': 'Collect bananas and dodge dangers in the jungle.',
      'desc-animal-run': 'Run with your favorite animal and overcome obstacles.',
      'desc-pizza-tycoon': 'Become the pizza mogul and manage your business.',
      'desc-minijuegos-234': 'Compete in fun multiplayer minigames!',
      'desc-the-zombie-apocalypse-remake': 'Improved remake of the classic zombie survival game.',
      'desc-big-quest': 'Embark on a great adventure full of challenges.',
      'desc-the-history-of-the-word': 'Discover the history behind words.',
      'desc-the-king-knight': 'Live the adventure of a knight in search of glory.',
      'desc-the-king-knight-dlc': 'Expansion with new paths and challenges for the knight.',
      'desc-the-colector': 'Collect rare items and complete your collection.',
      'desc-wild-war': 'Participate in wild battles and conquer territories.',
      'desc-billar': 'Demonstrate your skill at the virtual billiards table.',
      'desc-starfighter-2-demo': 'Try the demo of the sequel to the classic space game.',
      'desc-agarrar-la-fruta': 'Collect as many fruits as possible.',
      'desc-las-aventuras-del-poli': 'Join the cop in his incredible adventures.',
      'desc-the-king-knight-beta-cancelada': 'Cancelled beta version of the king knight.'
    }
  };
  document.getElementById('langSelect').addEventListener('change', function() {
    const lang = this.value;
    document.querySelectorAll('[data-txt]').forEach(el => {
      const key = el.getAttribute('data-txt');
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    // Actualizar texto de botones info abiertos
    gamesGrid.querySelectorAll('.desc-btn').forEach(btn => {
      if (btn.parentElement.querySelector('.desc-text').style.display === 'block') {
        btn.textContent = lang === 'en' ? 'Hide' : 'Ocultar';
      } else {
        btn.textContent = translations[lang]['info'] || 'Info';
      }
    });
  });

  // PWA Install button
  let deferredPrompt;
  const installBtn = document.getElementById('installBtn');
  const installMsg = document.getElementById('installMsg');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installBtn.style.display = 'inline-block';
    installMsg.style.display = 'none';
  });
  installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') installBtn.style.display = 'none';
      deferredPrompt = null;
    } else {
      installMsg.textContent = 'No es posible instalar la app desde este navegador o ya está instalada.';
      installMsg.style.display = 'block';
    }
  });
  window.addEventListener('appinstalled', () => {
    installBtn.style.display = 'none';
    installMsg.style.display = 'none';
  });
  if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
    installBtn.style.display = 'inline-block';
    installBtn.disabled = false;
    installMsg.style.display = 'block';
    installMsg.textContent = 'El botón de instalación está visible para pruebas. Solo funcionará si el navegador lo permite.';
  }
  // Registrar service worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw.js');
    });
  }
});
