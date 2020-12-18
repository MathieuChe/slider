let slideIndex = 1;
showSlides(slideIndex);

// Suivante ou précédente slide
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// La slide courante
function currentSlide(n) {
  showSlides((slideIndex = n));
}
// La méthode qui permet d'afficher les slides
function showSlides(n) {
  let i;

  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("dot");

  // Si n est plus grand que la taille du tableau on revient a 1
  if (n > slides.length) {
    slideIndex = 1;
  }

  // Si n est plus petit que 1, slideInex vaut la taille du tableau
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";

  dots[slideIndex - 1].className += " active";
}
