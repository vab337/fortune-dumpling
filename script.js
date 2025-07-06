window.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('title');
    const wrapper = document.getElementById('all-wrapper');

  const container = document.getElementById('dumpling-container');
  const strip = document.getElementById('paper-strip');
  const fortuneText = document.getElementById('fortune-text');
  const button = document.getElementById('crack-button');

  // Title floats up on load
  setTimeout(() => {
    title.classList.add('moved');
  }, 1500);

  // Show dumpling + button
  setTimeout(() => {
    wrapper.classList.remove('hidden');
  }, 2200);

  // Button click triggers split + fortune
  button.addEventListener('click', () => {
    container.classList.add('split');

    // Delay reveal of paper and fortune
    setTimeout(() => {
      fortuneText.classList.add('fade-in');

      fetch('fortunes.json')
        .then(res => res.json())
        .then(fortunes => {
          const random = fortunes[Math.floor(Math.random() * fortunes.length)];
          fortuneText.textContent = random;
          console.log(fortuneText.textContent);
        });

      // Optional: hide the button
      button.style.display = 'none';
    }, 1000); // 1s to allow dumpling split animation
  });
});
