let min = 0;
let sec = 0;
// Adding event-listner to start button
document.getElementById("start").addEventListener('click', function () {
    document.getElementById("start").disabled = true;
    timer = true;
    countdown();
});
// Adding event listner to stop button
document.getElementById("stop").addEventListener('click', function () {
    timer = false;
    clearTimeout(myTimeout);
    document.getElementById("start").disabled = false;
});
// Adding event listner to reset button
document.getElementById("reset").addEventListener('click', function () {
    timer = false;
    clearTimeout(myTimeout);
    min = 0;
    sec = 0;
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("start").disabled = false;
});
// countdown function to start count when invoked
function countdown() {
    if (timer) {
        sec++;

        if (sec == 60) {
            min++;
            sec = 0;
        }
    }
    let second = sec;
    let minute = min;
    if (sec < 10) {
        second = "0" + second;
    }
    if (min < 10) {
        minute = "0" + minute;
    }
    document.getElementById("sec").innerHTML = second;
    document.getElementById("min").innerHTML = minute;
    myTimeout = setTimeout(countdown, 1000);
}
