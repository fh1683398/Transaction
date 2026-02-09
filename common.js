// const cashOut = document.getElementById('cash-out')
// const addMoney = document.getElementById('add-money')

//show cash out form
// cashOut.addEventListener('click', function(){

//     document.getElementById('cash-out-form').classList.remove('hidden')
//     document.getElementById('add-money-form').classList.add('hidden')
// })

//show add money form
// addMoney.addEventListener('click', function(){
//     document.getElementById('cash-out-form').classList.add('hidden')
//     document.getElementById('add-money-form').classList.remove('hidden')
// })

// =========================================================
let mainBalance = getTextFieldValue('main-balance')

//ADD MONEY
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    let addMoney = getInputValue('add-money-input')

    if (addMoney === "" || isNaN(addMoney) || addMoney <= 0) {
        alert("invalid input")
        return;
    }
    else {
        //decimal
        if (addMoney.includes(".")) {
            let decimal = addMoney.split('.');
            addMoney = decimal[0] + "." + decimal[1].slice(0, 2)
        }

        //convert the input to number
        let addMoneyNum = parseFloat(addMoney)

        //total
        mainBalance += addMoneyNum;

        //update the UI
        document.getElementById('main-balance').innerText = mainBalance.toFixed(2);
    }
})


//CASH OUT
document.getElementById('cash-out-btn').addEventListener('click', function (e) {
    e.preventDefault()

    let cashOut = getInputValue('cash-out-input');

    if (cashOut === "" || isNaN(cashOut) || cashOut <= 0 || mainBalance < cashOut) {
        alert("invalid Input")
        return
    } else {
        //decimal
        if (cashOut.includes(".")) {
            let decimal = cashOut.split(".")
            cashOut = decimal[0] + "." + decimal[1].slice(0, 2)
        }

        //convert to number
        let cashOutNum = parseFloat(cashOut)

        //remaining
        mainBalance -= cashOutNum

        //update the UI
        document.getElementById('main-balance').innerText = mainBalance.toFixed(2)
    }
})


//Active Routes ADD MONEY
document.getElementById('add-money').addEventListener('click', function () {
    const addMoneyFrom = showActiveRoute('add-money-form')

    //active button
    document.getElementById('add-money').classList.add(active)
})

//Active Routes CASH OUT
document.getElementById('cash-out').addEventListener('click', function () {
    const cashOutFrom = showActiveRoute('cash-out-form')
})

//Active Routes TRANSACTION
document.getElementById('transaction').addEventListener('click', function () {
    const transactionForm = showActiveRoute('transaction-form')
})





//common function for getting input value
function getInputValue(id) {
    const getInput = document.getElementById(id).value;
    return getInput
}

//common function for getting text value
function getTextFieldValue(id) {
    const getValue = document.getElementById(id).innerText
    return parseFloat(getValue)
}


//common function for showing active buttons
function showActiveRoute(id) {


    const addMoneyForm = document.getElementById('add-money-form').classList.add('hidden')
    const cashOutForm = document.getElementById('cash-out-form').classList.add('hidden')
    const transactionForm = document.getElementById('transaction-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
} 