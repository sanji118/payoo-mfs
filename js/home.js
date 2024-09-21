//add money to account
document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-money').value;
    console.log(addMoneyInput);

    const pinNum = document.getElementById('pin-num').value;
    console.log(pinNum)
})