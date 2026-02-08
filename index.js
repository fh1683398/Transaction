
//Main balance
let mainBalance = parseFloat(document.getElementById('main-balance').innerText)

const addMoneyBtn = document.getElementById('add-money-btn')

addMoneyBtn.addEventListener('click', function (e) {
    e.preventDefault()

    //get the input amount
    const addingAmount = document.getElementById('add-money-input').value

    //get the pin
    const pinNumber = document.getElementById('pin-number').value

    //check if the amount is not a number
    if (addingAmount === "" || isNaN(addingAmount)) {
        alert("it's not a number")
        return
    }

    //check if it has more the 2 numbers after the decimal
    if (addingAmount.includes(".")) {
        const decimals = addingAmount.split(".")[1]

        if (decimals.length > 2) {
            alert("only 2 decimal allowed")
            return
        }
    }

    //convert the input to number
    const addingAmountNum = parseFloat(addingAmount)

    //add to the main balance
    mainBalance += addingAmountNum;

    document.getElementById('main-balance').innerText = mainBalance
})