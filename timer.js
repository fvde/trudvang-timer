var timerActive = true;
var timerId;
var timePassed;

function startTimer(duration, display) {
    var timer = duration;
    update(timer, display);
    timerId = setInterval(function () {
        update(timer, display);
        timePassed = parseInt(timer, 10)

        if (!timerActive) {
            return
        }

        if (--timer < 0) {
            display.textContent = "00:00"
            document.getElementById('alert').play();
        }
    }, 1000);
}

function start() {
    newTimer(document.getElementById('breathDuration').value);
}

function newTimer(duration) {
    clearInterval(timerId);
    timerActive = true;
    var display = document.querySelector('#time');
    startTimer(duration, display);
};

function add(seconds) {
    var statusBeforeAction = timerActive;
    newTimer(timePassed + seconds)
    timerActive = statusBeforeAction;
}

function remove(seconds) {
    var statusBeforeAction = timerActive;
    newTimer(timePassed - seconds)
    timerActive = statusBeforeAction;
}

function pause() {
    timerActive = !timerActive;
    var button = document.getElementById('pauseButton');

    if (timerActive) {
        button.textContent = "Pause";
    } else {
        button.textContent = "Continue";
    }
};

function update(timer, display) {
    var minutes = parseInt(timer / 60, 10)
    var seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;
}