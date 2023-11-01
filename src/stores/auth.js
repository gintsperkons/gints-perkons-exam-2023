import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  // STATE VARIABLES
  state: () => ({
    user: {
      name: "Gints Kristaps",
      surname: "Pērkons",
      code: "IT21011",
      favorite_songs: localStorage.favorite_songs ?? [],
    },
    authenticated: false,
  }),
  getters: {
    is_authenticated() {
        return localStorage.is_authenticated ?? this.user.authenticated;
    },
    getFavoriteSongs() {
      return this.user.favorite_songs;
    },
  },

  actions: {
    setUserData(name, surname, code) {
      this.user.name = name;
      this.user.surname = surname;
      this.user.code = code;
    },
    authenticate(email, password) {
      const correctEmail = "gintskristaps.perkons@va.lv";
      const correctPassword = "123456";
      if (email === correctEmail && password === correctPassword) {
        this.user.authenticated = true;
        localStorage.is_authenticated = true;
      }
    },
    logout() {
      localStorage.clear();
      this.user.authenticated = false;
      window.location.href = "/login";
    },
    toggleFavorite(songID) {
      const index = this.user.favorite_songs.indexOf(songID);
      if (index === -1) {
        this.user.favorite_songs.push(songID);
      } else {
        this.user.favorite_songs.splice(index, 1);
      }
      localStorage.favorite_songs = this.user.favorite_songs;
    },
  },
});
