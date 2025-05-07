// Reference elemenata
const pregled_tekst_EL = document.querySelector("#pregled_tekst");
const navbar = document.querySelector(".navbar");
const toggleButton = document.querySelector(".toggle-button");
const navbarLinks = document.querySelector(".navbar-links");

// Dohvaćanje rezervacija iz localStorage
function getReservations() {
    return JSON.parse(localStorage.getItem("sve_rezervacije")) || [];
}

// Spremanje rezervacija u localStorage
function saveReservations(reservations) {
    localStorage.setItem("sve_rezervacije", JSON.stringify(reservations));
}

// Rezervacija vozila
function rezerviraj(vozilo) {
    const rezervacije = getReservations();
    rezervacije.push(vozilo);
    saveReservations(rezervacije);
    location.href = "./uspjesna_rezervacija.html";
}

// Pregled rezervacija
function pregled() {
    const rezervacije = getReservations();
    pregled_tekst_EL.textContent = rezervacije.length
        ? rezervacije.join(", ")
        : "Nema aktivnih rezervacija";
}

// Uklanjanje rezervacija
function ukloni() {
    localStorage.removeItem("sve_rezervacije");
    location.reload();
}

// Dodavanje event listenera na gumbe
document.querySelector("#rez1")?.addEventListener("click", () => rezerviraj("Honda CR-V"));
document.querySelector("#rez2")?.addEventListener("click", () => rezerviraj("Kawasaki Versys"));
document.querySelector("#rez3")?.addEventListener("click", () => rezerviraj("Ford Ecosport"));
document.querySelector("#rez4")?.addEventListener("click", () => rezerviraj("Peugeot Django"));
document.querySelector("#rez5")?.addEventListener("click", () => rezerviraj("VW Up"));
document.querySelector("#rez6")?.addEventListener("click", () => rezerviraj("VW Golf"));
document.querySelector("#ukloni")?.addEventListener("click", ukloni);
document.querySelector("#pregled")?.addEventListener("click", pregled);

// Mobilni izbornik
toggleButton?.addEventListener("click", () => {
    navbarLinks?.classList.toggle("active");
});

// Sticky navbar
window.onscroll = function () {
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add("sticky_1");
    } else {
        navbar.classList.remove("sticky_1");
    }
};
