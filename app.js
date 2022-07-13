
const inputName = document.querySelector('#Name')
const inputemail = document.querySelector('#email')
const inputmessage = document.querySelector('#message')
const submit = document.querySelector('#Submitbtn')

submit.addEventListener('click',() => {
    console.log(formsubmit)
    Swal.fire("Thank you for contacting us! We'll aswer you ASAP")
})

function formsubmit(e){
    e.preventDefault()
    const formData = new formData();
    formData.append(
      'name',
      inputName.value
    )
    formData.append(
      'email',
      inputemail.value
    )
    formData.append(
        'message',
        inputmessage.value
      )
}

fetch('https://github.com/antocappellari/JAVAHCIH/blob/main/index.html', {
    method:'post',
    body: JSON.stringify({
        title:'contact form',
        body:formData,
        userid:1,}),
    headers: {
        'Content-Type': 'aplication/json;charset=UTF-8',},
})
.then((response)=>response.json)
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))

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

const url1 ='https://github.com/antocappellari/JAVAHCIH/blob/main/index.html'







        

