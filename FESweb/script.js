//scroll reveal
ScrollReveal().reveal('.card', { easing: "ease-in" });

//for loading spinner
window.addEventListener('load', () => {
  const loadingOverlay = document.getElementById('loading-overlay');
  loadingOverlay.style.display = 'none';
});
