/* =====================================================
   CATEGORY TABS (ACTIVE STATE)
===================================================== */
const tabs = document.querySelectorAll(".category-tabs .tab");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.add("outline"));
    tab.classList.remove("outline");
  });
});


/* =====================================================
   PRODUCT CARD HOVER (LIFT EFFECT)
===================================================== */
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px)";
    card.style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});


/* =====================================================
   PRODUCT IMAGE HOVER (ZOOM EFFECT)
===================================================== */
const productImages = document.querySelectorAll(".product-image img");

productImages.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.08)";
    img.style.transition = "0.4s ease";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
  });
});


/* =====================================================
   COLOR DOT ACTIVE STATE
===================================================== */
const colorGroups = document.querySelectorAll(".color-options");

colorGroups.forEach(group => {
  const dots = group.querySelectorAll(".color-dot");

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });
});


/* =====================================================
   SEARCH INPUT FOCUS FEEDBACK
===================================================== */
const searchInput = document.querySelector(".search-box input");

if (searchInput) {
  searchInput.addEventListener("focus", () => {
    searchInput.style.borderColor = "#1a4d4d";
    searchInput.style.boxShadow = "0 0 0 2px rgba(26,77,77,0.2)";
  });

  searchInput.addEventListener("blur", () => {
    searchInput.style.borderColor = "#ddd";
    searchInput.style.boxShadow = "none";
  });
}


/* =====================================================
   REVIEW CARD HOVER EFFECT
===================================================== */
const reviewCards = document.querySelectorAll(".review-card");

reviewCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-5px)";
    card.style.boxShadow = "0 8px 20px rgba(0,0,0,0.1)";
    card.style.transition = "0.3s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "none";
  });
});


/* =====================================================
   FADE-IN ON SCROLL (INTERSECTION OBSERVER)
===================================================== */
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(30px)";
  section.style.transition = "0.6s ease";
  observer.observe(section);
});


/* =====================================================
   STICKY HEADER ON SCROLL
===================================================== */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.position = "sticky";
    header.style.top = "0";
    header.style.zIndex = "1000";
    header.style.background = "#ffffff";
  } else {
    header.style.position = "static";
  }
});


/* =====================================================
   CART ICON CLICK FEEDBACK
===================================================== */
const headerIcons = document.querySelectorAll(".header-icons span");

if (headerIcons.length) {
  const cartIcon = headerIcons[headerIcons.length - 1];

  cartIcon.addEventListener("click", () => {
    cartIcon.style.transform = "scale(1.2)";
    cartIcon.style.transition = "0.2s ease";

    setTimeout(() => {
      cartIcon.style.transform = "scale(1)";
    }, 200);
  });
}


/* =====================================================
   SMOOTH SCROLL FOR ANCHORS
===================================================== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
