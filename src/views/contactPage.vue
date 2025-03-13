<template>
    <div class="contact-section bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-6">Me contacter</h2>
        <p class="text-lg text-gray-700 mb-8">
          Vous êtes séduit par mes compétences en développement full stack ou intrigué par mon parcours dans l’univers de l’IT ? Que vous ayez un projet innovant en tête, une opportunité de collaboration ou simplement envie d’échanger sur les dernières tendances technologiques, je suis là pour vous ! Contactez-moi via les liens ci-dessous et lançons ensemble une conversation passionnante. Mon ambition ? Transformer vos idées en solutions concrètes et performantes.
        </p>
        <div class="contact-links flex flex-wrap justify-center gap-6">
          <a href="mailto:andrea112samuel@gmail.com" target="_blank" class="contact-item">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg" alt="Gmail" class="icon" />
            <span>andrea112samuel@gmail.com</span>
          </a>
          <a href="https://www.linkedin.com/in/samuel-andrea-682b80355/" target="_blank" class="contact-item">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" class="icon" />
            <span>Samuel Andrea</span>
          </a>
          <a href="https://www.facebook.com/Andrea-SkyRider" target="_blank" class="contact-item">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg" alt="Facebook" class="icon" />
            <span>Andrea SkyRider</span>
          </a>
          <a href="https://github.com/andrea00728" target="_blank" class="contact-item">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" class="icon" />
            <span>andrea00728</span>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Pas de logique JS nécessaire pour ce composant statique
  </script>
  
  <style lang="scss" scoped>
  .contact-section {
    .contact-item {
      @apply flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-200 text-gray-700 hover:text-indigo-600;
    }
  
    .icon {
      @apply w-6 h-6 grayscale transition-all duration-200;
      .contact-item:hover & {
        @apply grayscale-0;
      }
    }
  }
  
  @media (max-width: 640px) {
    .contact-links {
      @apply flex-col items-center;
    }
    .contact-item {
      @apply w-full max-w-xs;
    }
  }
  </style>