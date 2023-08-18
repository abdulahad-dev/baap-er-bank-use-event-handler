document.getElementById('btn-submit').addEventListener('click', function () {
    const emailFeild = document.getElementById('user-email');
    const email = emailFeild.value;

    // console.log(email);

    const passwordFeild = document.getElementById('user-password');
    const password = passwordFeild.value;
    console.log(email, password);

    if (email === 'shipahad@loveu.com' && password === 'secreet') {
        window.location.href = 'bank.html';
    } else {
        alert('Please valid email and password enter');
    }
});