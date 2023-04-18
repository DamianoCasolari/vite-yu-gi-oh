<script>

import { store } from "../store.js";
export default {


    name: "SelectInput",
    data() {


        return {
            store
        }
    }
}
</script>


<template>
    <select class="form-select search_section" v-model="store.searchSelect" @change="$emit('search')">
        <option value="">Choose an archetype</option>
        <option value="Alien">Alien</option>
        <option value="Umi">Umi</option>
        <option value="Noble Knight">Noble Knight</option>
        <option value="Unchained">Unchained</option>
    </select>
</template>


<style lang="scss" scoped></style>