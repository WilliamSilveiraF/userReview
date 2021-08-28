function animate(obj, initVal, lastVal, duration) {
    
    let startTime = null;

    let currentTime = Date.now();

    const step = (currentTime ) => {

        if (!startTime) {
            startTime = currentTime;
        }

    const progress = Math.min((currentTime - startTime) / duration, 1);

    obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

    if (progress < 1) {
        window.requestAnimationFrame(step);
    }
    };
    window.requestAnimationFrame(step);
}
let text1 = document.getElementById('0101');
let text2 = document.getElementById('0102');
let text3 = document.getElementById('0103');

const load = () =>{
    animate(text1, 0, 10000, 1200);
}