
//Main balance
let mainBalance = parseFloat(document.getElementById('main-balance').innerText)




//ADD MONEY

const addMoneyBtn = document.getElementById('add-money-btn')

addMoneyBtn.addEventListener('click', function (e) {
    e.preventDefault()

    //get the input amount
    let addMoneyInput = document.getElementById('add-money-input').value.trim()

    //get the pin
    // const pinNumber = document.getElementById('pin-number').value

    //check if the amount is not a number
    if (addMoneyInput === "" || isNaN(addMoneyInput)) {
        alert("it's not a number")
        return
    }

    //fix decimals
    if (addMoneyInput.includes(".")) {
        const parts = addMoneyInput.split(".");
        addMoneyInput = parts[0] + "." + parts[1].slice(0, 2);
    }

    if(addMoneyInput <= 0){
        alert('put a positive number')
        return
    }
    //convert the input to number
    const addingAmountNum = parseFloat(addMoneyInput)

    //add to the main balance
    mainBalance += addingAmountNum;

    document.getElementById('main-balance').innerText = mainBalance
})




//CASH OUT

document.getElementById('cash-out-btn').addEventListener('click', function (e) {
    e.preventDefault()

    //get the input
    let cashOutInput = document.getElementById('cash-out-input').value.trim();

    //get the pin
    // const pin = document.getElementById('pin-number').value;

    //validate the input
    if (cashOutInput === "" || isNaN(cashOutInput)) {
        alert("it's not a number");
        return;
    }

    //fix decimals
    if (cashOutInput.includes(".")) {
        const parts = cashOutInput.split(".")
        cashOutInput = parts[0] + "." + parts[1].slice(0, 2)
    }
    if(cashOutInput <= 0){
        alert('put a positive number')
        return
    }

    //convert to number
    const num = parseFloat(cashOutInput)
    
    //calculation
    mainBalance -= num

    //update the UI
    document.getElementById('main-balance').innerText = mainBalance

})