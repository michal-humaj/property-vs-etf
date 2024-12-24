<template>
  <div class="bg-gray-50 min-h-screen p-8">
    <!-- Input Section -->
    <section class="bg-white shadow-lg rounded-lg p-6 mb-10">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">Vstupní parametry</h1>
      <InputForm />
    </section>

    <!-- Results Section -->
    <section id="results" class="bg-white shadow-lg rounded-lg p-6">
      <Results />
    </section>
  </div>
</template>

<script setup>
import InputForm from '../components/InputForm.vue';
import Results from '../components/Results.vue';
</script>
