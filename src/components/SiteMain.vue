<script>
import MyCard from "./MyCard.vue";
import SelectInput from "./SelectInput.vue";
import { store } from "../store.js";

export default {
    name: "SiteMain",
    components: {
        MyCard,
        SelectInput

    },
    data() {
        return {
            store

        }

    },
    computed: {
        NumberCards() {

            return store.cards.filter(card => card.visible).length;

        }
    },
    methods: {
        searchCards() {
            this.store.cards.forEach(object => {
                if (this.store.searchSelect == "") {
                    object.visible = true;
                } else if (object.archetype == this.store.searchSelect) {
                    object.visible = true;
                } else {
                    object.visible = false;
                }
            });
        }
    }
}
</script>

<template>
    <main>
        <div class="container-lg">
            <SelectInput @search="searchCards()" />
            <div class="main_section">
                <div v-if="!store.loaded" class="counter_card text-center">
                    <div class="hourglass2">&#8987</div>
                </div>
                <div class="counter_card" v-else>{{ "Found " + NumberCards + " cards" }}
                </div>
                <div v-if="store.loaded" class="row row-cols-sm-2 row-cols-md-4 row-cols-xl-6 p-4">
                    <MyCard v-show="card.visible" :card="card" v-for="card in store.cards" />
                </div>
            </div>
        </div>
    </main>
</template>



<style lang="scss" scoped></style>