;(function() {
  "use strict";

  var BaseController = require("BaseController");

  new BaseController({
    siteName: "mstream",
    playPause: ".play-pause-button",
    playNext: ".next-button",
    playPrev: ".previous-button",

    playState: ".play-pause-image[src*='pause']",
    song: ".title-text"
  });
})();
