import { useState } from "react";

// ── Data ──────────────────────────────────────────────────────────────────────

const DOSHAS = {
  vata: {
    name: "Vata",
    element: "Air & Space",
    color: "#8B9DC3",
    light: "#EEF1F8",
    accent: "#5C6FA8",
    emoji: "🌬️",
    tagline: "Creative, quick, and always moving",
    description:
      "Vata is the energy of movement and change. If Vata is your dominant dosha, you are likely imaginative, enthusiastic, and quick to learn — but also quick to forget. You tend to have a slender build, dry skin, and a creative, restless mind. When in balance, Vata types are vibrant, joyful, and full of ideas. When out of balance, anxiety, scattered thoughts, poor sleep, and physical dryness can appear.",
    traits: [
      "Creative & imaginative",
      "Quick learner",
      "Enthusiastic",
      "Slender build",
      "Dry skin & hair",
      "Light sleeper",
      "Irregular appetite",
      "Cold hands & feet",
    ],
    imbalance: "Anxiety, restlessness, insomnia, dry skin, constipation, fear",
    guide: {
      overview:
        "Today, focus on grounding, warmth, and routine. Vata is calmed by stability, nourishment, and slowing down.",
      food: {
        title: "Food & Drink",
        eat: [
          "Warm, cooked foods",
          "Root vegetables",
          "Ghee and oils",
          "Sweet, sour and salty tastes",
          "Warm milk with turmeric",
          "Rice, oats, wheat",
        ],
        avoid: [
          "Raw salads and cold food",
          "Carbonated drinks",
          "Dry crackers or chips",
          "Bitter and astringent tastes",
          "Caffeine in excess",
        ],
      },
      yoga: {
        title: "Yoga Pose: Child's Pose (Balasana)",
        description:
          "Kneel on the floor, touch your big toes together and sit on your heels. Fold forward, extending your arms in front of you or resting them alongside your body. Let your forehead touch the mat. Breathe slowly and hold for 2–5 minutes. This pose grounds Vata energy, calms the nervous system, and encourages stillness.",
        tip: "Focus on the weight of your body sinking into the earth with each exhale.",
      },
      lifestyle: [
        "Maintain a regular daily routine",
        "Go to bed before 10pm",
        "Eat warm meals at consistent times",
        "Avoid overcommitting and rushing",
        "Spend time in nature, especially near water",
        "Warm oil self-massage (abhyanga) with sesame oil",
      ],
      affirmation: "I am grounded, calm, and exactly where I need to be.",
    },
  },
  pitta: {
    name: "Pitta",
    element: "Fire & Water",
    color: "#C8845A",
    light: "#FBF0EA",
    accent: "#A05C30",
    emoji: "🔥",
    tagline: "Focused, driven, and fiercely intelligent",
    description:
      "Pitta is the energy of transformation and metabolism. Pitta types are sharp, focused, and natural leaders with a strong drive to succeed. They tend to have a medium build, warm body temperature, and a penetrating intellect. When in balance, Pitta brings confidence, courage, and clarity. When out of balance, irritability, inflammation, perfectionism, and burnout can surface.",
    traits: [
      "Sharp intellect",
      "Natural leader",
      "Driven & ambitious",
      "Medium build",
      "Warm body temperature",
      "Strong digestion",
      "Competitive",
      "Direct communicator",
    ],
    imbalance:
      "Anger, irritability, inflammation, acid reflux, skin rashes, burnout",
    guide: {
      overview:
        "Today, focus on cooling down — physically, mentally, and emotionally. Pitta is calmed by surrender, gentleness, and moderation.",
      food: {
        title: "Food & Drink",
        eat: [
          "Cooling, fresh foods",
          "Cucumber, mint, coconut",
          "Sweet, bitter and astringent tastes",
          "Coconut water",
          "Basmati rice",
          "Leafy greens",
        ],
        avoid: [
          "Spicy and fermented foods",
          "Alcohol and caffeine",
          "Fried and oily foods",
          "Red meat",
          "Sour foods like vinegar",
        ],
      },
      yoga: {
        title: "Yoga Pose: Moon Salutation (Chandra Namaskar)",
        description:
          "Stand with feet together. Inhale and reach your arms overhead, creating a gentle backbend. Exhale and fold forward. Step back into a lunge, then to plank, lower down, and move through a gentle cobra or sphinx. Flow slowly and with awareness, moving to the left side of the body to activate cooling lunar energy. Hold each position for 3–5 breaths.",
        tip: "Move slowly. Let this be soft. This is not a workout — it is a cooling ritual.",
      },
      lifestyle: [
        "Take breaks throughout the day",
        "Spend time near water or in nature",
        "Avoid working through lunch",
        "Practice gratitude instead of critique",
        "Limit screen time in the evening",
        "Coconut oil self-massage to cool the body",
      ],
      affirmation:
        "I release the need to control. I trust the process and find peace in the present.",
    },
  },
  kapha: {
    name: "Kapha",
    element: "Earth & Water",
    color: "#6BAA8E",
    light: "#EAF4EF",
    accent: "#3D7A62",
    emoji: "🌿",
    tagline: "Steady, loving, and deeply rooted",
    description:
      "Kapha is the energy of structure, stability, and lubrication. Kapha types are naturally calm, loving, and deeply loyal. They tend to have a strong, solid build, smooth skin, and a steady, patient nature. When in balance, Kapha brings groundedness, compassion, and endurance. When out of balance, heaviness, lethargy, attachment, and resistance to change can emerge.",
    traits: [
      "Calm & steady",
      "Deeply loyal",
      "Patient & nurturing",
      "Strong build",
      "Smooth skin",
      "Heavy sleeper",
      "Slow digestion",
      "Strong long-term memory",
    ],
    imbalance:
      "Lethargy, weight gain, attachment, depression, congestion, oversleeping",
    guide: {
      overview:
        "Today, focus on movement, stimulation, and lightness. Kapha is energized by variety, warmth, and gentle challenge.",
      food: {
        title: "Food & Drink",
        eat: [
          "Light, warm, and spicy foods",
          "Bitter and astringent tastes",
          "Ginger tea",
          "Legumes and vegetables",
          "Barley and millet",
          "Honey (in moderation)",
        ],
        avoid: [
          "Heavy, oily, and sweet foods",
          "Dairy and cold drinks",
          "Wheat and red meat",
          "Fried foods",
          "Eating when not hungry",
        ],
      },
      yoga: {
        title: "Yoga Pose: Warrior I (Virabhadrasana I)",
        description:
          "Stand with feet hip-width apart. Step your left foot back about 3–4 feet, turning it out 45 degrees. Bend your right knee over your right ankle. Raise both arms overhead, palms facing each other. Lift your chest, draw your shoulders back, and gaze forward or slightly up. Hold for 5–8 breaths, then switch sides.",
        tip: "Let this pose build heat and energy. Breathe powerfully. Feel strong and alive.",
      },
      lifestyle: [
        "Wake up before 7am — avoid oversleeping",
        "Exercise every day, even a brisk walk",
        "Try new things and embrace change",
        "Eat only when genuinely hungry",
        "Avoid daytime napping",
        "Dry body brushing to stimulate circulation",
      ],
      affirmation:
        "I embrace change. I move forward with energy, clarity, and joy.",
    },
  },
};

