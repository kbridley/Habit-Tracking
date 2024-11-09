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
            habitList.appendChild(li);
            habitInput.value = '';
        }
    });
});