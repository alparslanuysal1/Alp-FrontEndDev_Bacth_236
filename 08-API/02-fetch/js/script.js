import {
	createUser,
	deleteUser,
	getAllUsers,
	getUserById,
    updateUser,
} from "./user-api.js";

const tblUsers = document.getElementById("tblUsers");
const tbodyUsers = tblUsers.querySelector("tbody");
const frmUser = document.getElementById("frmUser");
const txtFirstName = document.getElementById("txtFirstName");
const txtLastName = document.getElementById("txtLastName");
const txtEmail = document.getElementById("txtEmail");
const btnSubmit = document.getElementById("btnSubmit");

const addUser = async () => {
	const firstName = txtFirstName.value;
	const lastName = txtLastName.value;
	const email = txtEmail.value;

	const user = { /* javaScriptte key ve value ayni ise asagidaki gibi obje tanimlayabiliriz */
		firstName,
		lastName,
		email,
	};

	/* Yukaridaki girdilerle yeni bir kullanici yazdim ve asagidaki createUser(user) ile de back end'e gonderdim */

	await createUser(user);
	init();
	frmUser.reset();
};

const editUser = async (id) => { // edit butonuna bastigimizda back end'e baglanarak oradan gelen ilgili kaydin bilgilerini formdaki girdi cubuklarina dolduran fonksiyon
	const user = await getUserById(id);
	const { firstName, lastName, email } = user; // user'in icerisinden destructring yaptik
	txtFirstName.value = firstName;
	txtLastName.value = lastName;
	txtEmail.value = email;
};

const saveUser = async (id) =>{
    const firstName = txtFirstName.value;
	const lastName = txtLastName.value;
	const email = txtEmail.value;

	const user = {
		firstName,
		lastName,
		email,
	};
	
	/* Yukaridaki girdilerle kullaniciyi duzenledim ve asagidaki updateUser(user) ile de back end'e gonderdim */

	await updateUser(id, user);
	init();
	frmUser.reset();
	
	//Update butonuna bastigimiz zaman update islemi bitecek ve asagidaki kodlarla submit butonunun davranisini tekrar kullanici ekleme methoduna ve seklini de +Add'e geri getirecegiz
    frmUser.dataset.method = "create";
    btnSubmit.innerHTML = "➕ Add"
}

const renderUserList = (users) => {
	let strUsers = "";

	users.forEach((item, index) => {
		strUsers += `<tr>
                        <td>${index + 1}</td>
						<td><img src="${item.avatar}"></td>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.email}</td>
                        <td style="width:100px; text-nowrap">
                            <button class="btn btn-info btn-sm btn-edit" data-id="${
								item.id
							}">✍️</button>
                            <button class="btn btn-danger btn-sm btn-del" data-id="${
								item.id
							}">🗑️</button></td>
                    </tr>`;
	});
	return strUsers;
};

const init = async () => { //! Bu fonksiyon back end'den guncel kullanici listesini cekerek html'ye users'i yerle;tiriyor. Kullanici listesinde yaptihgimiz her islemden sonra bu fonksiyonu cagirarak sayfada gordugumuz listeyi guncellememiz lazim!!
	const users = await getAllUsers();
	const strUsers = renderUserList(users);
	tbodyUsers.innerHTML = strUsers;
};

init();

tbodyUsers.addEventListener("click", async (e) => {
	const userId = e.target.dataset.id; // bastigimiz satirdaki datasetin icindeki id'yi al ve onu userId isimli degiskene ata
	if (!userId) return;

	if (e.target.classList.contains("btn-del")) { // olayin oldugu yerin classlistinde btn-del varsa
		const res = confirm("Are you sure to delete?");
		if (!res) return;
		await deleteUser(userId); // deleteUser async oldugu icin awaitle bekletmemiz lazim. 
		init();
	}
	else if (e.target.classList.contains("btn-edit")) {
		editUser(userId); // gorevi: editlenecek kullanici bilgileriyle formu doldurmak
		window.scrollTo(0, 0);
		btnSubmit.innerHTML = "💾 Update";
		frmUser.dataset.method = "update"; // formun dataset'indeki methodu'u update yap.
		frmUser.dataset.id = userId; // formun dataset'indeki id'yi userId yap.
		/* Boylece html'deki formun data-method="create" data-id="" attribute'lerini degistirebilecegiz */
	}
});

frmUser.addEventListener("submit", (e) => {
	e.preventDefault(); // submit butonunun default davranisini once diyoruz
	const method = e.target.dataset.method; // e.target formu verir, cunku olay formda oluyor. dataset.method ise orada create mi var update mi var bunu verir. Yani o anda hangi methodu uyguluyorsa o gelir.
	const userId = e.target.dataset.id;

	if (method === "create") { // method eger create ise addUser()'i calistir. degilse saveUser()'i calistir
		addUser();
	} else {
        saveUser(userId)
	}
});