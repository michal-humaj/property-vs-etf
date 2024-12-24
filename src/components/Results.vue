<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-4 text-gray-800">Porovnání výsledků</h2>

    <!-- Insights -->
    <p class="text-lg text-gray-700 mb-4">
      ETF je lepší investice. Aby se investice do nemovitostí vyplatila, museli byste ji koupit za méně než 4 000 000 Kč.
    </p>

    <!-- Chart -->
    <canvas id="results-chart" width="400" height="200"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

onMounted(() => {
  const ctx = document.getElementById('results-chart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Nemovitost', 'ETF'],
      datasets: [
        {
          label: 'Čistý majetek po 30 letech',
          data: [5200000, 4900000],
          backgroundColor: ['#27AE60', '#2D9CDB'],
        },
      ],
    },
  });
});
</script>
