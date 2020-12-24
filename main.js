let show = document.querySelector('#burger-menu ul');
let menu = document.querySelector('span');
let hide = document.querySelector('span a');
let hide2 = document.querySelector('.container');
let hide3 = document.querySelector('.head div');


menu.addEventListener('click', open)

function open(e) {
    show.style.display = 'block';
    hide.style.display = 'none';
}

hide2.addEventListener('click', close)

function close(e) {
    show.style.display = 'none'
    hide.style.display = 'block'
}

hide3.addEventListener('click', close)

function close(e) {
    show.style.display = 'none'
    hide.style.display = 'block'
}