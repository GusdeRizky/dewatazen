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


            const searchOverlay = document.getElementById('searchOverlay');

            document.addEventListener("click", function (e) {
              if (!searchOverlay.contains(e.target) && !navbarNav.contains(e.target)) {
                navbarNav.classList.remove("active");
              }
            });
            
            function toggleSearchOverlay() {
                if (searchOverlay.style.display === 'flex') {
                    searchOverlay.style.display = 'none';
                } else {
                    searchOverlay.style.display = 'flex';
                }
            }
            
            // Pastikan untuk memanggil fungsi ini saat ikon search ditekan
            document.querySelector('.search-icon').addEventListener('click', toggleSearchOverlay);