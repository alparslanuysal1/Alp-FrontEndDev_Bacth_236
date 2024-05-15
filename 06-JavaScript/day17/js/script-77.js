import { students } from "./students.js";
document.querySelector("#tblStudents tbody").addEventListener("click", (e) => {
    // tbody icinde uzerine tiklanan her elementin click olayinin burada yakalanmasi eventPropogation sayesinde olur.
    if (e.target.classList.contains("btn-del")) {
        deleteRow(e.target);
    } else {
        toggleRow(e.target);
    }
});
const deleteRow = (btn) => {
    const row = btn.closest("tr");
    const name = row.children[1].textContent;
    const res = confirm(
        `${name} isimli kaydi silmek istediginizden emin misiniz?`
    );
    if (res) {
        row.remove();
    }
};

const toggleRow = (el) => {
    el.closest("tr").classList.toggle("table-info");
};
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