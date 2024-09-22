document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();


    const addMoney = getInputFieldValueById('input-money');
    const pinNumber = getTextFieldValueById('pin-num');

    if(isNaN(addMoney)){
        alert('Failed to add money');
        return;
    }
    if(pinNumber === '1234'){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;
    }
})