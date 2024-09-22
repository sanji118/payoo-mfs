document.getElementById('cashout').addEventListener('click', function(event){
    event.preventDefault();
    const cashout = getInputFieldValueById('input-cashout-money');
    const pinNumber = getInputFieldValueById('cashout-pin-num')

    if (pinNumber === '1234'){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashout;
        document.getElementById('account-balance').innerText = newBalance;
    }
})