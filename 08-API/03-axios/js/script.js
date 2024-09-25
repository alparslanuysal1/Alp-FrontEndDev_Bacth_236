import { getShows } from "./api.js";

const txtSearch = document.getElementById("txtSearch");
const lstShows = document.getElementById("lstShows");
let timer = null; // arama cubuguna her harf girisinde api'den istekte bulunmamasi icin istekleri geciktirecegiz

const loadShows = async (q) => { // tv showlarini yazdiran fonksiyon
    console.log("Hello")
	const shows = await getShows(q); // api'den tv show'larini ceken fonksiyonu diger js dosyasindan cagirdik. asenkron bir fonksiyon oldugu icin yukariyi da async diye isaretleyip burayi await yaptik
	let strShows = "";

	shows.forEach((item) => {
		const { name, image } = item.show; // destructring yaptik

		/* ${image?.medium || " "} => Bu ifadeyle medium yoksa sunu yerlestir demis oluyorum */
		strShows += `
            <div class="col">
                <div class="card h-100">
                    <img src="${image?.medium || " "}" alt="${name}" class="card-img-top">
                    <div class="card-body">
                        <h3 class="card-title">${name}</h3>
                    </div>
                </div>
            </div>`;
	});
	lstShows.innerHTML = strShows;
};

txtSearch.addEventListener("input", (e) => { // yazilan aramalari alan fonksiyon
	const { value } = e.target; //destructring yaptik
	if (value.length < 3) { // en az 3 karakter sarttir.
		lstShows.innerHTML = ""; // aramayi silerken div'in icini bosaltiyoruz ki sayfadaki gorunenler de silinsin
		return;
	}

	// Onceden bir girdi varsa asagidaki setTimeout calisir ve timer dolu olacagi icin akis if dongusune girer ve timer'i sifirlariz. her girdi de setTimeout calisir timer dolar. Fakat biz yeni girdi gondermezsek akis if dongusune tekrar gelemeyecegi icin setTimeout sifirlanamaz ve son girdigimiz sorguyu 500 ms sonra back end'e gonderir.
	if (timer) {
		clearTimeout(timer);
	} // timer doluysa timer'i sifirla

	//biz girdi gonderdikce timer sifirlanacagi icin loadShows calismayacak.
	//Biz veri girmeyi birakinca son girdigimiz veriyle 500ms sonra loadShows calisacak
	timer = setTimeout(() => {
		loadShows(value);
	}, 500);
});