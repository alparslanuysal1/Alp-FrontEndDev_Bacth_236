let nots = [
   "Kitap oku",
    "Yürüyüşe cik",
    "Spor yap",
    "Ders calis",
    "Sinava calis",
    "oyun oyna keyfine bak" 
];

let listEl = document.querySelector(".liste");

let row = "";

for (let not of nots) {
    row += `<li>${not}</li>`
};

listEl.innerHTML = row;

let inputEl = document.getElementById("newInput");

document.getElementById("addBtn").addEventListener("click", () => {
    
    if (!inputEl.value) {
        inputEl.focus();
        return;
    }

    listEl.innerHTML += `<li>${inputEl.value}</li>`
    nots.push(inputEl.value);
    showResult(nots);
    inputEl.value = "";
    inputEl.focus();

});

document.getElementById("removeBtn").addEventListener("click", () => {

    if (nots.length === 0) {
        alert("Liste bos")
    }
    else {
        listEl.value = "";
        nots.pop();
        
        listEl.removeChild(listEl.lastElementChild);
    }
});

const showResult = (elements) => {
    if(nots.length === 0){
        document.getElementById("cardMenu").innerHTML = `<b>Silinecek notsunuz kalmadi</b>`
    }
    else {
        document.getElementById("cardMenu").innerHTML = elements.join(" --> ")
    }
}