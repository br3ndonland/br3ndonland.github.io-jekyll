// Theme toggle
try {
  const body = document.querySelector("body")
  const udacityLogoRegular = document.querySelector("#udacity-logo")
  const udacityLogoLight = document.querySelector("#udacity-logo-light")
  const udacityLogos = [udacityLogoRegular, udacityLogoLight]
  const loadTheme = () => {
    if ("localStorage" in window) {
      const bodyClasses = localStorage.getItem("body")
      if (bodyClasses) {
        console.log(`Body classes: ${bodyClasses}`)
        // TODO: Set CSS classes to values from localStorage
      }
      udacityLogos.forEach(udacityLogo => {
        let logoClasses = localStorage.getItem(udacityLogo.id)
        console.log(`Classes for element ID ${udacityLogo.id}: ${logoClasses}`)
        // TODO: Set CSS classes to values from localStorage
      })
    }
  }
  document.addEventListener("DOMContentLoaded", () => loadTheme())
  const toggleTheme = () => {
    body.classList.toggle("theme-toggle")
    if ("localStorage" in window) {
      const bodyClasses = body.classList
      localStorage.setItem("body", bodyClasses)
    }
    if (udacityLogoRegular && udacityLogoLight) {
      udacityLogos.forEach(udacityLogo => {
        udacityLogo.classList.toggle("d-none")
        let logoClasses = udacityLogo.classList
        localStorage.setItem(udacityLogo.id, logoClasses)
      })
    }
  }
  const themeButton = document.querySelector("#btn-theme-toggle")
  themeButton.addEventListener("click", () => toggleTheme())
} catch (e) {
  throw Error(e)
}
