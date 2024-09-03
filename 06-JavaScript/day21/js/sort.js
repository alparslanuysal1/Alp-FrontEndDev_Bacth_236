/*
SORT FUNCTION
If the result is negative, a is sorted before b.
If the result is positive, b is sorted before a.
If the result is 0, no changes are done with the sort order of the two values.
*/

// arr = [5, 3, 7, 10 ....]

const numberSortASC = (arr) => {
	//5,3 -> 3,5
	//7,10 -> 7,10
	return arr.sort((a, b) => a - b); // --kucukten buyuge siralama. --sort functionun islemine a-b gibi negatif, pozitif veya sifir sonuc getirecek bir islem yazilir. negatif sonuc gelirse a yi once siralar, pozitif sonuc gelirse ikinci parametreyi yani b yi once siralar
};

const numberSortDESC = (arr) => {
	//5,3 ->  5,3
	//7,10 -> 10,7
	return arr.sort((a, b) => b - a); // --buyukten kucugge siralama 
};

const stringSortASC = (arr) => {
	return arr.sort((a, b) => a.localeCompare(b)); // stringlerde turkce karakterleri de kontrol edebilen bir fonksiyon var. tarayicinin destekledigi tum dillerdeki karakterleri dogru siralar. --Bu kucukten buyuge
};

const stringSortDESC = (arr) => {
	return arr.sort((a, b) => b.localeCompare(a)); //-- Bu da buyukten kucuge
};

const randomMix = (arr) => {
	console.log(Math.random() - 0.5);

	return arr.sort(() => Math.random() - 0.5); // -0.5 sayesinde bazen pozitif bazen negatif gelir. bazen kucukten buyuge bazen buyukten kucuge siralar
};
export {
	numberSortASC,
	numberSortDESC,
	stringSortASC,
	stringSortDESC,
	randomMix,
};