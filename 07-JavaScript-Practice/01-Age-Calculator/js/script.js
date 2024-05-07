
function calculateAge() {
    // 1- input ve result elementlerini sec ve degiskene ata
    const txtDay = document.querySelector("#txtDay");
    const txtMonth = document.querySelector("#txtMonth");
    const txtYear = document.querySelector("#txtYear");
    const lblDays = document.querySelector("#lblDays");
    const lblMonths = document.querySelector("#lblMonths");
    const lblYears = document.querySelector("#lblYears");

    const currentDateTime = new Date(); // Mevcut tarih ve saati alir

    // 2- inputlarin degerlerini al ve degiskene ata
    const birthday = Number(txtDay.value);
    const birthmonth = Number(txtMonth.value);
    const birthyear = Number(txtYear.value);

    //falsy values: null, undefined, empty, false, 0

    // 3- input degerlerini kontrol et (validation)
    if(!birthday || birthday < 1 || birthday > 31){ // !day ==> ture olmayan degerlerin hepsini ifade etmek icin boyle yazdik!
        alert("invalid day");
        return; // fonksiyonda return gorulen yerde asagiya devam etmez. en basa donup durur.
    }

    if(!birthmonth || birthmonth < 1 || birthmonth > 12){ 
        alert("invalid month");
        return; 
    }

    const currentYear = currentDateTime.getFullYear();

    if (!birthyear || birthyear < currentYear - 150 || birthyear > currentYear) {
        alert("invalid year");
        return;
    }

    const birthDate = new Date(birthyear, birthmonth-1, birthday); // Js aylari 0'dan baslattigi icin aydan 1 cikardik
    
    if (birthDate > currentDateTime) {
        alert("Invalid Birthdate");
        return;
    }

    // 4- hesapla

    const currentMonth = currentDateTime.getMonth() + 1; 
    const currentDay = currentDateTime.getDate(); // Ayin gununun verir.

    let ageYears = currentYear - birthyear;
    let ageMonths = currentMonth - birthmonth
    let ageDays = currentDay - birthday;

    if (ageDays < 0) {
        ageMonths--;
        ageDays += 30;
        
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }


    // 5- sonucu goster

    lblYears.textContent = ageYears;
    lblMonths.textContent = ageMonths;
    lblDays.textContent = ageDays;
}