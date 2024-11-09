document.addEventListener('DOMContentLoaded', () => {
    const totalHabitsElement = document.getElementById('total-habits');
    const completedHabitsElement = document.getElementById('completed-habits');
    const completionRateElement = document.getElementById('completion-rate');

    // Load saved habits from localStorage
    const savedHabits = JSON.parse(localStorage.getItem('habits')) || [];

    const totalHabits = savedHabits.length;
    const completedHabits = savedHabits.filter(habit => habit.completed).length;
    const completionRate = totalHabits > 0 ? Math.round((completedHabits / totalHabits) * 100) : 0;

    // Update the statistics on the page
    totalHabitsElement.textContent = totalHabits;
    completedHabitsElement.textContent = completedHabits;
    completionRateElement.textContent = `${completionRate}%`;
});