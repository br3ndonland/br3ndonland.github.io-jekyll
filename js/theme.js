// Theme toggle
const themeButton = document.querySelector("#btn-theme-toggle")
themeButton.addEventListener("click", () => {
  const body = document.querySelector("body")
  body.classList.toggle("theme-toggle")
  const udacityLogos = document.querySelectorAll(".udacity-logo")
  udacityLogos.forEach(udacityLogo => {
    udacityLogo.classList.toggle("d-none")
  })
})
