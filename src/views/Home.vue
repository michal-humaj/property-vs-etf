<template>
  <div class="bg-gradient-to-r from-blue-500 to-blue-700 min-h-screen flex flex-col items-center justify-center text-white">
    <!-- Heading -->
    <h1 class="text-5xl font-bold mb-6 text-center leading-tight">
      Srovnejte investice do nemovitostí a ETF
    </h1>
    <!-- Subheading -->
    <p class="text-xl mb-10 text-center">
      Zjistěte, která investice je pro vás výhodnější. Spočítejte si čistý majetek za 30 let!
    </p>
    <!-- Call to Action Buttons -->
    <div class="flex space-x-6">
      <router-link to="/calculator">
        <button class="bg-green-500 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-green-600 hover:shadow-xl">
          Spočítat
        </button>
      </router-link>
      <a href="#jak-to-funguje">
        <button class="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl">
          Jak to funguje?
        </button>
      </a>
    </div>
  </div>

  <!-- "Jak to funguje" Section -->
  <section id="jak-to-funguje" class="bg-gray-100 py-20 px-8">
    <h2 class="text-4xl font-bold text-center text-gray-800 mb-6">
      Jak výpočet funguje?
    </h2>
    <p class="text-lg text-gray-700 text-center max-w-3xl mx-auto">
      Naše kalkulačka porovnává návratnost investic do nemovitostí a ETF na základě vašich vstupních parametrů. Zadáte cenu nemovitosti, výnos ETF a další parametry a my vám ukážeme, která možnost vám přinese vyšší čistý majetek po 30 letech.
    </p>
  </section>
</template>

<script setup>
</script>
