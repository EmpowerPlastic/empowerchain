<script setup lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "vue-chartjs";
ChartJS.register(ArcElement, Tooltip, Legend);
</script>
<template>
  <div class="w-full h-[150px]">
    <Doughnut
      :data="{
        labels: ['Retired', 'Other'],
        datasets: [
          {
            backgroundColor: ['#00C131', '#666666'],
            data: [40, 20],
            borderWidth: [0, 0],
          },
        ],
      }"
      :options="{
        responsive: true,
        maintainAspectRatio: false,
      }"
    />
  </div>
</template>
