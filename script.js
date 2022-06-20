const form = document.getElementById ("form");

form.addEventListener('submit',e =>{
    e.preventDefault();

    const firstName = form ['firstname'].value;
    const lastName = form ['lastname'].value;
    const email = form ['email'].value;
    const password = form ['password'].value;

    if (firstName===''){
        addErrorTo ('firstname', 'First Name cannot be empty');
    }
    if (lastName===''){
        addErrorTo ('lastname', 'Last Name cannot be empty');
    }
    // console.log(isValid(email));
    if (email===""){
        addErrorTo('email','looks like this is not an email');
    }
    if (isValid(email) ){
        
        addErrorTo ('email', 'Email is not valid');
    }
    if (password===''){
        addErrorTo ('password', 'password cannot be empty');
    }



});
function addErrorTo(field, Message){
    const small = form[field].parentNode.querySelector('small');
    const alarms = form[field].parentNode.querySelectorAll('.alarm');
    const inputBorder = form[field].parentNode.querySelector('form-control_error');
    
    
    small.innerText = Message;
    small.style.opacity ='1';
    inputBorder.style.borderColor = "red";
    alarms.forEach(alarm => {
        alarm.style.opacity = 1;
    });
}

function isValid(email){
    var re = /^[a-z][a-zA-Z0-9_.]*(\.[a-zA-Z][a-zA-Z0-9_.]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/;
    return re.exec(email);
        }