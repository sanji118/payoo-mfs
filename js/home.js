//add money to account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-money').value;
    //console.log(addMoneyInput);

    const pinNum = document.getElementById('pin-num').value;
    //console.log(pinNum);

    if(pinNum === '1234'){
        console.log('You have added money');
        const balance = document.getElementById('account-balance').innerText;// get the current balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance); 
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('You have inputed wrong pin');
    }
})