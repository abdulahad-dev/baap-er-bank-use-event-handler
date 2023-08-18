document.getElementById('btn-withdraw').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdraw = withdrawField.value;

    if (isNaN(parseFloat(newWithdraw))) {
        alert('Please provide a valid number');
        return;
    }

    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmount = withdrawTotal.innerText;

    const balanceField = document.getElementById('balance-total');
    const previousBalanceTotal = balanceField.innerText;

    withdrawField.value = '';

    if (parseFloat(newWithdraw) > parseFloat(previousBalanceTotal)) {
        alert('Baap er bank a tk nai !');
        return;
    }

    const currentWithdrawTotal = parseFloat(withdrawTotalAmount) + parseFloat(newWithdraw);
    withdrawTotal.innerText = currentWithdrawTotal;

    const currentTotalBalance = parseFloat(previousBalanceTotal) - parseFloat(newWithdraw);
    balanceField.innerText = currentTotalBalance;

});