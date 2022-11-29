<script setup lang="ts">
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Error from "../components/Error.vue"
</script>

<script lang="ts">
export default {
    data() {
        return {
            errorCode: "404",
            errorMessage: "We couldn't find the page you're looking for."
        }
    }
}
</script>

<template>
    <Header />
    <Error />
    <Footer />
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
