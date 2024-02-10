var usernameInput = document.getElementById("username");
var passwordInput = document.getElementById("password");

function onCreateAccount(event) {
   event.preventDefault();
   var username = usernameInput.value;
   var password = passwordInput.value;
   console.log(username + password);

   var user = {};
   user.username = username;
   user.password = password;

   var users = JSON.parse(localStorage.getItem('users'));

   var usernameExists = false;
   for (let index = 0; index < users.length; index++) {
      const u = users[index];
      if (u.username == username) {
         usernameExists = true;
         break;
      }
   }
   if (usernameExists) {
      alert('Bu istifadeci adi artiq qeydiyyat olunub!')
   } else {
      var id = 0;
      for (let index = 0; index < users.length; index++) {
         const u = users[index];
         if (u.id > id) {
            id = u.id;
         }
      }
      id++;
      user.id = id;


      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));
      alert('Istifadeci ugurla qeydiyyat olundu!');
      window.location.href = 'login.html';
   }


}
function onLogin(event) {
   event.preventDefault()
   window.location.href = 'login.html';
}

function esasApar(event) {
   event.preventDefault()
   window.location.replace('index.html')
}