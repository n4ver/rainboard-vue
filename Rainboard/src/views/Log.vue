<script setup lang="ts">
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
    <Header/>
    <main class="mb-auto">
        <div class="p-4 mx-auto max-w-screen-md text-center">
            <p class="my-6">
                Log {{ $route.params.slug}}
            </p>
        </div>
    </main>
    <Footer/>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
