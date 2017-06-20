;(function() {
  "use strict";

  var BaseController = require("BaseController"),
      _ = require("lodash");

  var multiSelectors = {
    play: [null, ".now-playing-bar button[class*=play]"],
    pause: [null, ".now-playing-bar button[class*=pause]"],
    playPause: ["#play-pause", null],
    playNext: ["#next", ".now-playing-bar button[class*=skip-forward]"],
    playPrev: ["#previous", ".now-playing-bar button[class*=skip-back]"],
    playState: ["#play-pause.playing", ".now-playing-bar button[class*=pause]"],
    iframe: ["#app-player", null],
    like: [".thumb.up", null],
    dislike: [".thumb.down", null],
    song: ["#track-name", ".now-playing-bar div div [href*='/album/']"],
    artist: ["#track-artist", ".now-playing-bar div div [href*='/artist/']"],
    art: [null, "div.now-playing-bar__left div.cover-art-image.cover-art-image-loaded"]
  };

  var controller = new BaseController({
    siteName: "Spotify"
  });

  controller.checkPlayer = function() {
    var that = this;
    var useNewPlayer = window.location.hostname === "open.spotify.com";
    var selectorIndex = useNewPlayer ? 1 : 0;

    _.each(multiSelectors, function(value, key) {
      that.selectors[key] = value[selectorIndex];
    });

    if (useNewPlayer) {
      that.getArtData = function(selector) {
        if(!selector) return null;

        var dataEl = this.doc().querySelector(selector);

        var backgroundImage = window.getComputedStyle(dataEl)["background-image"];
        return backgroundImage.match(/url\(["|']?([^"']*)["|']?\)/)[1];
      };
    }
  };
})();
