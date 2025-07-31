<<<<<<< HEAD
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (username === "" || password === "") {
    alert("Please enter both username and password.");
  } else {
    alert("Login successful!");
  }
});
=======
function toggleTheme()
{
    document.body.classList.toggle("dark-mode");
}
>>>>>>> 6d9bab0 (Day 4: Profile card with Toggle Theme)
