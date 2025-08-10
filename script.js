// Contact form submission handler
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const messageBox = document.getElementById("formMessage");
            messageBox.classList.remove("hidden");
            messageBox.textContent = "Thank you! Your message has been sent.";
            messageBox.style.color = "green";
            form.reset();
        });
    }
});
