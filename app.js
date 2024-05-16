document.addEventListener("DOMContentLoaded", function() {
    console.log("Food website");
  
    const btn1 = document.querySelector("#btn1");
    const btn2 = document.querySelector("#btn2");
    const btn3 = document.querySelector("#btn3");
    let msg = document.querySelector(".msg");
  
    const stars = document.querySelectorAll(".fiveStars i");
    const sliderContainer = document.querySelector(".sliderContainer");
    const prevArrow = document.querySelector("#prevArrow");
    const nextArrow = document.querySelector("#nextArrow");
    let counter = 0;
  
    // Function to handle image click event
    function handleImageClick(event) {
      const clickedImageSrc = event.target.src;
      const container2Image = document.querySelector(".mainImg"); // Updated selector to use the class name
      container2Image.src = clickedImageSrc;
    }
  
    // Add event listeners to slider images
    const sliderImages = document.querySelectorAll(".sliderImage");
    sliderImages.forEach((image) => {
      image.addEventListener("click", handleImageClick);
    });
  
    nextArrow.addEventListener("click", () => {
      if (counter < sliderContainer.children.length - 1) {
        counter++;
      } else {
        counter = 0;
      }
  
      sliderContainer.style.transform = `translateX(-${counter * 100}%)`;
      sliderContainer.scrollLeft = counter * sliderContainer.offsetWidth;
      sliderContainer.style.transition = `scroll-left 1s ease`;
    });
  
    prevArrow.addEventListener("click", () => {
      if (counter > 0) {
        counter--;
      } else {
        counter = sliderContainer.children.length - 1;
      }
      sliderContainer.style.transform = `translateX(-${counter * 100}%)`;
      sliderContainer.scrollLeft = counter * sliderContainer.offsetWidth;
      sliderContainer.style.transition = `scroll-left 1s ease`;
    });
  
    btn1.addEventListener("click", () => {
      console.log("SignUp btn was clicked");
    });
  
    btn2.addEventListener("click", () => {
      console.log("Login btn was clicked");
    });
  
    btn3.addEventListener("click", () => {
      console.log("buy now btn was clicked");
    });
  
    stars.forEach((star, index) => {
      star.addEventListener("click", () => {
        let rating = parseInt(star.getAttribute("data-rating"));
        stars.forEach((s, i) => {
          if (i <= index) {
            s.classList.add("selected");
          } else {
            s.classList.remove("selected");
          }
        });
        stars.forEach((star) => {
          star.addEventListener("click", () => {
            let rating = parseInt(star.getAttribute("data-rating"));
  
            if (rating === 1) {
              msg.textContent = "poor";
            } else if (rating == 2) {
              msg.textContent = "fair";
            } else if (rating == 3) {
              msg.textContent = "good";
            } else if (rating == 4) {
              msg.textContent = "very good";
            } else if (rating == 5) {
              msg.textContent = "Excellent";
            } else {
              msg.textContent = " ";
            }
          });
        });
      });
    });
  });
  