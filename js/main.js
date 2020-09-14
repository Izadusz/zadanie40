let button = document.getElementById('btn-wyswietl-dane');
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let phone = document.getElementById('phone');
let pName = document.getElementById('p-name');
let pSurname = document.getElementById('p-surname');
let pPhone = document.getElementById('p-phone');


button.onclick = function () {
    pName.innerText = name.value;
    pSurname.innerText = surname.value;
    pPhone.innerText = phone.value;
};