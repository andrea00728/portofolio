<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <!-- Navigation -->
      <nav class="fixed top-0 w-full bg-white/90 backdrop-blur-lg shadow-lg z-50 transition-all duration-300" :class="{ 'shadow-xl': isScrolled }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <!-- Logo -->
            <div class="flex-shrink-0">
              <router-link to="/accueil" class="flex items-center space-x-2 group">
                <span class="text-2xl font-extrabold text-indigo-600 group-hover:text-indigo-700 transition-colors duration-200">Portfolio</span>
                <div class="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
              </router-link>
            </div>
  
            <!-- Navigation Links -->
            <div class="hidden md:flex items-center space-x-2">
              <router-link
                v-for="(link, index) in navLinks"
                :key="index"
                :to="link.path"
                class="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-all duration-300 ease-in-out group"
                active-class="text-indigo-600"
              >
                <span class="relative z-10">{{ link.name }}</span>
                <!-- Animation de soulignement avec gradient -->
                <span class="absolute inset-x-1 bottom-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out rounded-t-sm"></span>
                <!-- Effet de fond au hover -->
                <span class="absolute inset-0 bg-indigo-50 opacity-0 group-hover:opacity-100 rounded-full transform scale-90 group-hover:scale-100 transition-all duration-300"></span>
              </router-link>
            </div>
  
            <!-- Bouton CTA -->
            <div class="hidden md:block">
              <router-link 
                to="/contact"
                class="relative px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg overflow-hidden group"
              >
                <span class="relative z-10">Me Contacter</span>
                <span class="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </router-link>
            </div>
  
            <!-- Menu Mobile (Burger) -->
            <div class="md:hidden">
              <button 
                @click="toggleMobileMenu" 
                class="p-2 rounded-full text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 transition-all duration-200"
                aria-label="Menu mobile"
              >
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'" />
                </svg>
              </button>
            </div>
          </div>
  
          <!-- Menu Mobile Dropdown -->
          <div 
            v-if="isMobileMenuOpen" 
            class="md:hidden bg-white/95 backdrop-blur-lg shadow-lg absolute top-16 left-0 w-full px-4 py-6 space-y-4 animate-slide-down"
          >
            <router-link
              v-for="(link, index) in navLinks"
              :key="index"
              :to="link.path"
              @click="toggleMobileMenu"
              class="block px-4 py-2 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all duration-200"
              active-class="text-indigo-600 bg-indigo-50"
            >
              {{ link.name }}
            </router-link>
            <router-link 
              to="/contact"
              class="block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-all duration-200 text-center"
              @click="toggleMobileMenu"
            >
              Me Contacter
            </router-link>
          </div>
        </div>
      </nav>
  
      <!-- Contenu principal -->
      <main class="pt-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <router-view></router-view>
        </div>
      </main>
  
      <!-- Footer -->
      <footer class="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-auto relative overflow-hidden">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p class="text-sm font-medium">© 2025 [Solofoniaina Samuel Andrea] - Tous droits réservés</p>
          <div class="flex justify-center space-x-6">
            <a href="https://linkedin.com" target="_blank" class="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-1.337-.027-3.063-1.867-3.063-1.872 0-2.159 1.461-2.159 2.971v5.696h-3v-11h2.882v1.504h.041c.401-.761 1.385-1.564 2.849-1.564 3.045 0 3.604 2.002 3.604 4.609v6.451z"/></svg>
            </a>
            <a href="https://github.com" target="_blank" class="text-gray-400 hover:text-indigo-400 transition-colors duration-200">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237.645 1.994 2.747 1.42 3.416 1.086.432-.675 1.668-1.719 2.051-2.112-.723-.324-1.483-.883-2.112-1.719-.626 1.356-2.463 2.112-4.634 2.112-3.008 0-5.438-2.438-5.438-5.438 0-1.198.433-2.174 1.146-2.945-.115-.288-.498-1.387.11-2.89 0 0 .916-.292 3 1.123 1.146-.302 2.375-.453 3.604-.453s2.458.151 3.604.453c2.083-1.415 3-1.123 3-1.123.608 1.503.225 2.602.11 2.89.713.771 1.146 1.747 1.146 2.945 0 3.008-2.438 5.438-5.438 5.438-2.171 0-4.008-.756-4.634-2.112-.626.836-1.389 1.395-2.112 1.719.383.393 1.619 1.437 2.051 2.112.669-.336 2.771-.909 3.416-1.086 0 0 1.614 1.584 1.838-1.237 0 0 .792.375 1.333 1.756 0 0 .695 2.141-4.033 1.416v2.234c0 .316.194.688.793.577 4.769-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
        <div class="absolute inset-0 opacity-10">
          <div class="w-full h-full bg-[radial-gradient(circle_at_center,_#4f46e5_0,_transparent_70%)]"></div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  
  const navLinks = [
    { name: 'Accueil', path: '/accueil' },
    { name: 'Projets', path: '/projet' },
    { name: 'Contact', path: '/contact' },
    { name: 'À propos', path: '/apropos' },
  ]
  
  const isMobileMenuOpen = ref(false)
  const isScrolled = ref(false)
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  
  // Gestion du scroll pour l'effet de la navbar
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 50
  }
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
  </script>
  
  <style lang="scss" scoped>
  // Animation pour le menu mobile
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .animate-slide-down {
    animation: slideDown 0.3s ease-out forwards;
  }
  
  // Style actif pour les liens
  .router-link-active {
    &::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 50%;
      transform: translateX(-50%);
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #4f46e5;
      box-shadow: 0 0 10px rgba(79, 70, 229, 0.5);
    }
  }
  </style>