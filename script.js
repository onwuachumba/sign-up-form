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
     console.log(email);
     console.log(isValid(email));
    if (email===""){
        addErrorTo('email','email cannot be empty');
    }
    if (password===''){
        addErrorTo ('password', 'password cannot be empty');
    }
     console.log((isValid(email)))
     if ((isValid(email))  ){
       
        // var errorEmail= form[field].parentNode.querySelector('#email');
        
        addErrorTo ('email', 'looks like this is not an email');
     }
    //  else{
    //      addErrorTo("email','email should not be empty")
    //  }
    



 });
function addErrorTo(field, Message){
    const small = form[field].parentNode.querySelector('small');
    const alarms = form[field].parentNode.querySelectorAll('.alarm');
    // const placeHolders = form[field].parentNode.querySelector('.firstname').placeholder;
    // console.log(placeHolders)
    const inputBorders = form[field].parentNode.querySelectorAll('.form-control_error');
    
    
    small.innerText = Message;
    small.style.opacity ='1';
    inputBorders.forEach(inputBorder =>{
        inputBorder.style.borderColor="red";
        // inputBorders.innerText.style.display = none;
    }

    ) ;
    alarms.forEach(alarm => {
        alarm.style.opacity = 1;
        
    });
}

function isValid(email){
    var re = /\/+/;
    
    return re.test(email);
        
}

