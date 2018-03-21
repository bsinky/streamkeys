;(function() {
  "use strict";

  var BaseController = require("BaseController");

  var controller = new BaseController({
    siteName: "Amazon Music",
    playPause: ".playbackControlsView .playButton",
    playNext: ".playbackControlsView .nextButton",
    playPrev: ".playbackControlsView .previousButton",
    like: ".playbackControlsView .thumbsUpButton",
    dislike: ".playbackControlsView .thumbsDownButton",

    playState: ".playbackControlsView .playerIconPause",
    song: ".playbackControlsView .trackTitle",
    artist: ".playbackControlsView .trackArtist",
    art: ".albumArtWrapper img",
    hidePlayer: true
  });

  controller.getSongProgress = function () {
    var remainingPercentEl = controller.doc().querySelector("#dragonflyTransport > div > div.rightSide > section > span.slider.scrubberBar > span > span:nth-child(3)");
    var progress = 0;

    if (remainingPercentEl) {
      var stylll = remainingPercentEl.style;

      if (stylll) {
        var widdd = remainingPercentEl.style.width;

        if (widdd) {
          progress = 100 - Math.round(Number(widdd.substring(0, widdd.length - 1)));
        }
      }
    }

    return progress;
  };
})();
