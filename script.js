document.addEventListener("DOMContentLoaded", () => {
  // Get elements
  const hamburger = document.getElementById("hamburger")
  const navLinks = document.getElementById("nav-links")
  const form = document.getElementById("form")
  const checkinSection = document.getElementById("checkin-section")

  // Toggle mobile menu
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active")
    hamburger.classList.toggle("active")
  })

  // Meditation data
  const meditationData = {
    tired: {
      video: "assets/imgtired.mp4",
      audio: "assets/tired.mp3",
      title: "Meditation for Feeling Tired",
      text: "This gentle meditation will help restore your energy and reduce fatigue. Find a comfortable position and allow yourself to recharge."
    },
    scattered: {
      video: "assets/imgscattered.mp4",
      audio: "assets/scattered.mp3",
      title: "Meditation for Feeling Scattered",
      text: "This meditation will help you gather your thoughts and find focus. Ground yourself and return to the present moment."
    },
    stressed: {
      video: "assets/imgstress.mp4",
      audio: "assets/stress.mp3",
      title: "Meditation for Stress",
      text: "This calming meditation will help reduce your stress levels and bring you back to center. Focus on your breath and let tension melt away."
    }
  }

  // Yoga data
  const yogaData = {
    tired: {
      image: "assets/yogatired.jpg",
      audio: "assets/yoga-tired-voice.mp3",
      title: "Yoga Pose for Tiredness",
      text: "This pose will gently energize your body and mind."
    },
    scattered: {
      image: "assets/yogascattered.jpg",
      audio: "assets/yoga-scattered-voice.mp3",
      title: "Yoga Pose for Grounding",
      text: "A grounding pose to bring your attention back into your body."
    },
    stressed: {
      image: "assets/yogastressed.jpg",
      audio: "assets/yoga-stressed-voice.mp3",
      title: "Yoga Pose for Stress Relief",
      text: "A pose that helps you let go of tension."
    }
  }

  // Affirmation data
  const affirmationData = {
    tired: {
      text: "I give myself permission to rest and renew.",
      audio: "assets/affirmation-tired.mp3"
    },
    scattered: {
      text: "I am here, right now, fully.",
      audio: "assets/affirmation-scattered.mp3"
    },
    stressed: {
      text: "I am calm, I am clear.",
      audio: "assets/affirmation-stressed.mp3"
    }
  }

  // Form submission handler
  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload
    const selectedState = document.querySelector('input[name="state"]:checked').value
    showMeditation(selectedState)
  })

  // Show meditation content
  const showMeditation = (state) => {
    const content = meditationData[state]
    if (!content) return

    checkinSection.innerHTML = `
      <div class="result-content">
        <div class="meditation-background">
          <video autoplay muted loop playsinline>
            <source src="${content.video}" type="video/mp4">
          </video>
          <div class="audio-player">
            <audio controls>
              <source src="${content.audio}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="content-text">
          <h2>${content.title}</h2>
          <p>${content.text}</p>
          <button id="next-to-yoga" class="navigation-button">Next: Yoga pose of the day</button>
        </div>
      </div>
    `

    // Enter fullscreen mode
    document.body.classList.add("fullscreen-mode")
    checkinSection.classList.add("result-active")

    // Set up next button
    setTimeout(() => {
      const nextButton = document.getElementById("next-to-yoga")
      if (nextButton) {
        nextButton.addEventListener("click", () => showYoga(state))
      }
    }, 100)
  }

  // Show yoga content
  const showYoga = (state) => {
    const content = yogaData[state]
    if (!content) return

    checkinSection.innerHTML = `
      <div class="result-content">
        <div class="yoga-background">
          <img src="${content.image}" alt="${content.title}" class="yoga-image">
          <div class="audio-player">
            <audio controls autoplay>
              <source src="${content.audio}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="content-text">
          <h2>${content.title}</h2>
          <p>${content.text}</p>
          <button id="next-to-affirmation" class="navigation-button">Next: Affirmation of the day</button>
        </div>
      </div>
    `

    // Set up next button
    setTimeout(() => {
      const nextButton = document.getElementById("next-to-affirmation")
      if (nextButton) {
        nextButton.addEventListener("click", () => showAffirmation(state))
      }
    }, 100)
  }

  // Show affirmation content - updated to match style of other results
  const showAffirmation = (state) => {
    const content = affirmationData[state]
    if (!content) return

    checkinSection.innerHTML = `
      <div class="result-content">
        <div class="affirmation-card">
          <h2>Your Daily Affirmation</h2>
          <p class="affirmation-text">"${content.text}"</p>
          <div class="audio-player">
            <audio controls autoplay>
              <source src="${content.audio}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="content-text">
          <button id="restart" class="navigation-button">Back to Start</button>
        </div>
      </div>
    `

    // Set up restart button
    setTimeout(() => {
      const restartButton = document.getElementById("restart")
      if (restartButton) {
        restartButton.addEventListener("click", () => window.location.reload())
      }
    }, 100)
  }

  //Message not wroking on tablet and desktop
  if (window.innerWidth >= 668) {
    form.innerHTML = `
      <div class="desktop-message">
        <h3>Mobile Experience Only</h3>
        <p>Our interactive wellness journey is currently optimized for mobile devices. Please use your smartphone to access this feature.</p>
        <p>Tablet and desktop version coming soon!</p>
      </div>
    `
    
    form.onsubmit = (e) => e.preventDefault()
  }
  
  
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 668 && form) {
      form.innerHTML = `...Our interactive wellness journey is currently optimized for mobile devices. Please use your smartphone to access this feature.Tablet and desktop version coming soon!...`
      form.onsubmit = (e) => e.preventDefault()
    }

  })
})