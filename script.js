const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

const filterButtons = document.querySelectorAll(".filter-btn");
const productCards = document.querySelectorAll(".product-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    productCards.forEach(card => {
      const show = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden-card", !show);
    });
  });
});

document.querySelectorAll(".save-btn").forEach(button => {
  button.addEventListener("click", () => {
    const saved = button.textContent.trim() === "♥";
    button.textContent = saved ? "♡" : "♥";
    button.setAttribute("aria-label", saved ? "Save item" : "Remove saved item");
  });
});

const signupForm = document.getElementById("signupForm");
const formMessage = document.getElementById("formMessage");
const emailInput = document.getElementById("emailInput");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMessage.textContent = `Thanks! ${emailInput.value} has been added to the demo list.`;
  signupForm.reset();
});

document.getElementById("year").textContent = new Date().getFullYear();
