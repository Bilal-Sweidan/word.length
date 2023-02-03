let text = document.querySelector("[name='text']");
let B = document.getElementById('inbutton');
let scr = document.getElementById('screen');
B.onclick = function (){
    let word = text.value;
    scr.innerHTML = word.length;
};