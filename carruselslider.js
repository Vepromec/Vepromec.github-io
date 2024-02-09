document.addEventListener("DOMContentLoaded", function () {
    const slider = document.getElementById("mySlider");
    let count = 0;
  
    function nextSlide() {
      count++;
      if (count > slider.childElementCount - 1) {
        count = 0;
      }
      updateSlider();
    }
  
    function updateSlider() {
      const translateValue = -count * 100 + "%";
      slider.style.transform = "translateX(" + translateValue + ")";
    }
  
    setInterval(nextSlide, 5000); // Cambia la imagen cada 3 segundos (ajusta según tus preferencias)
  });
  