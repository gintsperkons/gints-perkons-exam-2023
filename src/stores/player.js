import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', {
    state: () => ({
        playlist   : [],
        now_playing: {}, // SONG OBJECT
    }),
    getters: {
        getNextSong(){
            const index = this.playlist.findIndex(song => song.id === this.now_playing.id);
            const playlistSize = this.playlist.length;
            if (index === playlistSize - 1) {
                return this.playlist[0];
            }
            return this.playlist[index + 1];
        },
        getPreviousSong() {
            const index = this.playlist.findIndex(song => song.id === this.now_playing.id);
            const playlistSize = this.playlist.length;
            if (index === 0) {
                return this.playlist[playlistSize - 1];
            }
            return this.playlist[index - 1];
        },
        getNowPlayingSongId() {
            return this.now_playing?.id;
        },
        getNowPlaying() {
            return this.now_playing;
        },
        getNowPlayingAlbumID() {
            return this.now_playing?.album?.id ?? null;
        },
        getNowPlayingSongName() {
            return this.now_playing?.name ?? '';
        },
        getNowPlayingSongImage() {
            return this.now_playing?.album?.images[1].url ?? '';
        },
        getNowPlayingArtists() {
            return this.now_playing?.artists?.map(artist => artist.name).join(', ');
        },
        getNowPlayingSongPreview() {
            return this.now_playing?.preview_url;
        }
    },
    actions: {
        setPlaylist(songs) {
            this.playlist = songs;
        },
        setNowPlaying(song) {
            this.now_playing = song;
        },
        resetNowPlaying() {
            this.now_playing = {};
        },
    }
})
