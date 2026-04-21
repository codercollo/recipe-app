<script setup lang="ts"></script>

<template>
  <header class="py-4 border-b">
    <nav class="flex container mx-auto px-4 items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" src="/icon-green.png" format="webp" alt="" />
        <span class="text-3xl font-bold">Nuxtcipes</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink href="/about">About</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>
