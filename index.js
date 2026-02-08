const addMoneyBtn = document.getElementById('add-money-btn')

addMoneyBtn.addEventListener('click', function(e){
    e.preventDefault()
    
    //get the input amount
    const addingAmount = document.getElementById('add-money-input').value

    //get the pin
    const pinNumber = document.getElementById('pin-number').value
    console.log(addingAmount, pinNumber)
})