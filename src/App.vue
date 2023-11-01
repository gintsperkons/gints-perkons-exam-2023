
<script>
import { useAuthStore } from "@/stores/auth";

export default {
    data() {
        return {
            useAuthStore
        }
    }
}
</script>


<template>
    <!--  HEADER  -->
    <Header v-if="useAuthStore().is_authenticated"></Header>
    <!--  HEADER END  -->

    <!--  BODY  -->
    <div id="section-body">
        <Navigation v-if="useAuthStore().is_authenticated"></Navigation>
        <router-view class="section-router"></router-view>
    </div>
    <!--  BODY END  -->

    <!--  PLAYER  -->
    <div id="section-player" v-if="useAuthStore().is_authenticated">
        <AudioPlayer />
    </div>
    <!--  PLAYER END  -->
</template>
