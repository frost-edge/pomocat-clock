let minutes = 25;
let seconds = 0;
let running = false;
let tally = 0;

window.onload = displayTimer;

displayTally();

function countDown() {
  if (minutes >= 0 && running) {
    displayTimer();

    seconds--;

    if (seconds < 0) {
      minutes--;
      seconds = 59;
    }
    if (minutes >= 0)
      setTimeout("countDown()", 1000);
    else {
      pause();
      tally++;
      displayTally();
      playSound();
    }
  }
}

function start() {
  if (!running) {
    running = true;
    countDown();
  }
}

function pause() {
  if (running)
    running = false;
}

function reset() {
  minutes = 25;
  seconds = 0;
  pause();
  displayTimer();
  stopSound();
}

function displayTimer() {
  if (seconds < 10)
    document.getElementById('timer').innerHTML = minutes + ":" + "0" + seconds;
  else
    document.getElementById('timer').innerHTML = minutes + ":" + seconds;
}

function displayTally() {
  let p = document.getElementById('tally');
  p.innerHTML = "Tally: " + tally;
}


function playSound(){
  var audio = document.createElement('audio');
  audio.id = "audio";
  audio.style.display = "none";
  audio.src = 'sound.mp3';
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);
}

function stopSound() {
    let audio = document.getElementById('audio');
    if(audio !== null)
      audio.remove();
}
