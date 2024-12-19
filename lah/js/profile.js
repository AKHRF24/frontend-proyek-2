document.addEventListener('DOMContentLoaded', function() {
    const totalPoints = 1200; // This would be fetched from the server
    document.getElementById('totalPoints').innerText = totalPoints;

    const transactions = [
        { date: '2023-01-15', activity: 'Participated in Math Quiz', points: 100 },
        { date: '2023-01-20', activity: 'Course Material Download', points: -50 },
        { date: '2023-01-25', activity: 'Top Score in Chemistry', points: 150 }
    ];

    const tableBody = document.getElementById('historyTable').getElementsByTagName('tbody')[0];
    transactions.forEach(transaction => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = transaction.date;
        row.insertCell(1).innerText = transaction.activity;
        row.insertCell(2).innerText = transaction.points;
    });
});
