const btn = document.getElementById('dark-mode');
const circle = document.querySelector('.circle');


btn.onclick = function(){
    document.body.classList.toggle('dark-theme')
    circle.classList.toggle('circle-active')
}









