const lblPassword = document.getElementById("lblPassword");
const btnCopy = document.getElementById("btnCopy");
const lblCharLength = document.getElementById("lblCharLength");
const rangeCharLength = document.getElementById("rangeCharLength");
const chkUppercase = document.getElementById("chkUppercase");
const chkLowercase = document.getElementById("chkLowercase");
const chkNumbers = document.getElementById("chkNumbers");
const chkSymbols = document.getElementById("chkSymbols");
const lblStrength = document.getElementById("lblStrength");
const btnGenerate = document.getElementById("btnGenerate");
btnGenerate.addEventListener("click", () => {
    // Input degerlerini al
    const passwordLength = Number(rangeCharLength.value);
    const hasUpperCase = chkUppercase.checked;
    const hasLowerCase = chkLowercase.checked;
    const hasNumber = chkNumbers.checked;
    const hasSymbol = chkSymbols.checked;
    const passwordParams = {
        passwordLength, // passwordLength: passwordLength, (objelerde key ve value ayni ise uzun uzun yazmaya gerek yok)
        hasUpperCase,
        hasLowerCase,
        hasNumber,
        hasSymbol,
    };
    // Validation yap
    const resValidation = validateInputs(passwordParams);
    if (!resValidation) return;
    // Sifreyi olustur
    const password = generatePassword(passwordParams);
    lblPassword.textContent = password;
    // Strength olustur
    const strengthPoint = getStrengthPoint(passwordParams);
    const strengthText = getStrengthText(strengthPoint);
    lblStrength.innerHTML = strengthText;
});
rangeCharLength.addEventListener("change", (e) => { // change oldugunda su islemleri yap diye handler tanimliyorum
    lblCharLength.textContent = e.target.value;
});
btnCopy.addEventListener("click", () => { 
    copyToClipboard(lblPassword.textContent);
});
const copyToClipboard = async (text) => { 
    // BROWSER WEB API
    try {
        await navigator.clipboard.writeText(text); // navigatorun clipboard ina eris ve writeText ile  (Text) ikopyala
    } catch (err) {
        console.log(err);
    }
};
const getStrengthText = (point) => {
    let strengthText = "";
    let strengthClass = "weak";
    // round, ceil, floor
    for (let i = 0; i < Math.round(point / 10); i++) { // bolum ondalikli cikarsa diye Math.round kullandik.
        strengthText += "&#9929;";
    }
    if (point > 70) {
        // strong
        strengthClass = "strong";
    } else if (point > 30) {
        // normal
        strengthClass = "normal";
    }
    return `<span class="${strengthClass}">${strengthText}</span>`;
};
const getStrengthPoint = (params) => {
    const point =
        (Number(params.hasUpperCase) +
            Number(params.hasLowerCase) +
            Number(params.hasNumber) +
            Number(params.hasSymbol) * 2) *
        params.passwordLength;
    return point;
};
const generatePassword = (params) => {
    const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+=-{}[]|,.:;";
    let allChars = "";
    let password = "";
    // Kullanicin sectigi chackbox lara gore sifre icin birer tane karakter olusturuluyor
    if (params.hasUpperCase) {
        password += getRandomChar(upperCaseLetters);
        allChars += upperCaseLetters;
    }
    if (params.hasLowerCase) {
        password += getRandomChar(lowerCaseLetters);
        allChars += lowerCaseLetters;
    }
    if (params.hasNumber) {
        password += getRandomChar(numbers);
        allChars += numbers;
    }
    if (params.hasSymbol) {
        password += getRandomChar(symbols);
        allChars += symbols;
    }
    // Sifrenin kalan kismi olusturuluyor
    for (let i = 0; i < params.passwordLength - password.length; i++) {
        password += getRandomChar(allChars);
    }
    // Ayni siralamada olusan sifreyi karistiriyor
    password = randomSort(password);
    return password;
};
const randomSort = (str) => {
    const rndStr = str
        .split("") // diziye cevirir, sort kullanmak icin
        .sort((a, b) => Math.random() - 0.5) // Math yazarak rasgele karisitirdik. negatif deger gelirse buyukten kucuge, pozitif deger gelirse kucukten buyuge siralar. 0 gelirse hic karistirmadan oldugu gibi birakir. hicbir sayi yazmazsak sort methodu aski kod tablosuna gore kucukten buyuge dogru siralar
        .join(""); // tekrar string e cevirir
    return rndStr;
};
const getRandomChar = (chars) => {
    //"ABCDEFGHIJKLMNOPQRSTUVWYZ"
    // Math.random() *  (max-min+1) + min   //0-27
    const randomIndex = Math.floor(Math.random() * chars.length);
    const char = chars.charAt(randomIndex); // charAt boyle bir komut var
    return char;
};
const validateInputs = (params) => {
    if (params.passwordLength < 4) {
        alert("Character length must be greater than 3");
        return false;
    }
    if (
        !params.hasUpperCase &&
        !params.hasLowerCase &&
        !params.hasNumber &&
        !params.hasSymbol
    ) {
        alert("Password must include at least a letter, a number or a symbol");
        return false;
    }
    return true;
};