// ── Components ────────────────────────────────────────────────────────────────

function Intro({ onStart }) {
  return (
    <div className="screen intro-screen">
      <div className="intro-badge">✦ Ayurveda</div>
      <h1 className="intro-title">Know Your Dosha</h1>
      <p className="intro-subtitle">
        Ayurveda — the ancient science of life — teaches that every person is
        made of a unique combination of three energies called <em>doshas</em>:
        Vata, Pitta, and Kapha. Understanding your dominant dosha is the first
        step toward living in harmony with your natural rhythm.
      </p>
      <p className="intro-body">
        Read through the three dosha profiles below and choose the one that
        resonates most with how you feel right now — not necessarily who you are
        all the time, but your current state. From there, you'll receive a
        personalized guide for today.
      </p>
      <button className="btn-primary" onClick={onStart}>
        Explore the Doshas →
      </button>
    </div>
  );
}

function DoshaCard({ dosha, data, onSelect, selected }) {
  return (
    <div
      className={`dosha-card ${selected ? "dosha-card--selected" : ""}`}
      style={{
        "--dosha-color": data.color,
        "--dosha-light": data.light,
        "--dosha-accent": data.accent,
      }}
      onClick={() => onSelect(dosha)}
    >
      <div className="dosha-card-header">
        <span className="dosha-emoji">{data.emoji}</span>
        <div>
          <div className="dosha-element">{data.element}</div>
          <h2 className="dosha-name">{data.name}</h2>
          <div className="dosha-tagline">{data.tagline}</div>
        </div>
        {selected && <div className="dosha-check">✓</div>}
      </div>
      <p className="dosha-description">{data.description}</p>
      <div className="dosha-traits">
        {data.traits.map((t, i) => (
          <span key={i} className="trait-pill">
            {t}
          </span>
        ))}
      </div>
      <div className="dosha-imbalance">
        <strong>When out of balance:</strong> {data.imbalance}
      </div>
    </div>
  );
}

