<script setup lang="ts">
import { useLogto } from "@logto/vue";
import { onMounted, ref } from "vue";

const { fetchUserInfo } = useLogto();
const userDetails = ref();

onMounted(() => {
  getUserInfo();
});

const getUserInfo = async () => {
  const details = await fetchUserInfo();
  userDetails.value = details;
};
</script>
<template>
  <div class="p-5 md:px-[10%] min-h-[50vh] font-Inter">
    <h1 class="text-title18 md:text-title24 text-white mb-5">User Profile</h1>
    <label class="label" for="email">
      <span class="label-text text-white">Email</span>
    </label>
    <input
      id="email"
      type="text"
      placeholder="Email"
      :value="userDetails?.email"
      class="input input-info w-full bg-mediumGray text-white"
    />
    <label class="label" for="email">
      <span class="label-text text-white">Retirer name</span>
    </label>
    <input
      id="email"
      type="text"
      placeholder="Username"
      :value="userDetails?.username"
      class="input input-info w-full bg-mediumGray text-white"
    />
    <label class="label" for="email">
      <span class="label-text text-white">Retirer data</span>
    </label>
    <textarea
      id="email"
      type="text"
      placeholder="Retirer data"
      class="input input-info w-full bg-mediumGray"
    />
  </div>
</template>
