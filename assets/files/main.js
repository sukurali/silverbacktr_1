(() => {
    const openNavMenu = document.querySelector(".open-nav-menu"),
          closeNavMenu = document.querySelector(".close-nav-menu"),
          navMenu = document.querySelector(".nav-menu"),
          navLinks = document.querySelectorAll('.menu-item a'),
          sections = document.querySelectorAll('section'),
          mediaSize = 991;

    const header = document.querySelector('.header');

    openNavMenu.addEventListener("click", toggleNav);
    closeNavMenu.addEventListener("click", toggleNav);

    function toggleNav() {
        navMenu.classList.toggle("open");
        document.body.classList.toggle("hidden-scrolling");
    }

    window.addEventListener("resize", function () {
        if (this.innerWidth > mediaSize && navMenu.classList.contains("open")) {
            navMenu.classList.remove("open");
            document.body.classList.remove("hidden-scrolling");
        }
    });

    // Highlight Active Link on Scroll
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const top = window.scrollY;
            const offset = section.offsetTop - 150; // Adjust for header
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                document.querySelector(`.menu-item a[href="#${id}"]`).classList.add('active');
            }
        });

        // Change header background color on scroll
        if (window.scrollY > 50) { // Adjust scroll threshold as needed
            header.style.backgroundColor = '#141422d9';
        } else {
            header.style.backgroundColor = 'transparent'; // Reset to original color
        }
    });
})();

    // Pause video when modal is closed
    const videoModal = document.getElementById('videoModal');
    const videoPlayer = document.getElementById('videoPlayer');

    videoModal.addEventListener('hidden.bs.modal', () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0; // Reset the video
    });

// swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });    

