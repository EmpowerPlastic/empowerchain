<script setup lang="ts">
import type { MaterialProperty } from "@/types/GraphqlSchema";
import {
  findPlasticTypeInMaterial,
  stripPlasticTypeFromMaterial,
  prettifyCardProperty,
} from "@/utils/utils";

interface Props {
  materials: MaterialProperty[][];
  label: string;
}
defineProps<Props>();
</script>
<template>
  <div>
    <h2 class="details-label">{{ label }}</h2>
    <div v-for="(material, index) in materials" :key="`material-${index}`">
      <h3>{{ findPlasticTypeInMaterial(material)?.value }}</h3>
      <ul class="list-disc ml-6">
        <li
          v-for="property in stripPlasticTypeFromMaterial(material)"
          :key="property.key"
          class="text-title14"
        >
          {{ prettifyCardProperty(property) }}
        </li>
      </ul>
    </div>
  </div>
</template>

