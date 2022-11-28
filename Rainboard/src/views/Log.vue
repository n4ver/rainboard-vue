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
            steamID: Array(),
            names: Array(),
            players: Array(),
            aliases: realAliases,
            isFetching: true,
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
                this.steamID = Object.keys(this.names);
                this.players = response.data.players;

                // for (let i = 0; i < this.names.length; i++) {
                //     let classInfo = this.players[this.names[i]];
                //     console.log(classInfo);
                //     console.log(i);
                // }

            } catch (error) {
                console.log(error);
            }
            this.isFetching = false;


        }
    },
    computed: {
        GetTeamWithAliases() {
            let red:string[] = [];
            let blu:string[] = [];
            for (let i = 0; i < this.steamID.length; i++) {
                if (this.aliases[this.steamID[i] as keyof typeof this.aliases]) { // long for removing TS error
                    if (this.players[this.steamID[i]].team == "Red")
                        red.push(this.aliases[this.steamID[i] as keyof typeof this.aliases]); // can be shortened to same statement as below
                    if (this.players[this.steamID[i]].team == "Blue")
                        blu.push(this.aliases[this.steamID[i] as keyof typeof this.aliases]); // but changed this.aliases to this.names
                } else {
                    if (this.players[this.steamID[i]].team == "Red")
                        red.push(this.names[this.steamID[i]]);
                    if (this.players[this.steamID[i]].team == "Blue")
                        blu.push(this.names[this.steamID[i]]);
                }
            }
            return [{"Red":red}, {"Blue":blu}];
        }
    },
    created() {
        this.getLog();
    }
}
</script>

<template>
    <Header/>
    <main class="mb-auto bg-[#00ff00] h-screen" v-if="!isFetching">
        <div class="p-4 mx-auto max-w-screen-md text-center">
            <p class="my-6">
                Log {{ $route.params.slug}}
            </p>
            <div id="json-response" v-if="steamID">
                <div class="flex flex-horizontal gap-12 justify-center text-lg uppercase">
                    <h1>Red</h1>
                    <h1>Blu</h1>
                </div>
                <div class="flex justify-center align-center gap-8">
                    <div v-for="team in GetTeamWithAliases">
                        <div v-for="player in team.Red">
                            <p class="text-left">{{ player }}</p>
                        </div>
                        <div v-for="player in team.Blue">
                            <p class="text-right">{{ player }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer/>
</template>