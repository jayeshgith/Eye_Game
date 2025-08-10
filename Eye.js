document.addEventListener('DOMContentLoaded', () => {
  const eyes = document.querySelectorAll('.eye');
  const pupils = document.querySelectorAll('.pupil');

  document.addEventListener('mousemove', (event) => {
    eyes.forEach((eye, index) => {
      const pupil = pupils[index];
      const rect = eye.getBoundingClientRect();

      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const dx = event.clientX - eyeCenterX;
      const dy = event.clientY - eyeCenterY;
      const angle = Math.atan2(dy, dx);

      const maxDistance = (rect.width / 2) - (pupil.offsetWidth / 2) - 4;

      const pupilX = maxDistance * Math.cos(angle);
      const pupilY = maxDistance * Math.sin(angle);

      pupil.style.left = `${rect.width / 2 + pupilX - pupil.offsetWidth / 2}px`;
      pupil.style.top = `${rect.height / 2 + pupilY - pupil.offsetHeight / 2}px`;
    });
  });
});
