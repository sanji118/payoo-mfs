// search: form submit reloading the page
// step - 1 set event handler

document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();   // step-2: prevent default behavior (prevent reloading browser)
    const phoneNumber = document.getElementById('phone-number').value;        
    const pinNumber = document.getElementById('pin-number').value;  // step-3: get the phone number and the pin number

    if(phoneNumber=== '5' && pinNumber === '1234'){
        console.log('you are logged in');
        window.location.href= '/home.html';// step -5: allow user to use the website
        }
        else{
        alert('Wrong phone number or Pin');
        } //bad way to validate
})