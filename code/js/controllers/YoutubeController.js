;(function() {
  "use strict";

  var BaseController = require("BaseController");

  var controller = new BaseController({
    siteName: "YouTube",
    playPause: ".ytp-play-button",
    playNext: ".ytp-next-button",
    playPrev: ".ytp-prev-button",
    mute: ".ytp-mute-button",
    like: "#menu > ytd-menu-renderer > #top-level-buttons > ytd-toggle-button-renderer:nth-child(1)",
    dislike: "#menu > ytd-menu-renderer > #top-level-buttons > ytd-toggle-button-renderer:nth-child(2)",

    playState: ".ytp-play-button[aria-label='Pause']",
    song: ".title.ytd-video-primary-info-renderer",
    album: "#playlist .title",
    hidePlayer: true
  });

  controller.getArtData = function() {
    var params = (new URL(controller.doc().location)).searchParams;

    var vid = params.get("v");
    if (vid !== null) {
      return "https://img.youtube.com/vi/" + vid + "/default.jpg";
    }
    return null;
  };

  controller.formatSeconds = function(totalSeconds) {
    var hours   = Math.floor(totalSeconds / 3600);
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    if (hours === 0) { hours = ""; }

    if (hours !== "" && hours   < 10) { hours   = "0"+hours; }
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours + (hours ? ":" : "") + minutes + ":" + seconds;
  };

  controller.getCurrentTimeData = function() {
    var player = controller.doc().getElementById("movie_player");
    var duration = player && player.getCurrentTime ? player.getCurrentTime() : null;

    if (duration !== null)
    {
      return controller.formatSeconds(duration);
    }
    return null;
  };

  controller.getDurationData = function() {
    var player = controller.doc().getElementById("movie_player");
    var duration = player && player.getDuration ? player.getDuration() : null;

    if (duration !== null)
    {
      return controller.formatSeconds(duration);
    }
    return null;
  };

})();
