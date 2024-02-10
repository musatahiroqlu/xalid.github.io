var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

var users = [];
users = JSON.parse(localStorage.getItem('users'));

function onLogin(event) {
   event.preventDefault();
   var loginSuccess = false;
   var username = usernameInput.value;
   var password = passwordInput.value;
   console.log(username + password);
   for (var i = 0; i < users.length; i++) {
      if (users[i].username == username && users[i].password == password) {
         loginSuccess = true;
         break;
      }
   }
   if (loginSuccess) {

      localStorage.setItem('logged-in-username', username);
      window.location.href = 'computers.html';
   } else { alert("Ugursuz"); }

}
function oncreateAccount(event) {
   event.preventDefault()
   window.location.href = 'create-account.html';
}
function ChangeEsas(event) {
   event.preventDefault()
   window.location.replace('index.html')
}