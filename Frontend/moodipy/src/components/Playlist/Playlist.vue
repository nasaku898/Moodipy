<template>
  <div id="playlist-wrapper" @click="appendIframe(playlist.external_urls.spotify)">
    <div id="playlist-canvas">
      <img
        v-bind:src="playlist.images[0].url"
      />
      <p id="playlist-name">{{ playlist.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Playlist",
  props: {
    playlist: Object,
    appendIframe: Function,
  },
};
</script>

<style scoped>
img {
  width: 150px;
  height: 150px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-top: 10px;
}

#playlist-canvas:focus {
  border: solid #6e41e2 2px;
}

#playlist-wrapper {
  display: grid;
  grid-template-columns: 1fr;
}

#playlist-name {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 28px;
  color: #000000;
  text-overflow: ellipsis;
  overflow: hidden;
}
#playlist-canvas {
  background: rgba(0, 0, 0, 0.05);
  width: 200px;
  height:220px;
}
</style>