const themeToggle = document.getElementById("theme-toggle");

let darkMode = true;

themeToggle.addEventListener("click", () => {

    if (darkMode) {
        document.documentElement.style.setProperty("--bg-color", "#f3f4f6");
        document.documentElement.style.setProperty("--card-color", "#ffffff");
        document.documentElement.style.setProperty("--text-color", "#111827");
        document.documentElement.style.setProperty("--secondary-text", "#4b5563");

        themeToggle.textContent = "☀️";

    } else {
        document.documentElement.style.setProperty("--bg-color", "#111827");
        document.documentElement.style.setProperty("--card-color", "#1f2937");
        document.documentElement.style.setProperty("--text-color", "#ffffff");
        document.documentElement.style.setProperty("--secondary-text", "#9ca3af");

        themeToggle.textContent = "🌙";
    }

    darkMode = !darkMode;
});