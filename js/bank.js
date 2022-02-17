document.getElementById('calculation').addEventListener('click', function () {

    // income field
    const incomeData = amount('income');


    // food field
    const foodData = amount('food');

    // rent field
    const rentData = amount('rent');

    // cloth field
    const clothData = amount('cloth');

    // account calculation
    const totalExpense = parseFloat(foodData) + parseFloat(rentData) + parseFloat(clothData)

    const totalBalance = incomeData - totalExpense;


    //set total amount result
    const setTotalExpense = document.getElementById('expense');
    setTotalExpense.innerText = totalExpense;

    if (incomeData > totalExpense && incomeData > 0) {
        const setTotalBalance = document.getElementById('balance');
        setTotalBalance.innerText = totalBalance;
    } else {
        const errorMsgAleart = document.getElementById('errorMsg')
        errorMsgAleart.innerText = 'your costs more than your balance';
    }

});

// input function 
function amount(inputId) {
    const amountField = document.getElementById(inputId);
    const amountNumber = amountField.value;
    amountField.value = '';
    return amountNumber;
}

// savings..


// total income
var incomeData = amount('income');
var totalIncome = parseFloat(incomeData)
console.log(totalIncome)

// saving input field 
function saving(inputId) {
    var savingField = document.getElementById(inputId);
    var saveNumber = savingField.value;
    amountField.value = '';
    return saveNumber;
}
var savingInput = saving('save');
var savingpearse = parseFloat(savingInput)
console.log(savingpearse);

/// save button  
document.getElementById('saveBtn').addEventListener('click', function () {
    var savingResult = (totalIncome / 100 * savingpearse)
    var setTotalSaving = document.getElementById('Saving');
    setTotalSaving.innerText = savingResult;
    //validetion
    if (totalIncome > savingpearse && totalIncome > 0) {
        var setTotalBalance = document.getElementById('Remmaning');
        setTotalBalance.innerText = totalBalance;
    } else {
        var errorMsgAleart = document.getElementById('errorMsg')
        errorMsgAleart.innerText = 'your savings not more than your balance';
        return totalBalance;
    }
});
