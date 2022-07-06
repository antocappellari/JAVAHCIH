
const inputName = document.querySelector('#Name')
const inputemail = document.querySelector('#email')
const inputmessage = document.querySelector('#message')
const submit = document.querySelector('#Submitbtn')

submit.addEventListener('click',() => {
    console.log(inputName.value)
    console.log(inputemail.value)
    console.log(inputmessage.value)
    Swal.fire("Thank you for contacting us! We'll aswer you ASAP")
})

//Variables registro (User & Password)
var UserR = document.getElementById('#UserR');
var PasswordR = document.getElementById('#PasswordR');

//Local storage para Registro con click en boton Registro
Registerbtn.addEventListener('click',() => {
function store() {
    localStorage.setItem('UserR', UserR.value);
    localStorage.setItem('PasswordR', PasswordR.value);
    Swal.fire({
        title:"You've been registered",
        icon:"success"})
}})
//Variables Log in (User & Password)
var User = document.getElementById('#User');
var Password = document.getElementById('#Password');

//Control de Usuario y Contraseña ingresada versus registro con click de boton de login
Loginbtn.addEventListener('click',() => {
    function check() {
        var userstorage = localStorage.getItem('#UserR');
        var passwordstorage = localStorage.getItem('#PasswordR');
                   
            if(User.value == userstorage || Password.value == passwordstorage) {
                Swal.fire("You've been registered");
            }else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'You are not a registered user!',
                  });
            }
        }
})






        

