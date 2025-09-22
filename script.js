let cnt = 0;
function easy() {
    const circle = document.getElementById('circle');
    circle.className = 'crcl';
    circle.style.animation = 'movement 17s linear forwards';
}
function medium() {
    const circle = document.getElementById('circle');
    circle.className = 'crcl';
    circle.style.animation = 'movement 14s linear forwards';
}
function hard() {
    const circle = document.getElementById('circle');
    circle.className = 'crcl';
    circle.style.animation = 'movement 10s linear forwards';
}
function count() {
    cnt += 1;
    document.getElementById('score').innerText = cnt;
}
function restart() {
    window.location.reload();
}


