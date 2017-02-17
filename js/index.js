var videoStep = document.getElementById("video-step");
var video = document.getElementById("video");
videoStep.addEventListener("impress:stepenter", function() {
    video.play();
}, false);
videoStep.addEventListener("impress:stepleave", function() {
    video.pause();
    video.currentTime=0;
}, false);