import { countries } from "../data/countries.js";

const txtSearch = document.getElementById("txtSearch");
const lstResult = document.getElementById("lstResult");
let timer = null; /* tusa her bastigimizda buraya bir deger tanimliyoruz. timer bir degisken adi*/

txtSearch.addEventListener("input", (e) => { /* textboxta yazilan seyi e ile aliyoruz */
    if (timer) clearTimeout(timer); /* timer in ici doluysa var olan timer i temizle. asagida yazdigim 700ms icerisinde yeni bir input ogesi girersem timeri sifirla. Bu sayede yazmam bitince son timer kalacak ve back end den (API) bir tane talepte bulunacak */

    timer = setTimeout(() => { 
        console.log(Math.random()); // fonksiyonu kac kere calistirdigimizi gormek icin bunu yazdik
        const filteredData = filterCountries(e.target.value); /* texbox'ta yazilan seyi e'ye almistik burada da ilgili fonksiyona gonderiyoruz */
        setResults(filteredData);
    }, 700)
    
})

const filterCountries = (val) => {
    if (!val) return []; /* val'e bir sey gelmiyorsa bos dizi getir. yani listede daha once aradigimiz ulkeler gorunmesin */
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