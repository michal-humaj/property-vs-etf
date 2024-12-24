<template>
  <div class="space-y-8 bg-white p-6 rounded-lg shadow-md">
    <!-- Property Value -->
    <div>
      <label class="block text-lg font-semibold text-gray-700 mb-2">Hodnota nemovitosti</label>
      <div class="flex items-center space-x-4">
        <Slider
          v-model="propertyValue"
          :min="1000000"
          :max="20000000"
          :step="50000"
          class="flex-1"
        />
        <input
          type="number"
          v-model="propertyValue"
          class="border border-gray-300 rounded-lg p-2 w-32 text-center"
        />
      </div>
    </div>

    <!-- Own Resources and Mortgage -->
    <div>
      <label class="block text-lg font-semibold text-gray-700 mb-2">Vlastní zdroje a Výše hypotéky</label>
      <div class="space-y-4">
        <div class="flex items-center space-x-4">
          <Slider
            v-model="ownResources"
            :min="0"
            :max="propertyValue"
            :step="50000"
            class="flex-1"
          />
          <input
            type="number"
            v-model="ownResources"
            class="border border-gray-300 rounded-lg p-2 w-32 text-center"
          />
        </div>
        <p class="text-gray-600">Výše hypotéky: {{ mortgageValue.toLocaleString() }} Kč</p>
      </div>
    </div>

    <!-- Mortgage RPSN -->
    <div>
      <label class="block text-lg font-semibold text-gray-700 mb-2">RPSN hypotéky</label>
      <div class="flex items-center space-x-4">
        <Slider
          v-model="mortgageRate"
          :min="0"
          :max="10"
          :step="0.1"
          class="flex-1"
        />
        <input
          type="number"
          v-model="mortgageRate"
          class="border border-gray-300 rounded-lg p-2 w-20 text-center"
        />
        <span>%</span>
      </div>
    </div>

    <!-- Monthly Rent -->
    <div>
      <label class="block text-lg font-semibold text-gray-700 mb-2">Nájemné (měsíčně)</label>
      <div class="flex items-center space-x-4">
        <Slider
          v-model="monthlyRent"
          :min="5000"
          :max="50000"
          :step="100"
          class="flex-1"
        />
        <input
          type="number"
          v-model="monthlyRent"
          class="border border-gray-300 rounded-lg p-2 w-32 text-center"
        />
      </div>
    </div>

    <!-- Property Appreciation -->
    <div>
      <label class="block text-lg font-semibold text-gray-700 mb-2">Zhodnocení nemovitosti (ročně)</label>
      <div class="flex items-center space-x-4">
        <Slider
          v-model="propertyAppreciation"
          :min="0"
          :max="10"
          :step="0.1"
          class="flex-1"
        />
        <input
          type="number"
          v-model="propertyAppreciation"
          class="border border-gray-300 rounded-lg p-2 w-20 text-center"
        />
        <span>%</span>
      </div>
    </div>

    <!-- ETF Return -->
    <div>
      <label class="block text-lg font-semibold text-gray-700 mb-2">Výnos ETF (ročně)</label>
      <div class="flex items-center space-x-4">
        <Slider
          v-model="etfReturn"
          :min="0"
          :max="15"
          :step="0.1"
          class="flex-1"
        />
        <input
          type="number"
          v-model="etfReturn"
          class="border border-gray-300 rounded-lg p-2 w-20 text-center"
        />
        <span>%</span>
      </div>
    </div>

    <!-- Buttons -->
    <div class="flex justify-end">
      <button
        class="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-600"
        @click="scrollToResults"
      >
        Zobrazit výsledky
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Slider from '@vueform/slider';
import '@vueform/slider/themes/default.css';

// Reactive data properties
const propertyValue = ref(10000000);
const ownResources = ref(2000000);
const mortgageRate = ref(4);
const monthlyRent = ref(12000);
const propertyAppreciation = ref(4);
const etfReturn = ref(8);

// Computed value for mortgage
const mortgageValue = computed(() => propertyValue.value - ownResources.value);

// Scroll to results section
function scrollToResults() {
  document.getElementById('results').scrollIntoView({ behavior: 'smooth' });
}
</script>
