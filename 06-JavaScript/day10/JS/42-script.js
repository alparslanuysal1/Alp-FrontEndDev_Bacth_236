let numberInput = document.querySelector("#num");
let guessButton = document.querySelector(".btn-guess");
let startButton = document.querySelector(".btn-start");
let resultLabel = document.querySelector("#result");


const createRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
console.log(createRandomNumber(1, 100));

let randomNumber; // bunu global scope olarak tanimlamazsak farkli fonksiyonlarin icinde kullanamayiz.

const startGame = () => {
    randomNumber = createRandomNumber(1, 100);
    console.log(randomNumber);
    startButton.style.display = "none";
    numberInput.style.display = "inline";
    guessButton.style.display = "inline";

}


const guessNumber = () => {
    let num = Number(numberInput.value);
    if (num >= 1 && num <= 100 && Number.isInteger(num)) {
        if (num < randomNumber) {
            resultLabel.innerHTML = "Kucuk sayi girdiniz.";
        }
    
        else if (num > randomNumber) {
            resultLabel.innerHTML = "Buyuk sayi girdiniz.";
        }
        else {
            resultLabel.innerHTML = "Tebrikler! Bildiniz! Sayi: " + randomNumber;

            //dogru tahmin ettikten sonra oyunu bastan baslatmak icin
            startButton.style.display = "inline";
            numberInput.style.display = "none";
            guessButton.style.display = "none";
            
        }
        numberInput.value = ""; // inputun icini bosaltir.
        numberInput.focus(); // inputa odaklan diye bir fonksiyon var.
    }
    else {
        resultLabel.innerHTML = "Lutfen 1'den 100'e kadar bir tam sayi giriniz"

        numberInput.value = ""; // inputun icini bosaltir.
        numberInput.focus(); // inputa odaklan diye bir fonksiyon var.
    }

}

