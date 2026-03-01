// Navigation functionality
document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-button")
  const sections = document.querySelectorAll(".content-section")

  navButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetSection = this.getAttribute("data-section")

      // Remove active class from all nav buttons
      navButtons.forEach((btn) => btn.classList.remove("active"))
      // Add active class to clicked button
      this.classList.add("active")

      // Hide all sections
      sections.forEach((section) => section.classList.remove("active"))
      // Show target section
      document.getElementById(targetSection).classList.add("active")

      // Smooth scroll to top of section
      document.getElementById(targetSection).scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    })
  })

  // Tab functionality for reading section
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabContents = document.querySelectorAll(".tab-content")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab")

      // Remove active class from all tab triggers
      tabTriggers.forEach((tab) => tab.classList.remove("active"))
      // Add active class to clicked trigger
      this.classList.add("active")

      // Hide all tab contents
      tabContents.forEach((content) => content.classList.remove("active"))
      // Show target tab content
      document.getElementById(targetTab).classList.add("active")
    })
  })

  // Copy command functionality
  const commandCells = document.querySelectorAll(".commands-table code")
  commandCells.forEach((code) => {
    code.style.cursor = "pointer"
    code.title = "Click to copy"

    code.addEventListener("click", function () {
      navigator.clipboard
        .writeText(this.textContent)
        .then(() => {
          // Visual feedback
          const originalBg = this.style.backgroundColor
          this.style.backgroundColor = "#22c55e"
          this.style.color = "white"

          setTimeout(() => {
            this.style.backgroundColor = originalBg
            this.style.color = ""
          }, 200)
        })
        .catch((err) => {
          console.error("Failed to copy: ", err)
        })
    })
  })
})
