
  // Function to toggle dark mode
  function toggleDarkMode() {
    const darkModeIcon = document.getElementById("darkModeIcon");
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "dark") {
      document.body.classList.remove("dark-mode");
      darkModeIcon.classList.remove("bi-sun");
      darkModeIcon.classList.add("bi-moon");
      localStorage.setItem("theme", "light");
    } else {
      document.body.classList.add("dark-mode");
      darkModeIcon.classList.remove("bi-moon");
      darkModeIcon.classList.add("bi-sun");
      localStorage.setItem("theme", "dark");
    }
  }

  // Check if the user has a preferred theme
  const userPreferredTheme = localStorage.getItem("theme");

  // If userPreferredTheme is set to dark, enable dark mode
  if (userPreferredTheme === "dark") {
    document.body.classList.add("dark-mode");
    const darkModeIcon = document.getElementById("darkModeIcon");
    darkModeIcon.classList.remove("bi-moon");
    darkModeIcon.classList.add("bi-sun");
  }

  // Add click event listener to the dark mode toggle button
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.addEventListener("click", toggleDarkMode);
