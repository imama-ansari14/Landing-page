/* WizardZ page interactions.
   Bootstrap handles the responsive navigation; this file adds only a
   small accessibility-friendly behavior for the animated logo marquee. */
document.addEventListener("DOMContentLoaded", () => {
  const logoWindow = document.querySelector(".logo-window");
  const logoTrack = document.querySelector(".logo-track");

  // Respect the visitor's reduced-motion preference for the moving brand logos.
  if (logoWindow && logoTrack && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    logoTrack.style.animation = "none";
    logoWindow.style.overflowX = "auto";
  }
});
