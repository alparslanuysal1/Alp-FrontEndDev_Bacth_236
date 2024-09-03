import { numberSortASC, numberSortDESC, randomMix, stringSortASC, stringSortDESC } from "./sort.js";

const arrNumbers = [345, 1, 11, 3435, 112, 356, 2, 577, 11];
const arrStrings = [
	"John",
	"David",
	"Joseph",
	"Susan",
	"Michael",
	"Vedat",
	"Şeyma",
];

document.getElementById("btn1").addEventListener("click", () => {
	const sorted = stringSortASC(arrStrings);
	console.log(sorted);
});

document.getElementById("btn2").addEventListener("click", () => {
	const sorted = stringSortDESC(arrStrings);
	console.log(sorted);
});


document.getElementById("btn3").addEventListener("click", () => {
	const sorted = numberSortASC(arrNumbers);
	console.log(sorted);
});

document.getElementById("btn4").addEventListener("click", () => {
	const sorted = numberSortDESC(arrNumbers);
	console.log(sorted);
});


document.getElementById("btn5").addEventListener("click", () => {
	const sorted = randomMix(arrStrings);
	console.log(sorted);
});
