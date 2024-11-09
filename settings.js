document.getElementById('reset-button').addEventListener('click', () => {
    if (confirm('Are you sure you want to delete all habits?')) {
        localStorage.removeItem('habits');
        alert('All habits have been reset.');
    }
});