document.addEventListener("DOMContentLoaded", () => {

    // ================= CARD =================
    function toggleCard(card) {
        card.classList.toggle("active");
    }
    window.toggleCard = toggleCard; // keep HTML onclick working


    


    // ================= ABOUT SECTION =================
    const section = document.querySelector(".mom-about");

    if (section) {
        const observer1 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    section.style.opacity = "1";
                    section.style.transform = "translateY(0)";
                }
            });
        });

        section.style.opacity = "0";
        section.style.transform = "translateY(25px)";
        section.style.transition = "1s ease";

        observer1.observe(section);
    }


    // ================= FOOTER =================
    const footer = document.querySelector(".footer");

    if (footer) {
        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    footer.style.opacity = "1";
                    footer.style.transform = "translateY(0)";
                }
            });
        });

        footer.style.opacity = "0";
        footer.style.transform = "translateY(30px)";
        footer.style.transition = "1s ease";

        observer2.observe(footer);
    }

});