const toggle = document.getElementById('toggle');
const open = document.getElementById('open');
const close = document.getElementById('close');
const modal = document.getElementById('modal');

//Show Nav Bar
toggle.addEventListener('click', () => document.body.classList.toggle('show-nav'));

//Show Modal
open.addEventListener('click', () => modal.classList.add ('modal-show'));


//Close Modal
close.addEventListener('click', () => modal.classList.remove('modal-show'));

//close modal on click outside

window.addEventListener('click', e => e.target == modal ? modal.classList.remove('modal-show') : false)