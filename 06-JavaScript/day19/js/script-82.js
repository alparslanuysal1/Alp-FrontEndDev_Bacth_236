import { countries } from "../data/countries.js";

const txtSearch = document.getElementById("txtSearch");
const lstResult = document.getElementById("lstResult");
let timer = null;

txtSearch.addEventListener("input", (e) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
        console.log(Math.random()); // fonksiyonu kac kere calistirdigimizi gormek icin bunu yazdik
        const filteredData = filterCountries(e.target.value);
        setResults(filteredData);
    }, 700)
    
})

const filterCountries = (val) => {
    if (!val) return [];    
    const filteredData = countries.filter((item) => {
        const countryName = item.name.common.toLowerCase();
        return countryName.includes(val.toLowerCase());
    })
    return filteredData;
};

const setResults = (items) => {
    lstResult.innerHTML = ""
    items.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name.common;
        lstResult.appendChild(li);
    });

    lstResult.style.display = "none";
    if (items.length > 0){
        lstResult.style.display = "block";
    };

};