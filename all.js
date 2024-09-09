
document.addEventListener("DOMContentLoaded", () => {

/*validating the contact form*/
function validateContactForm() {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

if (!name || !email || !message) {
alert("All fields are must be filled!");
return false;
}

if (!validateEmail(email)) {
alert("Please enter a valid email address.");
return false;
}

alert("Thank you for filling the form ..We appreciate your support.... !");
return true;
}

/*validating the reservation form*/
function validateReservationForm() {
const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const date = document.getElementById('date').value;
const time = document.getElementById('time').value;
const guests = document.getElementById('guests').value;

if (!name || !email || !date || !time || !guests) {
alert("All fields are required to filled!");
return false;
}

if (!validateEmail(email)) {
alert("Please enter a valid email address.");
return false;
}

alert("Reservation booked successfully!We are waiting for you.Hope you will enjoy our food");
saveReservationToLocalStorage(name, email, date, time, guests);
return true;
}

/* Email validation codes*/ 
function validateEmail(email) {

email = String(email).trim();

/* Checking  if the email contains an symbol*/
const atIndex = email.indexOf('@');
if (atIndex < 1) {
return false; 
}

/* Checking if the email contains a '.' symbol after the '@'*/

const dotIndex = email.indexOf('.', atIndex);
if (dotIndex <= atIndex + 1) {
return false; 
}

/* Check if there's text after the last '.'*/
if (dotIndex === email.length - 1) {
return false; 
}


return true;
}


/*Saving reservation to local storage*/
function saveReservationToLocalStorage(name, email, date, time, guests) {
const reservation = {
name,
email,
date,
time,
guests
};
localStorage.setItem("reservation", JSON.stringify(reservation));
}

/*Loading saved reservation from local storage*/
function loadReservationFromLocalStorage() {
const reservation = localStorage.getItem("reservation");
if (reservation) {
const data = JSON.parse(reservation);
document.getElementById('name').value = data.name;
document.getElementById('email').value = data.email;
document.getElementById('date').value = data.date;
document.getElementById('time').value = data.time;
document.getElementById('guests').value = data.guests;
}
}

/*Attaching event listeners to forms*/
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
contactForm.addEventListener('submit', (event) => {
if (!validateContactForm()) {
event.preventDefault();  // Prevent form submission if validation fails
}
});
}

const reservationForm = document.querySelector('#reservation form');
if (reservationForm) {
reservationForm.addEventListener('submit', (event) => {
if (!validateReservationForm()) {
event.preventDefault();  
}
});

/*Loading reservation data*/
loadReservationFromLocalStorage();
}

/*Adding some effect for our hero section*/
const hero = document.querySelector('.hero');
if (hero) {
hero.style.opacity = 0;
window.addEventListener('load', () => {
hero.style.transition = 'opacity 2s';
hero.style.opacity = 1;
});
}
});
s