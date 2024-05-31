const API_URL = "https://664e4047fafad45dfadf8961.mockapi.io/api/v1";

const getAllUsers = async () => {
	const res = await fetch(`${API_URL}/users`);
	if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
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
        method: "delete"
    })
    if (!res.ok) throw new Error("Something went wrong");
	const data = await res.json();
	return data;
 }

export { getAllUsers, getUserById, deleteUser };