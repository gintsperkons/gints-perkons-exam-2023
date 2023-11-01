<script>
export default {
    data() {
        return {
            links: [
                { text: 'SONGS', path: '/' },
                { text: 'ALBUMS', path: '/albums' },
                { text: 'ABOUT', path: '/about' }
            ]
        }
    }
}
</script>   
<template>
    <nav id="nav-main" class="wrapper-navigation">
        <ol>
            <li v-for="link in links" :key="link.path">
                <router-link :to="link.path">{{ link.text }}</router-link>
            </li>
        </ol>
    </nav>
</template>