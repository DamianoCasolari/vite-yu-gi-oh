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
        <option v-for="archetype in store.arrayArchetype" :value="archetype">{{ archetype }}</option>
    </select>
</template>


<style lang="scss" scoped></style>