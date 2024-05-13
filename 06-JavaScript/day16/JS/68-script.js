import {countries} from "../../day14/data/countries.js";

console.log(countries[227].name.common); // Turkey

// setOptions Function
const setOptions = ()=>{

    let options = "";

    for(let country of countries){
        // console.log(country.name.common);
        options += `<option value="${country.ccn3}">${country.name.common}</option>`;

    }

    document.getElementById("countriesSelect").innerHTML = options;

}

setOptions();

// getCountry Function
const getCountry = (code) => {

    let filteredCountry = countries.filter((country) => country.ccn3 == code);
    // console.log(filteredCountry[0].capital.join(" - ")); // Oranjestad
    // console.log(Object.keys(filteredCountry[0].currencies).join(" - ")); // AWG
    // console.log(Object.values(filteredCountry[0].languages).join(" - ")); // Dutch - Papiamento
    return filteredCountry[0];
}

getCountry(533);

// fillTable Function
const fillTable = (country) => {

    let capitalCity = country.capital.join(" - ");
    let currencies = Object.keys(country.currencies).join(" - ");
    let languages = Object.values(country.languages).join(" - ");
    let area = country.area;
    let mapLink = `<a href="https://maps.google.com/maps?q=${country.latlng.toString()}" target="_blank">Go To Map</a>`;

    document.querySelector("#countriesTable tr:nth-child(1) td").innerHTML = capitalCity;
    document.querySelector("#countriesTable tr:nth-child(2) td").innerHTML = currencies;
    document.querySelector("#countriesTable tr:nth-child(3) td").innerHTML = languages;
    document.querySelector("#countriesTable tr:nth-child(4) td").innerHTML = area;
    document.querySelector("#countriesTable tr:nth-child(5) td").innerHTML = mapLink;
}

fillTable(getCountry(533));

// Seçilen ülkenin verilerini tabloya aktarıyoruz.
document.querySelector("#countriesSelect").onchange = (event) => {
    let countryCode = event.target.value;
    let country = getCountry(countryCode);
    fillTable(country);
}