<template>
  <div class="max-w-3xl mx-auto space-y-8 p-4">
    <h1 class="text-2xl font-bold mb-8">Vstupní parametry</h1>

    <!-- Property Value -->
    <div class="space-y-2">
      <div class="flex justify-between items-center mb-2">
        <div>
          <h2 class="font-semibold">Hodnota nemovitosti</h2>
          <p class="text-gray-600">Za kolik nemovitost kupujete</p>
        </div>
        <input
          type="text"
          v-model="propertyValue"
          class="w-40 p-2 border rounded text-right"
          placeholder="10 000 000 Kč"
        />
      </div>
      <input type="range" class="w-full" min="1000000" max="20000000" v-model="propertyValue" />
    </div>

    <!-- Down Payment and Mortgage -->
    <div class="space-y-2">
      <div class="flex justify-between">
        <span class="text-gray-600">Vlastní zdroje</span>
        <span class="text-gray-600">Výše hypotéky</span>
      </div>
      <input type="range" class="w-full" v-model="downPaymentPercentage" />
      <div class="flex justify-between">
        <span>{{ downPayment }} Kč ({{ downPaymentPercentage }}%)</span>
        <span>{{ mortgageAmount }} Kč ({{ 100 - downPaymentPercentage }}%)</span>
      </div>
    </div>

    <!-- Mortgage Rate -->
    <div class="space-y-2">
      <div class="flex justify-between items-center mb-2">
        <div>
          <h2 class="font-semibold">RPSN hypotéky</h2>
          <p class="text-gray-600">Roční procentní sazba nákladů</p>
        </div>
        <input
          type="text"
          v-model="mortgageRate"
          class="w-24 p-2 border rounded text-right"
          placeholder="4 %"
        />
      </div>
      <input type="range" class="w-full" min="1" max="10" step="0.1" v-model="mortgageRate" />
    </div>

    <!-- Monthly Rent -->
    <div class="space-y-2">
      <div class="flex justify-between items-center mb-2">
        <div>
          <h2 class="font-semibold">Nájemné (měsíčně)</h2>
          <p class="text-gray-600">Za kolik nemovitost pronajmete</p>
        </div>
        <input
          type="text"
          v-model="monthlyRent"
          class="w-32 p-2 border rounded text-right"
          placeholder="12 000 Kč"
        />
      </div>
      <input type="range" class="w-full" min="5000" max="50000" step="100" v-model="monthlyRent" />
    </div>

    <!-- Buttons -->
    <div class="flex justify-between gap-4 mt-8">
      <button class="px-6 py-3 border rounded-lg hover:bg-gray-50">
        Upřesnit další parametry
      </button>
      <button class="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Zobrazit výsledky
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const propertyValue = ref(10000000)
const downPaymentPercentage = ref(20)
const mortgageRate = ref(4)
const monthlyRent = ref(12000)

const downPayment = computed(() => (propertyValue.value * downPaymentPercentage.value) / 100)
const mortgageAmount = computed(() => propertyValue.value - downPayment.value)
</script>

<style scoped>
input[type="range"] {
  @apply h-2 rounded-lg appearance-none cursor-pointer;
  background: linear-gradient(90deg, #3b82f6, #6366f1);
}

input[type="range"]::-webkit-slider-thumb {
  @apply appearance-none w-6 h-6 bg-white rounded-full border-2 border-blue-500 cursor-pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.1);
}

input[type="range"]::-webkit-slider-thumb:active {
  box-shadow: 0 0 0 8px rgba(59, 130, 246, 0.2);
}

input[type="text"] {
  @apply border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500;
}
</style>
