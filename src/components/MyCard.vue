<script>

export default {
    name: "MyCard",
    data() {
        return {}
    },
    props: {
        card: Object

    }
}
</script>
<template>
    <div class="col">
        <div class="single_card text-center">
            <div class="img_container">
                <img class="card-img-top" :src="card.card_images[0].image_url" :alt="card.name">
            </div>
            <div class="type">{{ card.archetype }}</div>
            <div class="m-2 title"> {{ card.name }}</div>
        </div>
    </div>
</template>


<style lang="scss" scoped></style>