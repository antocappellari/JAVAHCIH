

const inputName = document.querySelector('#Input-Name')
const inputemail = document.querySelector('#Input-email')
const inputmessage = document.querySelector('#textarea-Message')
const submit = document.querySelector('#button-Submitbtn')

submit.addEventListener('click',() => {
    console.log(inputName.value)
    console.log(inputemail.value)
    console.log(inputmessage.value)
})

