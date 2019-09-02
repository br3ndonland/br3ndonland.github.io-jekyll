// Theme toggle
const themeButton = document.querySelector("#btn-theme-toggle")
themeButton.addEventListener("click", () => {
  const body = document.querySelector("body")
  body.classList.toggle("theme-toggle")
  // push the body class list into local storage
  const udacityLogoRegular = document.querySelector("#udacity-logo")
  const udacityLogoLight = document.querySelector("#udacity-logo-light")
  const udacityLogos = [udacityLogoRegular, udacityLogoLight]
  udacityLogos.forEach(udacityLogo => {
    udacityLogo.classList.toggle("d-none")
    // push the logo class list into local storage
  })
})
