<script>
import MyCard from "./MyCard.vue";
import { store } from "../store.js";

export default {
    name: "SiteMain",
    components: {
        MyCard,
    },
    data() {
        return {
            store

        }
    }
}
</script>

<template>
    <main>
        <div class="container-lg">
            <div class="search_section">search</div>
            <div class="main_section">
                <div class="counter_card">{{ "Found " + store.cards.length + " cards" }} </div>
                <div class="row row-cols-sm-2 row-cols-md-4 row-cols-xl-6 p-4">
                    <MyCard :card="card" v-for="card in store.cards" />
                </div>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped></style>