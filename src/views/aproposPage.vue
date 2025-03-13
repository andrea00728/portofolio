<template>
    <div class="min-h-screen bg-gray-50 py-12">
      <!-- Header -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          À propos de moi
        </h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
          Apprenez-en plus sur mon parcours, mes passions et ce qui me motive.
        </p>
      </section>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <h2 class="text-3xl font-semibold text-gray-900">Qui suis-je ?</h2>
            <p class="text-gray-600 leading-relaxed">
              Je suis Solofoniaina Samuel Andrea, étudiant en troisième année de Licence en Développement d’Applications Intranet/Internet à l’École de Management et d’Innovation Technologique (EMIT Fianarantsoa). Passionné par l’univers de l’IT, je rêve de rejoindre les rangs des développeurs de la Silicon Valley. Mon parcours m’a permis d’acquérir des compétences variées, et je reste animé par une curiosité insatiable, toujours prêt à explorer de nouvelles technologies et à relever de nouveaux défis.
            </p>
           
            <router-link 
              to="/contact"
              class="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Me contacter
            </router-link>
          </div>
          <div class="relative">
            <div class="w-full h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
              <img 
                src="../assets/sary-removebg-preview.png" 
                alt="Votre photo" 
                class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-200 rounded-full opacity-50"></div>
            <div class="absolute -top-4 -right-4 w-16 h-16 bg-indigo-300 rounded-full opacity-50"></div>
          </div>
        </div>
      </section>
  
      <!-- Section Compétences -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 class="text-3xl font-semibold text-gray-900 text-center mb-8">Mes Compétences</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="skill in skills" 
            :key="skill.name"
            class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
          >
            <div class="flex items-center mb-4">
              <svg class="w-6 h-6 text-indigo-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 class="text-lg font-semibold text-gray-900">{{ skill.name }}</h3>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5">
              <div 
                :style="{ width: skill.level + '%' }" 
                class="bg-indigo-600 h-2.5 rounded-full transition-all duration-500"
              ></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Timeline Expérience/Éducation -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <h2 class="text-3xl font-semibold text-gray-900 text-center mb-8">Mon Parcours</h2>
        <div class="relative">
          <!-- Ligne verticale centrale -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 bg-indigo-200 h-full"></div>
          
          <div v-for="(item, index) in timeline" :key="item.id" class="mb-12 relative">
            <div :class="['flex', index % 2 === 0 ? 'flex-row' : 'flex-row-reverse']">
              <div class="w-1/2 px-6">
                <div 
                  class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 relative"
                >
                  <h3 class="text-xl font-semibold text-gray-900">{{ item.title }}</h3>
                  <p class="text-gray-600 mt-1">{{ item.subtitle }}</p>
                  <p class="text-sm text-gray-500 mt-2">{{ item.date }}</p>
                  <p class="text-gray-600 mt-3">{{ item.description }}</p>
                  <!-- Point de connexion à la timeline -->
                  <div 
                    :class="[
                      'absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-indigo-600 rounded-full',
                      index % 2 === 0 ? '-right-8' : '-left-8'
                    ]"
                  ></div>
                </div>
              </div>
              <div class="w-1/2"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  // Compétences
  const skills = ref([
    { name: 'Développement Web', level: 90 },
    { name: 'Design UI/UX', level: 30 },
    { name: 'Frontend', level: 90 },
    { name: 'Backend', level: 90 },
  ])
  
  const timeline = ref([
  { 
    id: 1,
    title: 'Première année en Informatique', 
    subtitle: 'EMIT Fianarantsoa', 
    date: '2022 - 2023', 
    description: 'Initiation au développement d’applications Intranet/Internet, avec une introduction aux bases de la programmation, des réseaux et des systèmes d’information.' 
  },
  { 
    id: 2,
    title: 'Deuxième année en Informatique', 
    subtitle: 'EMIT Fianarantsoa', 
    date: '2023 - 2024', 
    description: 'Approfondissement des compétences en développement d’applications web, avec un focus sur les technologies modernes et la gestion de projets informatiques.' 
  },
  { 
    id: 3,
    title: 'Stage professionnel', 
    subtitle: 'DGI Fianarantsoa', 
    date: '24/06/2024 - 24/09/2024', 
    description: 'Développement d’une application web pour la mise en place d’un système minimal de trésorerie en ligne, intégrant des fonctionnalités de gestion financière, réalisée lors d’un stage de 3 mois.' 
  },
  { 
    id: 3,
    title: 'Troisieme annee en Informatique', 
    subtitle: 'EMIT Fianarantsoa', 
    date: '2024 - 2025', 
    description: 'Approfondissement des compétences en développement d’applications web, avec un focus sur les technologies modernes et la gestion de projets informatiques.' 
  },
]);
  </script>
  
  <style lang="scss" scoped>
  // Styles spécifiques pour la timeline
  </style>