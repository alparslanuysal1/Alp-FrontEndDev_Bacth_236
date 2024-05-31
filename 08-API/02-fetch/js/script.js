import { deleteUser, getAllUsers } from "./user-api.js";


const tblUsers = document.getElementById("tblUsers");
const tbodyUsers = tblUsers.querySelector("tbody");


const renderUserList = (users) => {
	let strUsers = "";

	users.forEach((item, index) => {
		strUsers += `<tr>
                        <td>${index + 1}</td>
                        <td><img src="${item.avatar}" alt="${item.firstName}"></td>
                        <td>${item.firstName}</td>
                        <td>${item.lastName}</td>
                        <td>${item.email}</td>
                        <td><button class="btn btn-danger btn-sm btn-del" data-id="${item.id}">🗑️</button></td>
                    </tr>`;
	});
	return strUsers;
};



const init = async () => { 
    const users = await getAllUsers();  
    const strUsers = renderUserList(users);
    tbodyUsers.innerHTML = strUsers;
}


init();


tbodyUsers.addEventListener("click", async (e)=>{

    if(e.target.classList.contains("btn-del")){
        const userId = e.target.dataset.id;
        await deleteUser(userId)
        init()
    }
})