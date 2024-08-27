import { students } from "./students.js";
document
    .querySelector("#tblStudents tbody")
    .addEventListener("click", (e) => {
        // tbody icinde uzerine tiklanan her elementin click olayinin burada yakalanmasi eventPropogation sayesinde olur. herhangi bir event üzerinde gerçekleşen olayın parentlara dogru yayılmasına denir.


        if(!e.target.classList.contains("btn-del")) return; /* contains = iceriyor mu demek */
        const name = e.target.closest("tr").children[1].textContent;
        
        const res = confirm(`${name} isimli kaydi silmek istediginizden emin misiniz?`)

        if(res){
            
        }
    });

const loadData = () => {
    let html = "";
    students.forEach((student, index) => {
        html += `<tr>
                    <td>${index + 1}</td>
                    <td>${student.name}</td>
                    <td>${student.point}</td>
                    <td>
                        <button class="btn btn-danger btn-sm btn-del">🗑️</button>
                    </td>
                </tr>`;
    });
    const tbody = document.querySelector("#tblStudents tbody");
    tbody.innerHTML = html;
};
loadData();