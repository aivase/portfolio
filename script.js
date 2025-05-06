const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '🌙'; 
} else {
    darkModeToggle.textContent = '☀️'; 
}

darkModeToggle.addEventListener('click', () => {

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        darkModeToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
    } else {
        body.classList.add('dark-mode');
        darkModeToggle.textContent = '☀️'; 
        localStorage.setItem('darkMode', 'enabled'); 
    }
});
function updateClock() {
    const now = new Date();
    const helsinkiTime = now.toLocaleTimeString("fi-FI", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: "Europe/Helsinki"
    });
    document.getElementById("clock").textContent = `Helsinki ${helsinkiTime}`;
  }
  setInterval(updateClock, 1000);
  updateClock();
  