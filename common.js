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
        let decimal = addMoney.split('.');
        addMoney = decimal[0] + "." + decimal[1].slice(0, 2)

        //convert the input to number
        let addMoneyNum = parseFloat(addMoney)

        //total
        mainBalance += addMoneyNum;

        //update the UI
        document.getElementById('main-balance').innerText = mainBalance;
    }
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