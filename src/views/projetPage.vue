<template>
    <div class="min-h-screen bg-gray-50 py-12">
      <!-- Introduction -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          Mes Projets
        </h1>
        <p class="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Découvrez une sélection de mes travaux récents, mettant en avant mes compétences et ma passion pour [votre domaine].
        </p>
      </section>
  
      <!-- Filtres -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div class="flex flex-wrap justify-center gap-4">
          <button 
            v-for="category in categories" 
            :key="category" 
            @click="filterProjects(category)"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium transition-all duration-200',
              activeFilter === category 
                ? 'bg-indigo-600 text-white shadow-md' 
                : 'bg-white text-gray-700 hover:bg-indigo-50 border border-gray-300'
            ]"
          >
            {{ category }}
          </button>
        </div>
      </section>
  
      <!-- Grille de projets -->
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <div class="relative h-56">
              <img 
                :src="project.image" 
  
                class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <span 
                class="absolute top-3 right-3 bg-indigo-600 text-white text-xs font-medium px-2 py-1 rounded-full"
              >
                {{ project.category }}
              </span>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex items-center justify-between">
                <a 
                  :href="project.link" 
                  target="_blank"
                  class="text-indigo-600 hover:text-indigo-800 font-medium flex items-center"
                >
                  Voir le projet
                  <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <span class="text-sm text-gray-500">{{ project.date }}</span>
              </div>
            </div>
          </div>
        </div>
        <div v-if="filteredProjects.length === 0" class="text-center py-12">
          <p class="text-gray-600 text-lg">Aucun projet dans cette catégorie pour le moment.</p>
        </div>
      </section>
      <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 text-center">
        <p class="text-lg text-gray-600 mb-6">
          Intéressé par une collaboration ? N’hésitez pas à me contacter !
        </p>
        <router-link 
          to="/contact"
          class="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          Contactez-moi
        </router-link>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  import tresorerieImg from '../assets/tresorerie.png';
  import loginPAImg from '../assets/PA.png';
  import scooterImg from '../assets/Screenshot (353).png';
  import santeOne from '../assets/sante1.png';
  import santeTwo from '../assets/sante2.png';
  // Données des projets
  const projects = ref([
    { 
      id: 1,
    
      description: 'Frontend Petite Annonce avec Vue js', 
      image: loginPAImg  ,
      category: 'Frontend', 
      link: 'https://github.com/andrea00728/Petite_annonce_frontend', 
    },
    { 
      id: 2,
   
      description: 'frontend Platforme numerique pour la sante avec React js', 
      image: santeTwo, 
      category: 'Frontend', 
      link: 'https://github.com/andrea00728/Plateforme-pour-la-sante_frontend', 
    },
    { 
      id: 3,
   
      description: 'Frontend Systeme  de Tresorerie en ligne avec Vue Js', 
      image: tresorerieImg  ,
      category: 'Frontend', 
      link: 'https://github.com/andrea00728/tresorerie_frontend', 
    },
    { 
      id: 4,
      description: 'Gestion de location scooter avec CodeIgniter.', 
      image: scooterImg ,
      category: 'Backend', 
      link: 'https://github.com/andrea00728/GestionScooter_Backend', 
    },
    { 
      id: 5,
      description: 'Backend Platforme numerique pour la sante avec Springboot', 
      image: santeOne, 
      category: 'Backend', 
      link: 'https://github.com/andrea00728/Back_sante', 
    },
    { 
      id: 6,
      description: 'Backend Systeme  de Tresorerie en ligne avec Nest Js', 
      image: tresorerieImg  ,
      category: 'Backend', 
      link: 'https://github.com/andrea00728/tresorerie_Backend', 
    },
    { 
      id: 6,
      description: 'Backend Petite Annonce avec Laravel', 
      image: loginPAImg  ,
      category: 'Backend', 
      link: 'https://github.com/andrea00728/Petite_annonce_Backend', 
    },
  ])
  

  const categories = ['Tous', 'Frontend', 'Mobile', 'Backend','Design']
  const activeFilter = ref('Tous')
  

  const filteredProjects = computed(() => {
    if (activeFilter.value === 'Tous') return projects.value
    return projects.value.filter(project => project.category === activeFilter.value)
  })
  

  const filterProjects = (category) => {
    activeFilter.value = category
  }
  </script>
  
  <style lang="scss" scoped>

  button {
    &:focus {
      outline: none;
      ring: 2px solid #4f46e5; 
    }
  }
  </style>