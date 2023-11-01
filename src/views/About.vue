<script>
import { useAuthStore } from "@/stores/auth";
import allSongs from "/src/data/songs.js";

export default {
    data() {
        return {
            useAuthStore,
            allSongs,
            state: {
                    editing: false,
                    editBtnText: "Edit Form"
                }
        }
    },
    methods :{
        editCall : function () {
            this.state.editing = !this.state.editing;
            this.state.editBtnText = this.state.editing ? "Cancel" : "Edit Form";   
        },
        saveToAuth : function () {
            useAuthStore().user.name = document.getElementById("input-name").value;
            useAuthStore().user.surname = document.getElementById("input-surname").value;
            useAuthStore().user.code = document.getElementById("input-code").value;
            this.editCall();
        }
    },
    computed:{
        allFavorites(){
            return this.allSongs.filter(song => useAuthStore().getFavoriteSongs.includes(song.id));
        }
    }
}   
</script>
<template>
   <div id="about-view">
    <div class="wrapper-header">
        <h1>ABOUT ME</h1>
        <div class="settings">
            <button id="btn-edit"  :class="{ active: state.editing }" @click="editCall"> {{ state.editBtnText }}</button>  
            <button v-if="state.editing" id="btn-save" @click="saveToAuth">Save Form</button>
        </div>
    </div>
    <form>
        <div class="wrapper-input">
            <label>NAME</label>
            <input v-if="state.editing" id="input-name" :value="useAuthStore().user.name" />
            <p    v-if="!state.editing" id="txt-name">{{useAuthStore().user.name}}</p>
        </div>
        <div class="wrapper-input">
            <label>SURNAME</label>
            <input v-if="state.editing"  id="input-surname" :value="useAuthStore().user.surname" />
            <p  v-if="!state.editing" id="txt-surname">{{useAuthStore().user.surname}}</p>
        </div>
        <div class="wrapper-input">
            <label>STUDENT CODE</label>
            <input v-if="state.editing"  id="input-code" :value="useAuthStore().user.code" />
            <p v-if="!state.editing"  id="txt-code">{{useAuthStore().user.code}}</p>
        </div>
        <div class="wrapper-songs">
            <label>FAVORITE SONGS</label>
            <ul v-if="useAuthStore().getFavoriteSongs.length > 0">
                <li v-for="item in allFavorites">
                    <img id="img-album" :src="item.album.images[0].url" />
                    <div class="song-info">
                        <p id="txt-song" class="song-name">{{item.name}}</p>
                        <p id="txt-artist" class="song-artists">{{ item.artists.map(artist => artist.name).join(", ") }}</p>
                    </div>
                </li>
            </ul>
            <div  v-if="!useAuthStore().getFavoriteSongs.length > 0" id="txt-empty" class="empty">NO SONGS FOUND</div>
        </div>
    </form>
</div>
</template>