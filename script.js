window.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
    const wrapper = document.getElementById('all-wrapper');

  const container = document.getElementById('dumpling-container');
  const strip = document.getElementById('paper-strip');
  const fortuneText = document.getElementById('fortune-text');
  // Title floats up on load
  setTimeout(() => {
    title.classList.add('moved');
  }, 1500);

  // Show dumpling + button
  setTimeout(() => {
    wrapper.classList.remove('hidden');
  }, 2200);

  // Button click triggers split + fortune
  setTimeout(() => {
    container.classList.add('split');

    setTimeout(() => {
      fortuneText.classList.add('fade-in');

fetch('fortunes.json')
  .then(res => res.json())
  .then(fortunes => {
    const random = fortunes[Math.floor(Math.random() * fortunes.length)];
    fortuneText.textContent = random;

    // Now that the text is ready, reveal the strip
    document.getElementById('paper-strip').style.opacity = '1'; // or 'block'
    fortuneText.classList.add('fade-in');
        });
    }, 1000); // Wait 1s after split for fortune reveal
  }, 3000); // Crack the dumpling after a brief pause
});

