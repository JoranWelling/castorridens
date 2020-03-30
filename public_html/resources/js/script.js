var video = document.getElementById("myVideo");
var audio = document.getElementById("myAudio");
var btn = document.getElementById("myBtn");

function myFunction() {
  if (video.paused) {
    video.play();
    audio.play();
    btn.innerHTML = "No more party time";
    btn.style.display = "none"  
    video.style.display = "flex"
  } else {
    video.pause();
    audio.pause();
    btn.innerHTML = "Party time!";
    video.style.display = "none"
  }
}