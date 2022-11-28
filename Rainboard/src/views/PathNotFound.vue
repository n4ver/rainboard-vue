<script setup lang="ts">
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
</script>

<template>
    <Header />
      <main>
        <section class="w-full flex items-center justify-center">
            <div class="text-center">
                <h1 class="text-6xl md:text-9xl font-medium">
                    404
                </h1>
                <div class="py-4 text-2xl md:text-3xl">
                    We couldn't find the page you're looking for.
                </div>
                <div class="py-4">
                    <a href="/" class="hover:underline">Back to the Homepage</a>
                </div>
            </div>
        </section>
      </main>
      <Footer />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
