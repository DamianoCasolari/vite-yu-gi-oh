
<script>
import SiteHeader from "./components/SiteHeader.vue";
import SiteMain from "./components/SiteMain.vue";
import { store } from "./store.js";

export default {
  data() {
    return store
  },
  components: {
    SiteHeader,
    SiteMain
  },
  mounted() {
    store.fetchCards(store.API_URL);
    // this.$nextTick(() => { this.store.cards.forEach(object => (object.visible = true)); })
  }
}
</script>

<template>
  <SiteHeader />
  <SiteMain />
</template>


<style lang="scss" scoped></style>
