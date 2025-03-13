<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Section d'introduction (inchangée) -->
    <section class="py-12 md:py-20 flex items-center justify-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6 animate-fade-in">
            <h1 class="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Bonjour, je suis <span class="text-indigo-600">SOLOFONAINA Samuel Andrea</span>
            </h1>
            <p class="text-xl text-gray-600">
              je suis un développeur Full Stack passionné par la création d'expériences numériques exceptionnelles. Avec une expertise solide dans le développement web front-end et back-end.
            </p>
            <div class="flex space-x-4">
              <router-link 
                to="/projet"
                class="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Voir mes projets
              </router-link>
              <router-link 
                to="/contact"
                class="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-all duration-200"
              >
                Me contacter
              </router-link>
            </div>
          </div>
          <div class="relative">
            <div class="w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="../assets/sary.jpg" 
                alt="mon photo" 
                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50"></div>
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-indigo-300 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Frameworks -->
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Frameworks</h2>
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/laravel.svg" alt="Laravel" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">Laravel</h3>
            <p class="text-gray-600 mt-1">Niveau avancé</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/codeigniter.svg" alt="CodeIgniter" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">CodeIgniter</h3>
            <p class="text-gray-600 mt-1">Niveau avancé</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/react.svg" alt="React" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">React JS</h3>
            <p class="text-gray-600 mt-1">Niveau intermédiaire</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vuedotjs.svg" alt="Vue" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">Vue JS</h3>
            <p class="text-gray-600 mt-1">Niveau avancé</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/spring.svg" alt="Spring" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">Spring Boot</h3>
            <p class="text-gray-600 mt-1">Niveau intermédiaire</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/nestjs.svg" alt="Nest" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">Nest JS</h3>
            <p class="text-gray-600 mt-1">Niveau intermédiaire</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Langages -->
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Langages de Programmation</h2>
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/python.svg" alt="Python" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">Python</h3>
            <p class="text-gray-600 mt-1">Niveau avancé</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ruby.svg" alt="Ruby" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">Ruby</h3>
            <p class="text-gray-600 mt-1">Niveau intermédiaire</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/javascript.svg" alt="JavaScript" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">JavaScript</h3>
            <p class="text-gray-600 mt-1">Niveau avancé</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Outils -->
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Outils</h2>
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">GitHub</h3>
            <p class="text-gray-600 mt-1">Gestion de version et collaboration</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/trello.svg" alt="Trello" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">Trello</h3>
            <p class="text-gray-600 mt-1">Gestion de projets et tâches</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nouvelle Section : Gestion de Bases de Données -->
    <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Gestion de Bases de Données</h2>
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 text-center">
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg" alt="PostgreSQL" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">PostgreSQL</h3>
            <p class="text-gray-600 mt-1">Niveau avancé</p>
          </div>
          <div class="p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 bg-gray-50">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg" alt="MySQL" class="w-12 h-12 mx-auto mb-2" />
            <h3 class="text-xl font-semibold text-gray-900">MySQL</h3>
            <p class="text-gray-600 mt-1">Niveau avancé</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Section Projets -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8 text-center">Projets Récents</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(project, index) in projects" :key="index" 
               class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <div class="h-48 bg-gray-200">
              <img :src="project.image" alt="Projet" class="w-full h-full object-cover" />
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900">{{ project.title }}</h3>
              <p class="mt-2 text-gray-600">{{ project.description }}</p>
              <router-link 
                to="/projet" 
                class="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium"
              >
                En savoir plus →
              </router-link>
            </div>
          </div>
        </div>
        <div class="mt-8 text-center">
          <router-link 
            to="/projet"
            class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200"
          >
            Voir tous les projets
          </router-link>
        </div>
      </div>
    </section>

    <!-- Social Links (inchangés) -->
    <div class="fixed right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
      <div class="flex flex-col space-y-4 bg-white/90 backdrop-blur-md p-2 rounded-l-lg shadow-md">
        <a href="https://linkedin.com" target="_blank" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.872 0-2.159 1.461-2.159 2.971v5.696h-3v-11h2.882v1.504h.041c.401-.761 1.385-1.564 2.849-1.564 3.045 0 3.604 2.002 3.604 4.609v6.451z"/></svg>
        </a>
        <a href="https://github.com" target="_blank" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237.645 1.994 2.747 1.42 3.416 1.086.432-.675 1.668-1.719 2.051-2.112-.723-.324-1.483-.883-2.112-1.719-.626 1.356-2.463 2.112-4.634 2.112-3.008 0-5.438-2.438-5.438-5.438 0-1.198.433-2.174 1.146-2.945-.115-.288-.498-1.387.11-2.89 0 0 .916-.292 3 1.123 1.146-.302 2.375-.453 3.604-.453s2.458.151 3.604.453c2.083-1.415 3-1.123 3-1.123.608 1.503.225 2.602.11 2.89.713.771 1.146 1.747 1.146 2.945 0 3.008-2.438 5.438-5.438 5.438-2.171 0-4.008-.756-4.634-2.112-.626.836-1.389 1.395-2.112 1.719.383.393 1.619 1.437 2.051 2.112.669-.336 2.771-.909 3.416-1.086 0 0 1.614 1.584 1.838-1.237 0 0 .792.375 1.333 1.756 0 0 .695 2.141-4.033 1.416v2.234c0 .316.194.688.793.577 4.769-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z"/></svg>
        </a>
        <a href="https://twitter.com" target="_blank" class="text-gray-600 hover:text-indigo-600 transition-colors duration-200">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.94 0-5.032 2.64-5.032 5.325 0 .42.067.826.2 1.21-.668-.314-1.346-.835-2.156-1.52-.715-.27-1.47-.46-2.23-.573-2.94-.357-5.086 2.25-4.733 5.06.33 2.57-1.58 4.85-4.05 5.67-.835.143-1.72.22-2.61.22-1.803 0-3.47-.61-4.87-1.64.25 2.92 2.88 5.07 5.43 5.13-2.01 1.58-4.54 2.52-7.29 2.52-.473 0-.94-.03-1.4-.086 2.63 1.69 5.77 2.67 9.14 2.67 10.96 0 16.96-9.08 16.96-16.96 0-.26-.006-.52-.017-.78 1.17-.85 2.18-1.91 2.98-3.12z"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import tresorerieImg from '../assets/tresorerie.png';
