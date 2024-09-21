//search: form sumbit reloading the page
//step-1 set event handler
//step-2 prevent default behavior (prevent reloading browser)
document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault(); //vejal to beginners
    const phoneNumber = document.getElementById('phone-number').value;
    console.log(phoneNumber);
});