document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('registerForm');
    const loginForm = document.getElementById('loginForm');
    const logoutButton = document.getElementById('logoutButton');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const referralCodeDisplay = document.getElementById('referralCodeDisplay');
    const walletBalance = document.getElementById('walletBalance');
    const transactionHistory = document.getElementById('transactionHistory');
    const pendingPayments = document.getElementById('pendingPayments');
    const pendingWithdrawals = document.getElementById('pendingWithdrawals');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Add your registration logic here
            alert('Registration submitted');
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // Add your login logic here
            alert('Login submitted');
        });
    }

    if (logoutButton) {
        logoutButton.addEventListener('click', function () {
            // Add your logout logic here
            alert('Logged out');
        });
    }

    // Fetch user data and populate the dashboard
    if (usernameDisplay) {
        // This is where you would fetch the user's data from your backend
        usernameDisplay.textContent = 'JohnDoe';
        referralCodeDisplay.textContent = 'REF12345';
        walletBalance.textContent = '500';
        
        // Sample transaction history
        const transactions = [
            { type: 'Referral', amount: 75, date: '2024-07-01' },
            { type: 'Withdrawal', amount: 150, date: '2024-07-02' },
        ];
        
        transactions.forEach(transaction => {
            const li = document.createElement('li');
            li.textContent = `${transaction.date} - ${transaction.type}: ${transaction.amount} KES`;
            transactionHistory.appendChild(li);
        });
    }

    // Fetch admin data and populate the admin panel
    if (pendingPayments) {
        // This is where you would fetch the pending payments from your backend
        const payments = [
            { user: 'JohnDoe', amount: 300, date: '2024-07-01', mpesaCode: 'MP12345' },
        ];

        payments.forEach(payment => {
            const li = document.createElement('li');
            li.textContent = `${payment.date} - ${payment.user}: ${payment.amount} KES (Mpesa Code: ${payment.mpesaCode})`;
            pendingPayments.appendChild(li);
        });
    }

    if (pendingWithdrawals) {
        // This is where you would fetch the pending withdrawals from your backend
        const withdrawals = [
            { user: 'JohnDoe', amount: 150, date: '2024-07-02' },
        ];

        withdrawals.forEach(withdrawal => {
            const li = document.createElement('li');
            li.textContent = `${withdrawal.date} - ${withdrawal.user}: ${withdrawal.amount} KES`;
            pendingWithdrawals.appendChild(li);
        });
    }
});
