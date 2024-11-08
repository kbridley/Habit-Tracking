// Initialize points from localStorage or set to zero if not found
function initializePoints(habit) {
  const points = localStorage.getItem(habit) || 0;
  document.getElementById(`${habit}-points`).innerText = points;
}

function addPoints(habit, points) {
  let currentPoints = parseInt(localStorage.getItem(habit) || 0);
  currentPoints += points;
  localStorage.setItem(habit, currentPoints);
  document.getElementById(`${habit}-points`).innerText = currentPoints;
}

// Initialize points for each habit on page load
window.onload = () => {
  initializePoints('exercise');
  initializePoints('water');
  initializePoints('study');
  initializePoints('project');
};
