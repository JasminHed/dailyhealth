document.addEventListener("DOMContentLoaded", () => {

  //Get ID
  const hamburger = document.getElementById("hamburger")
  const navLinks = document.getElementById("nav-links")

  //Open menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })


  const form = document.getElementById("form")
  const resultsContainer = document.getElementById(wellness - results)

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const selectedState = document.querySelector('input[name="state"]:checked').value;

    resultsContainer.innerHTML = "";

    if (selectedState === 'tired') {
      resultsContainer.innerHTML = `
        <div class="meditation-card">
          <h2>Meditation for Tiredness</h2>
          <img src="assets/tired-meditation.jpg" alt="Restorative meditation">
          <p>This gentle meditation will help restore your energy and reduce fatigue. Find a comfortable position and allow yourself 10 minutes to recharge.</p>
          <div class="audio-player">
            <audio controls>
              <source src="assets/tired.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      `;
    } else if (selectedState === 'stressed') {
      resultsContainer.innerHTML = `
        <div class="meditation-card">
          <h2>Meditation for Stress</h2>
          <img src="assets/stressed-meditation.jpg" alt="Stress relief meditation">
          <p>This calming meditation will help reduce your stress levels and bring you back to center. Focus on your breath and let tension melt away.</p>
          <div class="audio-player">
            <audio controls>
              <source src="assets/stressed.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      `;
    } else if (selectedState === 'scattered') {
      resultsContainer.innerHTML = `
        <div class="meditation-card">
          <h2>Meditation for Feeling Scattered</h2>
          <img src="assets/scattered-meditation.jpg" alt="Focus meditation">
          <p>This meditation will help you gather your thoughts and find focus. Ground yourself and return to the present moment.</p>
          <div class="audio-player">
            <audio controls>
              <source src="assets/scattered.mp3" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      `;
    }
  });





})