const toggleButton = document.querySelectorAll('.toggle-button')[0]
const navbarLinks = document.querySelectorAll('.navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
var dt = new Date();

year  = dt.getFullYear();
month = (dt.getMonth() + 1).toString().padStart(2, "0"); //padStart dėl dviženklio skaičiaus//
day   = dt.getDate().toString().padStart(2, "0");
data = day + '.' + month + '.' + year;
document.getElementById("data").innerHTML = data;