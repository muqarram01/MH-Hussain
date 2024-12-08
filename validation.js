const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')

form.addEventListener( 'submit', (e) =>{
  //  e.preventDefault() Prevent Submit;

    let errors = []

    if (firstname_input){
        // if we have firstname input then we are in the signup
        errors = getSignFormErrors()
    }
})