// academic js
document.addEventListener('DOMContentLoaded', function() {
    const academicData = [
        { subject: 'Mathematics', grade: 'A', points: 100 },
        { subject: 'Physics', grade: 'B+', points: 80 },
        { subject: 'Literature', grade: 'A-', points: 90 }
    ];

    const tableBody = document.getElementById('academicPoints').getElementsByTagName('tbody')[0];
    academicData.forEach(data => {
        const row = tableBody.insertRow();
        row.insertCell(0).innerText = data.subject;
        row.insertCell(1).innerText = data.grade;
        row.insertCell(2).innerText = data.points;
    });
});

// quiz
document.getElementById('startQuiz').addEventListener('click', function() {
    alert('Quiz will start now!');
    // This is where you would handle the quiz logic or redirect to the quiz page.
});

// dashboard
document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching data from server
    const totalPoints = 270; // This would be fetched from the server in a real app
    document.getElementById('totalPoints').innerText = totalPoints;
});
