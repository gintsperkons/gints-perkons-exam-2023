<script>
import { useAuthStore } from "@/stores/auth";

export default {
    data() {
        return {
            useAuthStore,
            state: {
                    editing: false,
                    editBtnText: "Edit Form",
                    user: {
                        name: useAuthStore().user.name,
                        surname: useAuthStore().user.surname,
                        code: useAuthStore().user.code
                    }
                }
        }
    },
    methods :{
        editCall : function () {
            this.state.editing = !this.state.editing;
            this.state.editBtnText = this.state.editing ? "Cancel" : "Edit Form";   
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
            <button v-if="state.editing" id="btn-save">Save Form</button>
        </div>
    </div>
    <form>
        <div class="wrapper-input">
            <label>NAME</label>
            <input v-if="state.editing" id="input-name" :value="state.user.name" />
            <p    v-if="!state.editing" id="txt-name">{{useAuthStore().user.name}}</p>
        </div>
        <div class="wrapper-input">
            <label>SURNAME</label>
            <input v-if="state.editing"  id="input-surname" :value="state.user.surname" />
            <p  v-if="!state.editing" id="txt-surname">{{useAuthStore().user.surname}}</p>
        </div>
        <div class="wrapper-input">
            <label>STUDENT CODE</label>
            <input v-if="state.editing"  id="input-code" :value="state.user.code" />
            <p v-if="!state.editing"  id="txt-code">{{useAuthStore().user.code}}</p>
        </div>
        <div class="wrapper-songs">
            <label>FAVORITE SONGS</label>
            <ul>
                <li>
                    <img id="img-album" src="https://i.scdn.co/image/ab67616d00001e02980c9d288a180838cd12ad24" />
                    <div class="song-info">
                        <p id="txt-song" class="song-name">DEEP (feat. Nonô)</p>
                        <p id="txt-artist" class="song-artists">Example</p>
                    </div>
                </li>
            </ul>
            <div id="txt-empty" class="empty">NO SONGS FOUND</div>
        </div>
    </form>
</div>
</template>