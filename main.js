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

  // Boucle permettant de cacher la slide en fonction de son index et modifie l'attribut display en "none"
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Boucle permettant de remplacer la class du dot qui est "" à active 
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Comme slideIndex est assigné à 1, on met slideIndex -1 pour commencer par l'index 0 vue que nous commencons par 0. Afficher la slide en question. 
  slides[slideIndex - 1].style.display = "block";

  // Ajouter la classe active
  dots[slideIndex - 1].className += " active";
}
