document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('habit-form');
    const habitInput = document.getElementById('habit-input');
    const habitList = document.getElementById('habit-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const habit = habitInput.value.trim();
        if (habit) {
            const li = document.createElement('li');
            li.textContent = habit;

            // Add a button to mark the habit as completed
            const completeButton = document.createElement('button');
            completeButton.textContent = 'Complete';
            completeButton.addEventListener('click', () => {
                li.style.textDecoration = 'line-through';
            });

            // Add a button to delete the habit
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.style.backgroundColor = '#dc3545';
            deleteButton.addEventListener('click', () => {
                habitList.removeChild(li);
            });

            li.appendChild(completeButton);
            li.appendChild(deleteButton);
            habitList.appendChild(li);
            habitInput.value = '';
        }
    });
});