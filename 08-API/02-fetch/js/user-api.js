const API_URL = "https://66d9d3e34ad2f6b8ed562855.mockapi.io/api/v1";

const getAllUsers = async () => { // promice'leri cozmek icin await kullaniyoruz. callback'e gerek kalmaayacak. Bu sayede then kullanmamiza gerek kalmiyor. fetch kullanılan fonksıyonu mutlaka async olarak isaretlemeliyiz.
	const res = await fetch(`${API_URL}/users`); // fetch ile bilgileri cekiyoruz, await ile bilgilerin gelmesini bekliyoruz.
	if (!res.ok) throw new Error(res.message); // if(!res.ok) hata varsa demektir. hata varsa hata mesaji ver diyor
	const data = await res.json(); // ikinci then icin de res.json() yapiyoruz. json'da promice dondurur ve basina await koymaliyiz.
	return data;
};

const getUserById = async (id) => {
	const res = await fetch(`${API_URL}/users/${id}`);
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

const deleteUser = async (id) => {
	const res = await fetch(`${API_URL}/users/${id}`, {
		method: "delete",
	}); //fetch'in ikinci parametresi method'dur. method yazmazsak default olarak GET olur.
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

const createUser = async (user) => {
	const res = await fetch(`${API_URL}/users`, {
		method: "post",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

const updateUser = async (id, user) => {
	const res = await fetch(`${API_URL}/users/${id}`, {
		method: "put",
		body: JSON.stringify(user),
		headers: {
			"Content-Type": "application/json",
		},
	});
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
};

export { getAllUsers, getUserById, deleteUser, createUser, updateUser };