var button = document.getElementById("button"),
    animationMouthStart = document.getElementById("startMouth"),
    animationEyeStart1 = document.getElementById("startEye1"),
    animationEyeStart2 = document.getElementById("startEye2"),
    animationEyeStart3 = document.getElementById("eye3"),
    stop = false;

button.addEventListener('click', function() {
    animationMouthStart.beginElement();
    timeoutMouth();
    animationEyeStart1.beginElement();
    animationEyeStart2.beginElement();
    animationEyeStart3.style.opacity = 0;
    setTimeout(function() {
        animationEyeStart3.style.opacity = 1;
    }, 300);
    timeoutEye();

}, false);


function timeoutEye() {
    animationEyeStart3.style.opacity = 0;
    setTimeout(function() {
        animationEyeStart3.style.opacity = 1;
    }, 300);
    setTimeout(function() {
        animationEyeStart1.beginElement();
        animationEyeStart2.beginElement();
        timeoutEye();
    }, 3000);
}

function timeoutMouth() {
    setTimeout(function() {
        animationMouthStart.beginElement();
        timeoutMouth();
    }, 5000);
}
