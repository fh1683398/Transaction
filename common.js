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
let transactionDiv = document.getElementById('transaction-form')



//ADD MONEY
document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()

    let addMoney = getInputValue('add-money-input')

    if (addMoney === "" || isNaN(addMoney) || addMoney <= 0) {
        showModal("invalid input")
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

        //add to transaction div
        const div = document.createElement('div')
        div.innerHTML = `
           <div style="padding:0.5rem 1rem; border:1px gray solid; border-radius: 10px; margin-bottom: 0.5rem;">
                <p> 
                    Add money: <span style="font-weight:700;">${addMoneyNum}tk</span>; Total balance: <span style="font-weight:700;">${mainBalance.toFixed(2)}tk</span>
                </p>
           </div>`

        transactionDiv.prepend(div)

        //Show modal
        showModal('successful')
    }

})


//CASH OUT
document.getElementById('cash-out-btn').addEventListener('click', function (e) {
    e.preventDefault()

    let cashOut = getInputValue('cash-out-input');

    if (cashOut === "" || isNaN(cashOut) || cashOut <= 0) {
        showModal("invalid Input")
        return
    }
    else if(mainBalance < cashOut){
        showModal('not enough balance')
        return
    }
    else {
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


        //add to transaction div
        const div = document.createElement('div')
        div.innerHTML = `
               <div style="padding:0.5rem 1rem; border:1px gray solid; border-radius: 10px; margin-bottom: 0.5rem;">
                    <p> 
                        Cash Out: <span style="font-weight:700;">${cashOutNum}tk</span>; Total balance: <span style="font-weight:700;">${mainBalance.toFixed(2)}tk</span>
                    </p> 
               </div>`

        transactionDiv.prepend(div);

        //show Modal
        showModal('successful')
    }

})


//Active Routes
document.getElementById('add-money').addEventListener('click', function () {
    showActiveRoute('add-money-form')

    //active button
    showActiveButton('add-money')
})


document.getElementById('cash-out').addEventListener('click', function () {
    showActiveRoute('cash-out-form')

    showActiveButton('cash-out')
})


document.getElementById('transaction').addEventListener('click', function () {
    showActiveRoute('transaction-form')

    showActiveButton('transaction')
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


//common function for showing forms
function showActiveRoute(id) {


    document.getElementById('add-money-form').classList.add('hidden')
    document.getElementById('cash-out-form').classList.add('hidden')
    document.getElementById('transaction-form').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}


//common function for active buttons
function showActiveButton(id) {
    document.getElementById('add-money').classList.remove('active')
    document.getElementById('cash-out').classList.remove('active')
    document.getElementById('transaction').classList.remove('active')

    document.getElementById(id).classList.add('active')
}


const modal = document.getElementById('modal')
let modalMessage = document.getElementById('modal-message')
const closeModalBtn = document.getElementById('close-modal')

//open modal
function showModal(message){
    modal.classList.remove('hidden');
    modalMessage.innerText = message;
}

// close modal
function closeModal(){
    modal.classList.add('hidden')
}

modal.addEventListener('click', function(e){
    if(e.target === modal){
        closeModal()
    }
})

closeModalBtn.addEventListener('click', closeModal)