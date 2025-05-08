// Similar structure to the Technigo recipe project
// using a local data store (mock), then selecting the correct content based on user input

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
  const quizCard = document.getElementById("quiz-card")

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

  //Checking for: state is selected, form is submitted show correct meditation 
  form.addEventListener("submit", (e) => {
    e.preventDefault() //Stop from reloading page
    const selectedState = document.querySelector('input[name="state"]:checked').value
    showMeditation(selectedState)
  })

  const showMeditation = (state) => {
    const content = meditationData[state];
    if (!content) return


    quizCard.innerHTML = `
  <div class="quiz-result">
    <div class="video-background">
      <video autoplay muted loop playsinline>
        <source src="${content.video}" type="video/mp4">
      </video>
      <div class="overlay-audio">
        <audio controls>
          <source src="${content.audio}" type="audio/mpeg">
          Your browser does not support the audio element.
        </audio>
      </div>
    </div>
    <div class="text-content">
      <h2>${content.title}</h2>
      <p>${content.text}</p>
      <button id="next-to-yoga" class="submit-btn">Next: Yoga pose of the day</button>
    </div>
  </div>
`

    //Hide all on page, show rest on fullscreen
    document.body.classList.add("fullscreen-mode")


    //Next button to get to other content
    setTimeout(() => {
      const nextButton = document.getElementById("next-to-yoga")
      if (nextButton) {
        nextButton.addEventListener("click", () => showYoga(state))
      }

    }, 100) //show after 100millisec

  }

  const showYoga = (state) => {
    const yogaVideos = {
      tired: {
        video: "assets/yogatired.jpg",
        audio: "assets/yoga-tired-voice.mp3",
        title: "Yogapose for Tiredness",
        text: "This pose will gently energize your body and mind."
      },
      scattered: {
        video: "assets/yogascattered.jpg",
        audio: "assets/yoga-scattered-voice.mp3",
        title: "Yogapose for Grounding",
        text: "A grounding pose to bring your attention back into your body."
      },
      stressed: {
        video: "assets/yogastressed.jpg",
        audio: "assets/yoga-stressed-voice.mp3",
        title: "Yogapose for Stress Relief",
        text: "A pose that helps you let go of tension."
      }
    }

    const content = yogaVideos[state]
    if (!content) return

    quizCard.innerHTML = `
      <div class="quiz-result">
        <div class="image-background">
          <img src="${content.video}" alt="${content.title}" class="yoga-image" />
          <div class="overlay-audio">
            <audio controls autoplay>
              <source src="${content.audio}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
        <div class="text-content">
          <h2>${content.title}</h2>
          <p>${content.text}</p>
          <button id="next-to-affirmation" class="submit-btn">Next: Affirmation of the day</button>
        </div>
      </div>
    `

    // Add event listener for next button
    setTimeout(() => {
      const nextButton = document.getElementById("next-to-affirmation")
      if (nextButton) {
        nextButton.addEventListener("click", () => showAffirmation(state))
      }
    }, 100)
  }



  const showAffirmation = (state) => {
    const affirmations = {
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

    const content = affirmations[state]
    if (!content) return

    quizCard.innerHTML = `
      <div class="quiz-result white-bg-card">
        <div class="text-content">
          <h2>Your Daily Affirmation</h2>
          <p class="affirmation-text">"${content.text}"</p>
          <div class="overlay-audio">
            <audio controls autoplay>
              <source src="${content.audio}" type="audio/mpeg" />
            </audio>
          </div>
          <button id="restart" class="submit-btn">Back to Start</button>
        </div>
      </div>
    `

    setTimeout(() => {
      const restartButton = document.getElementById("restart")
      if (restartButton) {
        restartButton.addEventListener("click", () => window.location.reload())
      }
    }, 100)
  }


})




