import loginPAImg from '../assets/login PA (1).png';
import scooterImg from '../assets/Screenshot (353).png';
import santeOne from '../assets/sante1.png';

const projects = [
  { 
    title: 'Plateforme numérique pour la santé publique', 
    description: "Cette plateforme permet aux utilisateurs d'accéder à des informations sur la santé via un site web intuitif, enrichi d’un chatbot intelligent fournissant des détails sur divers domaines de la santé. Développée avec Spring Boot pour le back-end et React.js pour le front-end, elle intègre l’API Gemini pour alimenter le chatbot. Une carte interactive, implémentée avec une Map, affiche les hôpitaux disponibles à Madagascar, offrant une visualisation claire et pratique.", 
    image: santeOne 
  },
  { 
    title: 'Système de trésorerie en ligne', 
    description:"Ce système permet aux utilisateurs de se connecter via leur compte Google et d'effectuer des transactions sécurisées grâce à l'intégration de l'API PayPal pour créditer leur compte. Les rapports de transactions sont générés automatiquement et envoyés par email au format PDF. Développé avec Vue.js pour une interface utilisateur dynamique et Nest.js pour un back-end robuste, il utilise également l'API Google Auth pour l'authentification et l'API PayPal pour les paiements.", 
    image: tresorerieImg 
  },
  { 
    title: 'Projet petites annonces', 
    description: "Cette plateforme permet la gestion et la publication de petites annonces de manière efficace. Le back-end, développé avec Laravel 10, assure une gestion robuste des données, tandis que le front-end, construit avec Vue.js, offre une interface utilisateur intuitive et réactive. Les données des régions et districts disponibles à Madagascar, utilisées pour la création des annonces, sont récupérées via GitHub, garantissant une source fiable et actualisée.", 
    image: loginPAImg 
  },
  { 
    title: 'Gestion de location de scooters', 
    description: "Ce système permet la réservation et la gestion efficace d’une flotte de scooters. Développé avec un back-end en CodeIgniter, il offre une solution robuste et performante pour organiser les réservations, suivre l’état des scooters et optimiser leur disponibilité.", 
    image: scooterImg 
  },
];
</script>

<style lang="scss" scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out forwards;
}

section {
  .grid > div {
    &:hover {
      transform: translateY(-4px);
    }
  }
}

img {
  filter: grayscale(20%);
  transition: filter 0.3s ease;
  &:hover {
    filter: grayscale(0%);
  }
}
</style>