function DoshaSelector({ onSelect }) {
  const [selected, setSelected] = useState(null);

  function handleSelect(dosha) {
    setSelected(dosha);
  }

  return (
    <div className="screen selector-screen">
      <div className="selector-header">
        <h1>The Three Doshas</h1>
        <p>
          Read each description carefully. Which one feels most like you — right
          now, today?
        </p>
      </div>
      <div className="dosha-cards">
        {Object.entries(DOSHAS).map(([key, data]) => (
          <DoshaCard
            key={key}
            dosha={key}
            data={data}
            onSelect={handleSelect}
            selected={selected === key}
          />
        ))}
      </div>
      {selected && (
        <div className="selector-confirm">
          <p>
            You selected <strong>{DOSHAS[selected].name}</strong> — does this
            feel right?
          </p>
          <button
            className="btn-primary"
            style={{ background: DOSHAS[selected].accent }}
            onClick={() => onSelect(selected)}
          >
            Yes, show me my guide →
          </button>
        </div>
      )}
    </div>
  );
}

function Guide({ dosha, onReset }) {
  const data = DOSHAS[dosha];
  const g = data.guide;
  const [section, setSection] = useState("overview");

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "food", label: "Food" },
    { id: "yoga", label: "Yoga" },
    { id: "lifestyle", label: "Lifestyle" },
    { id: "affirmation", label: "Affirmation" },
  ];

  return (
    <div
      className="screen guide-screen"
      style={{
        "--dosha-color": data.color,
        "--dosha-light": data.light,
        "--dosha-accent": data.accent,
      }}
    >
      <div className="guide-hero">
        <div className="guide-hero-badge">{data.emoji} Your Dosha Today</div>
        <h1 className="guide-title">{data.name}</h1>
        <p className="guide-subtitle">{data.tagline}</p>
      </div>

      <div className="guide-tabs">
        {sections.map((s) => (
          <button
            key={s.id}
            className={`guide-tab ${
              section === s.id ? "guide-tab--active" : ""
            }`}
            onClick={() => setSection(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="guide-content">
        {section === "overview" && (
          <div className="guide-section">
            <p className="guide-overview">{g.overview}</p>
            <div className="guide-affirmation-preview">
              <span className="affirmation-label">Your affirmation</span>
              <blockquote>"{g.affirmation}"</blockquote>
            </div>
          </div>
        )}

        {section === "food" && (
          <div className="guide-section">
            <h3>{g.food.title}</h3>
            <div className="food-grid">
              <div className="food-col food-col--eat">
                <div className="food-col-title">✓ Favour</div>
                {g.food.eat.map((item, i) => (
                  <div key={i} className="food-item">
                    {item}
                  </div>
                ))}
              </div>
              <div className="food-col food-col--avoid">
                <div className="food-col-title">✗ Reduce</div>
                {g.food.avoid.map((item, i) => (
                  <div key={i} className="food-item">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === "yoga" && (
          <div className="guide-section">
            <h3>{g.yoga.title}</h3>
            <p className="yoga-description">{g.yoga.description}</p>
            <div className="yoga-tip">
              <span>💡</span> {g.yoga.tip}
            </div>
          </div>
        )}

        {section === "lifestyle" && (
          <div className="guide-section">
            <h3>Daily Lifestyle Tips</h3>
            <div className="lifestyle-list">
              {g.lifestyle.map((tip, i) => (
                <div key={i} className="lifestyle-item">
                  <span className="lifestyle-num">{i + 1}</span>
                  <span>{tip}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "affirmation" && (
          <div className="guide-section affirmation-section">
            <h3>Your Daily Affirmation</h3>
            <blockquote className="affirmation-big">
              "{g.affirmation}"
            </blockquote>
            <p>
              Repeat this to yourself three times — morning, midday, and
              evening. Say it slowly and mean it.
            </p>
          </div>
        )}
      </div>

      <button className="btn-reset" onClick={onReset}>
        ← Start over
      </button>
    </div>
  );
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState("intro");
  const [selectedDosha, setSelectedDosha] = useState(null);

  function handleStart() {
    setScreen("selector");
  }
  function handleSelect(dosha) {
    setSelectedDosha(dosha);
    setScreen("guide");
  }
  function handleReset() {
    setSelectedDosha(null);
    setScreen("intro");
  }

  return (
    <div className="app">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        body {
          font-family: 'DM Sans', sans-serif;
          background: #FAFAF8;
          color: #2C2C2A;
          min-height: 100vh;
        }

        .app {
          min-height: 100vh;
          background: #FAFAF8;
        }

        .screen {
          max-width: 760px;
          margin: 0 auto;
          padding: clamp(24px, 5vw, 60px) clamp(16px, 4vw, 32px);
        }

        /* ── Intro ── */
        .intro-screen {
          text-align: center;
          padding-top: clamp(48px, 10vh, 100px);
        }

        .intro-badge {
          display: inline-block;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #8B9DC3;
          border: 1px solid #8B9DC3;
          padding: 6px 16px;
          border-radius: 20px;
          margin-bottom: 28px;
        }

        .intro-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(42px, 8vw, 72px);
          font-weight: 300;
          line-height: 1.1;
          color: #1A1A18;
          margin-bottom: 28px;
          letter-spacing: -1px;
        }

        .intro-subtitle {
          font-size: clamp(15px, 2.5vw, 17px);
          line-height: 1.8;
          color: #5C5C58;
          margin-bottom: 20px;
          max-width: 560px;
          margin-left: auto;
          margin-right: auto;
        }

        .intro-body {
          font-size: clamp(14px, 2vw, 15px);
          line-height: 1.8;
          color: #7A7A74;
          margin-bottom: 44px;
          max-width: 520px;
          margin-left: auto;
          margin-right: auto;
        }

        /* ── Buttons ── */
        .btn-primary {
          display: inline-block;
          background: #2C2C2A;
          color: #FAFAF8;
          border: none;
          padding: 14px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.5px;
          border-radius: 4px;
          cursor: pointer;
          transition: opacity 0.2s ease, transform 0.2s ease;
        }

        .btn-primary:hover {
          opacity: 0.85;
          transform: translateY(-1px);
        }

        .btn-reset {
          background: transparent;
          border: 1px solid #DDDDD8;
          color: #7A7A74;
          padding: 10px 24px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 32px;
          transition: border-color 0.2s, color 0.2s;
        }

        .btn-reset:hover {
          border-color: #2C2C2A;
          color: #2C2C2A;
        }

        /* ── Selector ── */
        .selector-screen {
          max-width: 900px;
        }

        .selector-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .selector-header h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(32px, 6vw, 52px);
          font-weight: 300;
          color: #1A1A18;
          margin-bottom: 12px;
          letter-spacing: -0.5px;
        }

        .selector-header p {
          font-size: 15px;
          color: #7A7A74;
          line-height: 1.7;
        }

        .dosha-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 32px;
        }

        @media (min-width: 700px) {
          .dosha-cards {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .dosha-card {
          background: var(--dosha-light);
          border: 2px solid transparent;
          border-radius: 12px;
          padding: clamp(20px, 3vw, 28px);
          cursor: pointer;
          transition: border-color 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
          position: relative;
        }

        .dosha-card:hover {
          border-color: var(--dosha-color);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }

        .dosha-card--selected {
          border-color: var(--dosha-accent) !important;
          box-shadow: 0 0 0 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.1);
        }

        .dosha-card-header {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 16px;
          position: relative;
        }

        .dosha-emoji {
          font-size: 28px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .dosha-element {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--dosha-accent);
          margin-bottom: 2px;
        }

        .dosha-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(24px, 4vw, 30px);
          font-weight: 400;
          color: #1A1A18;
          line-height: 1;
          margin-bottom: 4px;
        }

        .dosha-tagline {
          font-size: 12px;
          color: #7A7A74;
          font-style: italic;
        }

        .dosha-check {
          position: absolute;
          top: 0;
          right: 0;
          width: 28px;
          height: 28px;
          background: var(--dosha-accent);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 600;
        }

        .dosha-description {
          font-size: 13px;
          line-height: 1.75;
          color: #4A4A46;
          margin-bottom: 16px;
        }

        .dosha-traits {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 16px;
        }

        .trait-pill {
          background: white;
          border: 1px solid var(--dosha-color);
          color: var(--dosha-accent);
          font-size: 11px;
          padding: 3px 10px;
          border-radius: 20px;
          font-weight: 500;
        }

        .dosha-imbalance {
          font-size: 12px;
          color: #7A7A74;
          border-top: 1px solid var(--dosha-color);
          padding-top: 12px;
          line-height: 1.6;
        }

        .selector-confirm {
          text-align: center;
          background: white;
          border: 1px solid #DDDDD8;
          border-radius: 10px;
          padding: 24px;
          animation: fadeUp 0.3s ease;
        }

        .selector-confirm p {
          font-size: 15px;
          color: #5C5C58;
          margin-bottom: 16px;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Guide ── */
        .guide-screen {
          max-width: 700px;
        }

        .guide-hero {
          text-align: center;
          padding: 40px 0 32px;
          border-bottom: 1px solid #DDDDD8;
          margin-bottom: 28px;
        }

        .guide-hero-badge {
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--dosha-accent);
          margin-bottom: 12px;
        }

        .guide-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(48px, 10vw, 80px);
          font-weight: 300;
          color: var(--dosha-accent);
          line-height: 1;
          margin-bottom: 8px;
          letter-spacing: -1px;
        }

        .guide-subtitle {
          font-size: 15px;
          color: #7A7A74;
          font-style: italic;
        }

        .guide-tabs {
          display: flex;
          gap: 4px;
          overflow-x: auto;
          padding-bottom: 4px;
          margin-bottom: 28px;
          -webkit-overflow-scrolling: touch;
        }

        .guide-tab {
          flex-shrink: 0;
          background: transparent;
          border: 1px solid #DDDDD8;
          color: #7A7A74;
          padding: 8px 18px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
        }

        .guide-tab:hover {
          border-color: var(--dosha-color);
          color: var(--dosha-accent);
        }

        .guide-tab--active {
          background: var(--dosha-accent);
          border-color: var(--dosha-accent);
          color: white;
        }

        .guide-content {
          animation: fadeUp 0.25s ease;
        }

        .guide-section h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 4vw, 26px);
          font-weight: 400;
          color: #1A1A18;
          margin-bottom: 16px;
        }

        .guide-overview {
          font-size: 16px;
          line-height: 1.8;
          color: #4A4A46;
          margin-bottom: 28px;
          padding: 20px 24px;
          background: var(--dosha-light);
          border-left: 3px solid var(--dosha-accent);
          border-radius: 4px;
        }

        .guide-affirmation-preview {
          text-align: center;
          padding: 24px;
          background: white;
          border: 1px solid #DDDDD8;
          border-radius: 8px;
        }

        .affirmation-label {
          display: block;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: var(--dosha-accent);
          margin-bottom: 10px;
        }

        .guide-affirmation-preview blockquote {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 3.5vw, 22px);
          font-style: italic;
          color: #2C2C2A;
          line-height: 1.6;
          border: none;
          padding: 0;
        }

        /* Food */
        .food-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        @media (max-width: 480px) {
          .food-grid { grid-template-columns: 1fr; }
        }

        .food-col {
          border-radius: 8px;
          padding: 16px;
        }

        .food-col--eat {
          background: #F0F7F3;
        }

        .food-col--avoid {
          background: #FDF4F0;
        }

        .food-col-title {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
          color: #2C2C2A;
        }

        .food-item {
          font-size: 13px;
          color: #4A4A46;
          padding: 6px 0;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          line-height: 1.5;
        }

        .food-item:last-child { border-bottom: none; }

        /* Yoga */
        .yoga-description {
          font-size: 15px;
          line-height: 1.85;
          color: #4A4A46;
          margin-bottom: 20px;
          padding: 20px;
          background: var(--dosha-light);
          border-radius: 8px;
        }

        .yoga-tip {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          font-size: 14px;
          color: #5C5C58;
          font-style: italic;
          padding: 16px;
          background: white;
          border: 1px solid #DDDDD8;
          border-radius: 8px;
        }

        /* Lifestyle */
        .lifestyle-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .lifestyle-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 16px;
          background: white;
          border: 1px solid #DDDDD8;
          border-radius: 8px;
          font-size: 14px;
          color: #4A4A46;
          line-height: 1.6;
        }

        .lifestyle-num {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          background: var(--dosha-light);
          color: var(--dosha-accent);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 600;
        }

        /* Affirmation */
        .affirmation-section {
          text-align: center;
          padding: 20px 0;
        }

        .affirmation-big {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(22px, 5vw, 34px);
          font-style: italic;
          font-weight: 300;
          color: var(--dosha-accent);
          line-height: 1.5;
          border: none;
          padding: 32px 20px;
          background: var(--dosha-light);
          border-radius: 10px;
          margin: 20px 0 24px;
          display: block;
        }

        .affirmation-section p {
          font-size: 14px;
          color: #7A7A74;
          line-height: 1.7;
        }
      `}</style>

      {screen === "intro" && <Intro onStart={handleStart} />}
      {screen === "selector" && <DoshaSelector onSelect={handleSelect} />}
      {screen === "guide" && selectedDosha && (
        <Guide dosha={selectedDosha} onReset={handleReset} />
      )}
    </div>
  );
}
