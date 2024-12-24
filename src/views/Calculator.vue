<template>
  <div class="bg-gray-50 min-h-screen p-4">
    <div class="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-4">
      <!-- Input Section -->
      <h1 class="text-3xl font-bold mb-4 text-gray-800">Vstupní parametry</h1>
      <InputForm @scrollToResults="scrollToResults" class="mb-6" />

      <!-- Results Section -->
      <div id="results">
        <Results />
      </div>
    </div>
  </div>
</template>

<script setup>
import InputForm from '../components/InputForm.vue';
import Results from '../components/Results.vue';

function scrollToResults() {
  document.getElementById('results')?.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}
</script>
