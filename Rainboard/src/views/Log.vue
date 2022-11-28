<script setup lang="ts">
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import axios from 'axios'
</script>

<script lang="ts">
import realAliases from "../data/aliases.json"

export default {
    data() {
        return {
            names: [],
            players: [],
            aliases: realAliases
        };
    },
    methods: {
        async getLog() {
            try {
                let log = this.$route.params.slug;
                let URI = 'http://logs.tf/api/v1/log/' + log;
                const response = await axios.get(URI);
                console.log(response.status);
                this.names = response.data.names;
                this.players = response.data.players;

                for (let i = 0; i < this.names.length; i++) {
                    let classInfo = this.players[this.names[i]];
                    console.log(classInfo);
                    console.log(i);
                }

            } catch (error) {
                console.log(error);
            }


        }
    },
    created() {
        this.getLog();
    }
}
</script>

<template>
    <Header/>
    <main class="mb-auto">
        <div class="p-4 mx-auto max-w-screen-md text-center">
            <p class="my-6">
                Log {{ $route.params.slug}}
            </p>
            <div id="json-response" v-if="names">
                {{ names }}
            </div>
        </div>
    </main>
    <Footer/>
</template>