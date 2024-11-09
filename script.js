document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('habit-form');
    const habitInput = document.getElementById('habit-input');
    const categorySelect = document.getElementById('category-select');
    const habitList = document.getElementById('habit-list');

    // Load saved habits from localStorage
    const savedHabits = JSON.parse(localStorage.getItem('habits')) || [];
    savedHabits.forEach(habit => addHabitToDOM(habit));

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const habit = habitInput.value.trim();
        const category = categorySelect.value;

        if (habit) {
            const habitData = { habit, category };
            addHabitToDOM(habitData);
            savedHabits.push(habitData);
            localStorage.setItem('habits', JSON.stringify(savedHabits));
            habitInput.value = '';
        }
    });

    function addHabitToDOM(habitData) {
        const { habit, category } = habitData;
        const li = document.createElement('li');
        li.textContent = `${habit} (${category})`;

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Complete';
        completeButton.addEventListener('click', () => {
            li.style.textDecoration = 'line-through';
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            habitList.removeChild(li);
            const index = savedHabits.findIndex(h => h.habit === habit && h.category === category);
            savedHabits.splice(index, 1);
            localStorage.setItem('habits', JSON.stringify(savedHabits));
        });

        li.appendChild(completeButton);
        li.appendChild(deleteButton);
        habitList.appendChild(li);
    }
});