<script>
import { useAuthStore } from "@/stores/auth";
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
    computed: {
        isButtonDisabled() {
            return this.email === '' || this.password === '' || this.password.length < 6;   
        }
    },
    methods:{
        login() {
            useAuthStore().authenticate(this.email, this.password);
        }
    }
}
</script>
        


<template>
    <div id="login-view">
        <form class="login-form">
            <div class="wrapper-logo">
                <img src="@/assets/logo.svg" />
                <div>KRAKEN.FM</div>
            </div>
            <input id="input-email" placeholder="E-mail" v-model="email" />
            <input id="input-password" placeholder="Password" v-model="password" />
            <button id="btn-submit" :disabled="isButtonDisabled" @click="login">LOGIN</button>
        </form>
    </div>
</template>




