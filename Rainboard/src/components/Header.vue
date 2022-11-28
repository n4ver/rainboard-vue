<script lang="ts">

export default {
  data(){
    return {
        error : "", // TODO: use error
        search : ""
    }
  },
  methods: {
    submit() {
        //if you want to send any data into server before redirection then you can do it here
        let log = ""
        const regex1 = /^(https:\/\/logs\.tf\/)(\d+)(#\d+)$/
        const regex2 = /^(https:\/\/logs\.tf\/)(\d+)(#)$/
        const regex3 = /^(https:\/\/logs\.tf\/)(\d+)$/
        if (regex1.test(this.search)) {
            log = regex1.exec(this.search)![2];
        }
        if (regex2.test(this.search)) {
            log = regex2.exec(this.search)![2];
        }
        if (regex3.test(this.search)) {
            log = regex3.exec(this.search)![2];
        }

      this.$router.push("/log/" + log);
    },
    validate() {
        const regex1 = /^(https:\/\/logs\.tf\/)(\d+)(#\d+)$/
        const regex2 = /^(https:\/\/logs\.tf\/)(\d+)(#)$/
        const regex3 = /^(https:\/\/logs\.tf\/)(\d+)$/

        this.error = "";
        let url = this.search;
        if (!url) {
            this.error.concat("Enter Log ID");
            return false;
        }
        else {
            if (!(regex1.test(url) || regex2.test(url) || regex3.test(url))) {
                this.error.concat("Invalid Log");
                return false;
            }
            return true;
        }
    },
    
  }
}
</script>

<template>
    <header>
            <div id="head" class="justify-center">
                <div id="head-wrapper" class="flex-none h-full w-full flex-nowrap">
                    <div id="nav-bar" class="flex items-center bg-gradient-to-r from-indigo-500 gap-4 h-16 px-1 uppercase">
                        <div id="search-wrapper" class="flex px-4 w-80">
                            <form id="search-bar" class="flex w-full" @submit="validate" autocomplete="off">
                                <div class="flex flex-row flex-nowrap bg-indigo-900 rounded-full min-h-full pl-2 w-full">
                                    <span class="flex flex-row flex-nowrap gap-2 items-center justify-center">
                                        <button type="submit" @click.stop.prevent="submit()">
                                            <svg viewBox="0 0 24 24" class="h-5 w-5">
                                                <path fill="white" d="M23.785 21.937L18.12 16.27a.554.554 0 0 0-.397-.163h-.616a9.683 9.683 0 0 0 2.362-6.348c0-5.363-4.346-9.709-9.71-9.709S.05 4.396.05 9.759s4.346 9.709 9.709 9.709a9.683 9.683 0 0 0 6.348-2.362v.616c0 .15.06.29.163.397l5.667 5.666c.22.22.574.22.794 0l1.054-1.054a.56.56 0 0 0 0-.794zM9.76 17.227c-4.126 0-7.468-3.342-7.468-7.468S5.633 2.29 9.759 2.29s7.468 3.342 7.468 7.468-3.342 7.468-7.468 7.468z"></path>
                                            </svg>
                                        </button>
                                    </span>
                                    <input type="text" v-model="search" id="search" style="background: none" required placeholder="Submit logs.tf URL..." class=" border-none outline-none text-white px-2 text-lg w-full"/>
                                </div>
                            </form>
                        </div>
                        <div id="nav-bar-inner" class="flex-auto gap-6 text-white">
                            <a href="/" title="Home" class="text-xl px-4 tracking-wider">Home</a>
                            <a href="/about" title="About" class="text-xl px-4 tracking-wider">About</a>
                            <a href="/stats" title="Tournament Statistics" class="text-xl px-4 tracking-wider">Stats</a>
                        </div>
                        <div id="login-bar" class="flex pr-4">
                            <a href="/login" title="Log in" class="text-xl text-indigo-900 tracking-wider">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
</template>