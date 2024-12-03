// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di select
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk hilang navabr
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// tawaran spesial 
feather.replace();

            const filterButtons = document.querySelectorAll('.filter-btn');
            const items = document.querySelectorAll('.item');

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.getAttribute('data-category');
                    items.forEach(item => {
                        if (category === 'semua' || item.classList.contains(category)) {
                            item.style.display = 'block';
                        } else {
                            item.style.display = 'none';
                        }
                    });
                });
            });
