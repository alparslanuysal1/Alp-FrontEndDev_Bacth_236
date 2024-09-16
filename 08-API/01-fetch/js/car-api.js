const API_URL = "https://carrental-v3-backend.herokuapp.com";
const fetchAllCars = (cb) => { // assenkron oldugu icin bu fonlsiyondan retunrla data cikamaz. Bu sebeple de callback yapiyoruz
    fetch(`${API_URL}/car/visitors/all`) // API bu asamada backend deki ilgili endpoint e requst(istek) gonderir.
        .then((res) => res.json()) // API dan donen cevap res icine gelir. res.json() ile donen cevap JSON formatina cevrilir ve sonraki then e aktariilr. Promice chain. fetch ve json fonksiyonlari birer promice'dir aslinda
        .then((data) => cb(data));
};
const fetchCarById = (id, cb) => {
    fetch(`${API_URL}/car/visitors/${id}`)
        .then((res) => res.json())
        .then((data) => cb(data));
};
export { fetchAllCars, fetchCarById };