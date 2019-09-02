// Theme toggle
try {
  const localStorageLoad = () => {
    if ("localStorage" in window) {
      // Retrieve CSS classes from localStorage
      const bodyClasses = localStorage.getItem("bodyClasses")
      console.log(bodyClasses)
    }
  }
  document.addEventListener("DOMContentLoaded", () => localStorageLoad())
  const toggleTheme = () => {
    const body = document.querySelector("body")
    body.classList.toggle("theme-toggle")
    if ("localStorage" in window) {
      const bodyClasses = document.querySelector("body").classList
      localStorage.setItem("bodyClasses", bodyClasses)
    }
    const udacityLogoRegular = document.querySelector("#udacity-logo")
    const udacityLogoLight = document.querySelector("#udacity-logo-light")
    if (udacityLogoRegular && udacityLogoLight) {
      const udacityLogos = [udacityLogoRegular, udacityLogoLight]
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
