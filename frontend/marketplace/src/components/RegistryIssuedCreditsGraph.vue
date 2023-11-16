<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
</script>
<template>
  <div class="w-full h-[400px]">
    <Line
      :data="{
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#00C131',
            borderColor: '#FFFFFF',
            data: [40, 39, 10, 40, 39, 80, 40],
            pointRadius: 5,
            borderWidth: 0.6,
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
