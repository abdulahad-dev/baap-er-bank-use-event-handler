document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositField = document.getElementById('deposit-field');
    const newDeposit = depositField.value;

    if (isNaN(parseFloat(newDeposit))) {
        alert('Please provide valid number');
        return;
    }

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotal.innerText;

    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newDeposit);
    depositTotal.innerText = currentDepositTotal;

    const balanceField = document.getElementById('balance-total');
    const previousBalanceTotal = balanceField.innerText;

    const currentTotalBalance = parseFloat(previousBalanceTotal) + parseFloat(newDeposit);
    balanceField.innerText = currentTotalBalance;

    depositField.value = '';
});