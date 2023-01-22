const depart = document.querySelector("#launch");
const bouton = document.querySelector("#start");
const coureurs = document.querySelector(".hidden");

bouton.addEventListener('click', () => {
  coureurs.classList.remove('hidden');
  launch.classList.add('coureurs');
})


// modification de la course des coureurs

let i = 0;
const marioo = document.querySelector(".marioo");

const interval = setInterval(() => {
  marioo.style.transform = `translateX(${i}px)`;
  i = i + 1.5;

  if (i >= window.innerWidth) {
    i = -100
  }

} );

// _______________________________________________________

let y = 0;
const bolt = document.querySelector(".bolt");

const interval2 = setInterval(() => {
  bolt.style.transform = `translateX(${y}px)`;
  y = y + 2.2

  if (y >= window.innerWidth) {
    y = -100
  }

} );

// _______________________________________________________

let z = 0;
const baha = document.querySelector(".baha");

const interval3 = setInterval(() => {
  baha.style.transform = `translateX(${z}px)`;
  z = z + 2

  if (z >= window.innerWidth) {
    z = -100
  }

} );

// _______________________________________________________

let x = 0;
const hihi = document.querySelector(".hihi");

const interval4 = setInterval(() => {
  hihi.style.transform = `translateX(${x}px)`;
  x = x + 1.7

  if (x >= window.innerWidth) {
    x = -100
  }

} );

// _______________________________________________________

let a = 0;
const non = document.querySelector(".non");

const interval5 = setInterval(() => {
  non.style.transform = `translateX(${a}px)`;
  a = a + 2.1

  if (a >= window.innerWidth) {
    a = -100
  }

} );

// _______________________________________________________

let c = 0;
const oui = document.querySelector(".oui");

const interval7 = setInterval(() => {
  oui.style.transform = `translateX(${c}px)`;
  c = c + 2

  if (c >= window.innerWidth) {
    c = -100
  }

} );

// _______________________________________________________