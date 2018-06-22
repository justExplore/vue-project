<template>
    <div>
        <Typing />
        <DrawHeart/>
    </div>
</template>

<script>
    import Typing from '../components/Typing';
    import DrawHeart from "../components/DrawHeart";

    export default {
        name: "index",
        components: {
            DrawHeart,
            Typing
        }
    }
</script>

<style scoped>

</style>
