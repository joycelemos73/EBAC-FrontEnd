const form = document.getElementById('form-save-contact');
const contactNames = [];
const contactEmails = [];
const contactNumbers = [];

let rows = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    addsRow();
    updatesTable();
})

function addsRow() {
    const inputContactName = document.getElementById('contact-name');
    const inputContactEmail = document.getElementById('contact-email');
    const inputContactNumber = document.getElementById('contact-number');

    if(contactNames.includes(inputContactName.value)) {
        alert(`The name ${inputContactName.value} has already been added!`);
    } else {
        contactNames.push(inputContactName.value);
        contactEmails.push(inputContactEmail.value);
        contactNumbers.push(inputContactNumber.value);

        let row = '<tr>';
        row += `<td>${inputContactName.value}</td>`;
        row += `<td>${inputContactEmail.value}</td>`;
        row += `<td>${inputContactNumber.value}</td>`;
        row += '</tr>';
    
        rows += row;
    }

    inputContactName.value = '';
    inputContactEmail.value = '';
    inputContactNumber.value = '';
}

function updatesTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = rows;
}