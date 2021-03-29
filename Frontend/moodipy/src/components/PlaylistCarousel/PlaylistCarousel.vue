<template>
  <div playlist-carousel-wrapper>
    <carousel :items-to-show="3.5">
      <slide
        v-for="slide in 10"
        :key="slide"
        v-bind:id="'spotify-playlist' + slide"
      >
        <div @click="focusPlaylist($event)" id="bob">
          <playlist
            :playlist="playlists[slide - 1]"
            :appendIframe="appendIframeSrc"
          ></playlist>
        </div>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
    <iframe
      v-bind:src="iframeSrc"
      v-if="iframeSrc"
      width="700"
      height="250"
      frameborder="0"
      allowtransparency="true"
      allow="encrypted-media"
    ></iframe>
  </div>
</template>

<script>
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import Playlist from "../Playlist/Playlist.vue";

export default {
  name: "PlaylistCarousel",
  props: {
    playlists: Array,
  },
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
    Playlist,
  },
  data() {
    return {
      iframeSrc: "",
      currentFocus: undefined,
    };
  },
  methods: {
    appendIframeSrc(src) {
      let iframeURL = "https://open.spotify.com/embed/";

      // Split URL to get the 2nd half of the url
      // e.g. https://open.spotify.com/playlist/7fv7XLErqUC76qbOdnwuTe
      // we get '' and playlist/7fv7XLErqUC76qbOdnwuTe
      // that way we can concat the word 'embed' for the iframe
      const temp = src.split("https://open.spotify.com/");

      iframeURL = iframeURL + temp[1];

      this.iframeSrc = iframeURL;
    },
    focusPlaylist(e) {
      e.preventDefault();
      const domElements = Object.values(e.path);
      let playlistCanvasExist = false;
      let index = 0;
      for (let i = 0; i < domElements.length; i++) {
        if (domElements[i].id === "playlist-canvas") {
          playlistCanvasExist = true;
          index = i;
          break;
        }
      }

      if (playlistCanvasExist) {
        if(this.currentFocus){
          this.currentFocus.style = ''
        }
        domElements[index].style = "border: solid #6e41e2 2px";
        this.currentFocus = domElements[index]
      } else {
        return;
      }
    },
  },
};
</script>

<style scoped>
iframe {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#playlist-carousel-wrapper {
  display: grid;
  grid-template-columns: 1fr;
}
</style>

<style >
.carousel__prev,
.carousel__next {
  position: absolute;
  top: 85px;
}
</style>