document.getElementById('btn-cashout-money').addEventListener('click', function(event){
    event.preventDefault();
    const cashout = getInputFieldValueById('input-cashout-money');
    const pinNumber = getInputFieldValueById('cashout-pin-num');
    console.log(typeof pinNumber)

    if (pinNumber === 1234){
        const balance = getTextFieldValueById('account-balance');
        const newBalance = balance - cashout;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <p>${cashOut} withdraw. New Balance ${newBalance}</p>
        `

        document.getElementById('transaction-history').appendChild(div);
    }
    else{
        alert('Failed to cash out')
    }
})