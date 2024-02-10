var computerImageModal = document.getElementById('computer-image-modal');
var computerImageElement = document.getElementById('computer-image-element')
var username = localStorage.getItem('logged-in-username');
document.getElementById("username-label").innerHTML = "Istifadeci adi" + ":" + username;
function onComputerImageSelected(path) {
    computerImageModal.style.display = 'block';
    computerImageElement.src = path;

}

window.addEventListener('click', function (event) {
    if (event.target == computerImageModal) {
        computerImageModal.style.display = 'none';
    }

});
function onNewComputer() {
    localStorage.setItem('updateMode', 'false');
    window.location.href = 'save-computer.html';
}
var computersTbodyElement = document.getElementById('computers-tbody');
var computersArray = [];
loadComputers();

function onDelete(computerId) {


    if (confirm("Silinme tesdiq edilsin ?")) {
        for (let index = 0; index < computersArray.length; index++) {
            const c = computersArray[index];
            if (c.id == computerId) {
                computersArray.splice(index, 1);
                break;
            }

        }
        localStorage.setItem('computers', JSON.stringify(computersArray));
        loadComputers();
    }
}
function loadComputers() {
    var computersJSON = localStorage.getItem('computers');
    computersArray = JSON.parse(computersJSON);

    var computersArrayTwo = [];

    for (let index = 0; index < computersArray.length; index++) {
        const c = computersArray[index];
        if (c.username == username) {
            computersArrayTwo.push(c);
        }

    }
    computersArray = computersArrayTwo;

    addComputersToTable(computersArray);
}
function onEdit(computerId) {
    localStorage.setItem('computerId', computerId);
    localStorage.setItem('updateMode', 'true');
    window.location.href = "save-computer.html";
}
function onLogout() {
    localStorage.removeItem('logged-in-username');
    window.location.href = 'login.html';
}
function onSearch(event) {
    var searchText = event.target.value.toLowerCase();
    searchFunction(searchText);
}
function loadComputersForSearch(computersArray) {
    addComputersToTable(computersArray);
}
function addComputersToTable(computersArray) {
    var computerstbodyHtml = "";
    for (let index = 0; index < computersArray.length; index++) {
        const c = computersArray[index];
        computerstbodyHtml += "<tr>";
        computerstbodyHtml += "<td>" + c.id + "</td>";
        computerstbodyHtml += "<td>" + c.brand + "</td>";
        computerstbodyHtml += "<td>" + c.model + "</td>";
        computerstbodyHtml += "<td>" + c.ram + "</td>";
        computerstbodyHtml += "<td> <img class='computer-image'  src='" + c.imagePath + "'onclick='onComputerImageSelected(\"" + c.imagePath + "\")' ></td>";
        computerstbodyHtml += "<td><button class='btn btn-danger' onclick='onDelete(" + c.id + ")' >Sil</button>";
        computerstbodyHtml += "<button class='btn btn-primary'  onclick='onEdit(" + c.id + ")'>Redakte</button></td>";
        computerstbodyHtml += "</tr>";
    }
    computersTbodyElement.innerHTML = computerstbodyHtml;
}

function searchFunction(searchText) {

    console.log(searchText);
    var computersArrayForSearch = [];
    for (let index = 0; index < computersArray.length; index++) {
        const c = computersArray[index];
        if ((c.brand + c.model + c.id).toLowerCase().includes(searchText))
            computersArrayForSearch.push(c);
    }
    loadComputersForSearch(computersArrayForSearch);
}

function esasSehifeChange(event) {
    event.preventDefault()
    window.location.replace('index.html')
}

function shopping(event) {
    event.preventDefault()
    window.location.replace('shopping.html')
}
