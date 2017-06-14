;(function() {
  "use strict";

  var BaseController = require("BaseController");

  new BaseController({
    siteName: "Ampache",
    play: ".jp-play[style*='block']",
    pause: ".jp-pause[style*='block']",
    playNext: ".jp-next",
    playPrev: ".jp-previous",
    mute: ".jp-mute",

    buttonSwitch: true,
    song: ".playing_title",
    artist: ".playing_artist"
  });
})();
