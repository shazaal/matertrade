document.addEventListener("DOMContentLoaded", function () {
    const productContainer = document.getElementById("productContainer");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function scrollByAmount(direction) {
      const card = productContainer.querySelector(".product-card");
      // Calculate card width + gap (30px from CSS)
      const scrollAmount = card.offsetWidth + 30; 
      
      const scrollOptions = {
        left: direction * scrollAmount,
        behavior: "smooth"
      };

      productContainer.scrollBy(scrollOptions);
    }

    nextBtn.addEventListener("click", () => scrollByAmount(1));
    prevBtn.addEventListener("click", () => scrollByAmount(-1));
  });