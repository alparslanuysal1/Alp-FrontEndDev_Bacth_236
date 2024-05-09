const indicator = document.querySelector("#indicator");
const indicatorLabel = indicator.querySelector("label");
const txtWeight = document.querySelector("#txtWeight");
const txtHeight = document.querySelector("#txtHeight");

function getBMI() {
	// input degerlerini al ve number a cevir
	const weight = Number(txtWeight.value);
	const height = Number(txtHeight.value);

    //console.log(weight, height)

	// degerleri kontrol et
	let isValid = true;
	txtWeight.parentElement.classList.remove("invalid");
	txtHeight.parentElement.classList.remove("invalid");

	if (!weight || weight <= 0 || weight > 500) {
		txtWeight.parentElement.classList.add("invalid");
		isValid = false;
	}

	if (!height || height <= 0 || height > 300) {
		txtHeight.parentElement.classList.add("invalid");
		isValid = false;
	}

	if (!isValid) return;

	// bmi degeri hesapla // bmi = kg / (m * m )
	const bmi = weight / (height / 100) ** 2;
  

	// indicator i set et
    const leftPosition = bmi > 50 ? 100 : bmi * 2;
    indicator.style.left = `${leftPosition}%`;
    indicatorLabel.textContent = bmi.toFixed(0);

    if(leftPosition>50){
        indicatorLabel.style.left = "-5px"
        indicatorLabel.style.transform = "translateX(-100%)"
    }
    else{
        indicatorLabel.style.left = "20px"
        indicatorLabel.style.transform = "translateX(0)"
    }



}



/*
    BMI degeri::
    0-18 arasinda ise Zayif   37%
    19-25 arasinda ise Normal  13%
    26-30 arasinda ise Fazla kilolu  10%
    31-50 arasinda ise Obez  40%
*/