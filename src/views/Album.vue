<script>
import IconList from '@/components/icons/IconList.vue';
import IconGrid from '@/components/icons/IconGrid.vue';
import allSongs from "/src/data/songs.js";
import { usePlayerStore } from "@/stores/player";
export default {
    data() {
        return {
            allSongs,
            state: {
                grid: false
            }
        }

    },
    methods: {
        toggleGrid() {
            this.state.grid = true;
        },
        toggleList() {
            this.state.grid = false;
        },
        getSongText( number){
            if(number == 1){
                return number+" song"
            }
            return number+" songs"
        },
        selectAlbum(album){
            usePlayerStore().setPlaylist(album.songs)
            usePlayerStore().setNowPlaying(album.songs[0]);
        }
    },

    components: {
        IconGrid,
        IconList
    },
    computed: {
        nowPlayingAlbumID(){return usePlayerStore().getNowPlayingAlbumID},
        album() {
            let albums = {}
            allSongs.forEach(song => {
                if(!albums[song.album.id]){
                    albums[song.album.id] = {
                            name: song.album.name,
                            artists: [],
                            images: song.album.images,
                            year: song.album.release_date.split("-")[0],
                        songs: []
                    }
                }
                albums[song.album.id].songs.push(song)
                song.album.artists.forEach(artist => {
                    if (!albums[song.album.id].artists.findIndex(test => test.id == artist.id) > -1) {
                        albums[song.album.id].artists.push(artist)
                        
                    }
                });

            });
            console.log(albums)
            return albums
        }
    }
}
</script>
<template>
    <div id="album-view">
        <div class="wrapper-header">
            <h1>ALBUMS</h1>
            <div class="settings">
                <button id="btn-grid" @click="toggleGrid">
                    <IconGrid />
                </button>
                <button id="btn-list" @click="toggleList">
                    <IconList />
                </button>
            </div>
        </div>
        <ul id="list-albums" :class="{ grid: state.grid }">
            <li class="album" v-for="(value, key) in album" @click="selectAlbum(value)" :class="{active:   key==nowPlayingAlbumID}">
                <img id="img-album" :src="value.images[0].url" />
                <div class="album-info">
                    <h4 id="txt-album-name">{{value.name}}</h4>
                    <p id="txt-album-artists">{{ value.artists.map(artist => artist.name).join(", ") }}</p>
                    <div class="album-year">
                        <p id="txt-album-year">{{value.year}}</p>
                        <p id="txt-album-tracks">{{getSongText(value.songs.length)     }}</p>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>