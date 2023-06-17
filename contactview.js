var personList = {};
window.addEventListener('DOMContentLoaded',(event) => {
    personList = getDataFromLocalStorage();
    createHtmlTable();
    localStorage.removeItem('editContact');
});


const getDataFromLocalStorage = () => {
    alert("inside local storage");
    return localStorage.getItem('personList') ?
    JSON.parse(localStorage.getItem('personList')) : [];
}

const createHtmlTable = () => {
    alert("inside create html table");
    alert(personList.length);
    const tableHeader = "<th>NAME</th><th>ADDRESS</th><th>STATE</th><th>CITY</th><th>ZIP</th><th>PHONE_NUMBER</th><th>Actions</th>";
    
    if(personList.length == 0){
        return;
    }

    let innerHtml = `${tableHeader}`;
    for(const personData of personList){
        innerHtml = `${innerHtml}
        <tr>
        <td>${personData._name}</td>
        <td>${personData._address}</td>
        <td>${personData._state}</td>
        <td>${personData._city}</td>
        <td>${personData._zip}</td>
        <td>${personData._phoneNumber}</td>
        <td>
            <img src="AddressBookApp/delete icon.png "  onClick="deleteContact(this)" alt="delete logo">
            <img src="AddressBookApp/edit icon.png"  onClick="editContact(this)" alt="edit logo">
        </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}


const deleteContact = (value) => {
    alert("delete getting called");
    alert(value);
    
}


const editContact = () => {
    alert("edit geting called");
}