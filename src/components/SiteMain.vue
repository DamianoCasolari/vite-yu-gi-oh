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
            <select class="form-select search_section">
                <option value="Alien">Alien</option>
                <option value="Umi">Umi</option>
                <option value="NobleKnight">Noble Knight</option>
            </select>
            <div class="main_section">
                <div v-if="!store.loaded" class="counter_card text-center">
                    <div class="hourglass2">&#8987</div>
                </div>
                <div class="counter_card" v-else>{{ "Found " + store.cards.length + " cards" }}
                </div>
                <div v-if="store.loaded" class="row row-cols-sm-2 row-cols-md-4 row-cols-xl-6 p-4">
                    <MyCard :card="card" v-for="card in store.cards" />
                </div>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped></style>