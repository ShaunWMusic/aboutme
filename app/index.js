import 'whatwg-fetch';

function toggleBody() {
  document.getElementById('displayAbout').classList.toggle('visible');
  document.getElementById('displayContact').classList.toggle('visible');
}

function displayModal() {
  document.getElementById('modal').classList.add('modal-visible');
}

function hideModal() {
  document.getElementById('modal').classList.remove('modal-visible');
}

const navlistener = document.getElementById('nav');
navlistener.addEventListener('click', toggleBody);

const btnlistener = document.getElementById('button');
btnlistener.addEventListener('click', displayModal);

const timeslistener = document.getElementById('fa-times');
timeslistener.addEventListener('click', hideModal);
