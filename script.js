document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('habit-form');
    const habitInput = document.getElementById('habit-input');
    const habitList = document.getElementById('habit-list');

    // Load saved habits from localStorage
    const savedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    savedHabits.forEach(habit => addHabitToDOM(habit));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const habit = habitInput.value.trim();
        if (habit) {
            addHabitToDOM(habit);
            savedHabits.push(habit);
            localStorage.setItem('habits', JSON.stringify(savedHabits));
            habitInput.value = '';
        }
    });

    function addHabitToDOM(habit) {
        const li = document.createElement('li');
        li.textContent = habit;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            habitList.removeChild(li);
            const index = savedHabits.indexOf(habit);
            savedHabits.splice(index, 1);
            localStorage.setItem('habits', JSON.stringify(savedHabits));
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        habitList.appendChild(li);
    }
});