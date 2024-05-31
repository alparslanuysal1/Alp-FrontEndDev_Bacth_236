import { fetchAllCars } from "./car-api.js";

const renderCars = (cars) => {
	let strCars = "";

	cars.forEach((item) => {
		strCars += `<div class="col">
                        <div class="card">
                            <img src="" alt="" class="card-img-top">
                            <div class="card-body">
                                Mercedes
                            </div>
                        </div>
                    </div>`;
	});

    return strCars;


};

const init = () => {
	fetchAllCars((data) => {
        const lstCars = document.getElementById("lstCars");
		const strCars = renderCars(data);
        lstCars.innerHTML = strCars;

	});
};

init();
