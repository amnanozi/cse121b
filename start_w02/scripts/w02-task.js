/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = `Musitwa Abel`;
let currentYear = `currentYear`;
let profilePicture =`images/me.jpg`; 

/* Step 3 - Element Variables */
const nameElement = document.getElementById(`name`);
const foodElement = document.getElementById(`food`);
const yearElement = document.queryselector(`#year`);
const imageElement = document.getElementById(`src`);


/* Step 4 - Adding Content */

nameElement.innerHTML = `fullName`;
nameElement.innerHTML = `<strong> ${fullName}</strong>`;
nameElement.textContent = `currentYear`;
imageElement.setAttribute(`src`,profilePicture);
imageElement.setAttribute(`alt`,profilePicture);




/* Step 5 - Array */
let favoriteFood = ['matoke','posho','beans','rice','fish'];
foodElement.innerHTML = `favoriteFood`
let bestDish =`kalo`;
favoriteFood.push(`bestDish`);
foodElement.innerHTML += `<br>${favoriteFood}`;
console.log(favoriteFood.shift());
foodElement.innerHTML += `<br>${favoriteFood}`;
console.log(favoriteFood.pop());
foodElement.innerHTML += `<br>${favoriteFood}`;
