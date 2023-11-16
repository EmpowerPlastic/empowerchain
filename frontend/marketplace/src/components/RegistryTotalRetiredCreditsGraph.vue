<script setup lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "vue-chartjs";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
</script>
<template>
  <div class="w-full">
    <Bar
      :data="{
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'August',
          'September',
          'October',
          'November',
        ],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#00C131',
            borderColor: '#FFFFFF',
            borderRadius: 10,
            barThickness: 5,
            data: [40, 29, 10, 10, 39, 50, 90, 40, 39, 30, 39, 10, 40],
          },
        ],
      }"
      :options="{
        scales: {
          xAxes: [
            {
              barPercentage: 0.1,
            },
          ],
        },
      }"
    />
  </div>
</template>
