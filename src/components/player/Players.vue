<template lang="html">
    <section>
        <h1>I'm the players page. This should be in a header componet...</h1>

        <ul>
            <li>Player yehh</li>
            <li>Player yehh</li>
            <li>Player yehh</li>
            <router-link :to="{ name: 'newPlayer'}" tag="li"><a>Player name</a></router-link>
        </ul>
    </section>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
