import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profileAsset from "@/assets/priyanka-profile-cropped.jpg.asset.json";
import portfolioAsset from "@/assets/project-portfolio.jpg.asset.json";
import voiceAsset from "@/assets/project-voice-assistant.jpg.asset.json";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Priyanka Rani | Portfolio" },
      {
        name: "description",
        content:
          "First-Year B.Tech Information Technology Student | Programmer Intern | Aspiring Software Engineer",
      },
      {
        property: "og:title",
        content: "Priyanka Rani | Portfolio",
      },
      {
        property: "og:description",
        content:
          "First-Year B.Tech Information Technology Student | Programmer Intern | Aspiring Software Engineer",
      },
    ],
  }),
  component: Index,
});

const TYPING_PHRASES = [
  "Aspiring Software Engineer",
  "Programmer Intern",
  "B.Tech IT Student",
];

function TypingEffect() {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = TYPING_PHRASES[phraseIndex];
    const timeout = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const nextText = currentPhrase.slice(0, text.length + 1);
        setText(nextText);
        if (nextText.length === currentPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const nextText = currentPhrase.slice(0, Math.max(text.length - 1, 0));
        setText(nextText);
        if (nextText.length === 0) {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        }
      }
    }, timeout);

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex]);

  return (
    <span>
      {text}
      <span className="animate-blink-cursor" aria-hidden="true">
        |
      </span>
    </span>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.body.classList.add("dark");
      setIsDark(true);
    } else {
      document.body.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    document.body.classList.toggle("dark");
    const next = document.body.classList.contains("dark");
    setIsDark(next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="fixed top-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-cyan bg-navy text-xl shadow-[0_0_20px_rgba(0,171,240,0.4)] transition-transform duration-300 hover:scale-110"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}

function Index() {
  return (
    <>
      <ThemeToggle />

      <section className="font-poppins flex min-h-screen flex-col items-center justify-center gap-16 bg-navy px-[10%] py-[70px] text-white lg:flex-row lg:justify-between lg:gap-8">
        <div className="w-full animate-fade-left text-center lg:w-[55%] lg:text-left">
          <h3 className="text-lg font-medium">Hello, I'm</h3>
          <h1 className="my-4 text-[40px] font-bold leading-tight sm:text-[50px] lg:text-[60px]">
            Priyanka Rani
          </h1>
          <h2 className="h-[45px] text-[34px] text-cyan">
            <TypingEffect />
          </h2>
          <p className="mt-6 leading-[1.8] text-text-muted">
            First-Year B.Tech Information Technology Student | Programmer Intern
            | Aspiring Software Engineer
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-5 lg:justify-start">
            <a
              href="#projects"
              className="inline-block rounded-full bg-cyan px-9 py-4 text-white no-underline transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_0_25px_#00abf0]"
            >
              View Projects
            </a>
            <a
              href="#"
              className="inline-block rounded-full border-2 border-cyan bg-transparent px-9 py-4 text-white no-underline transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_0_25px_#00abf0]"
            >
              Download Resume
            </a>
          </div>
        </div>
        <div className="animate-float-image">
          <div className="flex h-[280px] w-[280px] items-center justify-center overflow-hidden rounded-full border-[6px] border-cyan bg-navy shadow-[0_0_30px_#00abf0] sm:h-[350px] sm:w-[350px]">
            <img
              src={profileAsset.url}
              alt="Priyanka Rani"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="about" className="about">
        <h2 className="section-title">
          About <span>Me</span>
        </h2>
        <div className="about-container">
          <div className="about-content">
            <h3>Hi, I'm Priyanka Rani 👋</h3>
            <p>
              I am a First-Year B.Tech Information Technology student and
              Programmer Intern with a strong passion for Software Development,
              Web Development, and Artificial Intelligence.
            </p>
            <p>
              I enjoy learning new technologies, solving real-world problems,
              and building modern, responsive websites using HTML, CSS,
              JavaScript, Python, and React.
            </p>
            <p>
              My goal is to become a skilled Software Engineer and contribute
              to innovative technology solutions while continuously improving
              my technical and problem-solving skills.
            </p>
            <div className="about-info">
              <div className="info-card">
                <h4>Name</h4>
                <span>Priyanka Rani</span>
              </div>
              <div className="info-card">
                <h4>Education</h4>
                <span>B.Tech IT (2029)</span>
              </div>
              <div className="info-card">
                <h4>College</h4>
                <span>UCET</span>
              </div>
              <div className="info-card">
                <h4>Experience</h4>
                <span>Programmer Intern</span>
              </div>
            </div>
            <a href="#contact" className="about-btn">
              Let's Connect
            </a>
          </div>
        </div>
      </section>

      <section id="skills" className="skills">
        <h2 className="section-title">
          My <span>Skills</span>
        </h2>
        <div className="skills-container">
          <SkillCard name="Python" level="90%" skillClass="python" />
          <SkillCard name="C Programming" level="80%" skillClass="c" />
          <SkillCard name="HTML" level="95%" skillClass="html" />
          <SkillCard name="CSS" level="90%" skillClass="css" />
          <SkillCard name="JavaScript" level="85%" skillClass="js" />
          <SkillCard name="React" level="75%" skillClass="react" />
          <SkillCard name="MySQL" level="80%" skillClass="mysql" />
          <SkillCard name="Git & GitHub" level="85%" skillClass="git" />
        </div>
      </section>

      <section id="projects" className="projects">
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>
        <div className="projects-container">
          <div className="project-card">
            <img
              src={portfolioAsset.url}
              alt="Portfolio Website"
              loading="lazy"
              width={1024}
              height={600}
            />
            <div className="project-content">
              <h3>Portfolio Website</h3>
              <p>
                A modern, responsive portfolio website showcasing my skills,
                projects, education, certifications, and contact information
                with beautiful animations.
              </p>
              <div className="tech-stack">
                <span>HTML</span>
                <span>CSS</span>
                <span>JavaScript</span>
              </div>
              <div className="project-buttons">
                <a
                  href="https://github.com/priyankarani16160-wq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a href="#" className="btn btn-outline">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <img
              src={voiceAsset.url}
              alt="AI Voice Assistant"
              loading="lazy"
              width={1024}
              height={600}
            />
            <div className="project-content">
              <h3>AI Voice Assistant</h3>
              <p>
                A Python-based voice assistant capable of opening applications,
                searching the web, and responding to voice commands.
              </p>
              <div className="tech-stack">
                <span>Python</span>
                <span>SpeechRecognition</span>
                <span>pyttsx3</span>
              </div>
              <div className="project-buttons">
                <a
                  href="https://github.com/priyankarani16160-wq"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
                <a href="#" className="btn btn-outline">
                  Live Demo
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="certifications" className="certifications">
        <h2 className="section-title">
          My <span>Certifications</span>
        </h2>
        <div className="certification-container">
          <div className="certificate-card">
            <div className="certificate-icon" aria-hidden="true">🛡️</div>
            <h3>Cybersecurity Course</h3>
            <h4>Cisco Networking Academy</h4>
            <p>
              Successfully completed a cybersecurity course covering networking
              fundamentals, cyber threats, online safety, and security best
              practices.
            </p>
            <a href="#" className="certificate-btn">
              View Certificate
            </a>
          </div>

          <div className="certificate-card">
            <div className="certificate-icon" aria-hidden="true">💻</div>
            <h3>Software Engineering Job Simulation</h3>
            <h4>JPMorgan Chase & Co.</h4>
            <p>
              Completed a virtual software engineering job simulation focused on
              real-world development tasks and problem-solving.
            </p>
            <a href="#" className="certificate-btn">
              View Certificate
            </a>
          </div>

          <div className="certificate-card">
            <div className="certificate-icon" aria-hidden="true">🤖</div>
            <h3>Yuva AI</h3>
            <h4>FutureSkills Prime</h4>
            <p>
              Learned Artificial Intelligence fundamentals, machine learning
              concepts, and emerging AI technologies.
            </p>
            <a href="#" className="certificate-btn">
              View Certificate
            </a>
          </div>

          <div className="certificate-card">
            <div className="certificate-icon" aria-hidden="true">🔐</div>
            <h3>Cyber Job Simulation</h3>
            <h4>Deloitte</h4>
            <p>
              Completed a cybersecurity virtual experience involving threat
              detection, investigation, and cyber risk analysis.
            </p>
            <a href="#" className="certificate-btn">
              View Certificate
            </a>
          </div>

          <div className="certificate-card">
            <div className="certificate-icon" aria-hidden="true">✨</div>
            <h3>Introduction to Generative AI Studio</h3>
            <h4>Simplilearn</h4>
            <p>
              Explored Generative AI, prompt engineering, and practical AI
              applications using modern tools.
            </p>
            <a href="#" className="certificate-btn">
              View Certificate
            </a>
          </div>

          <div className="certificate-card">
            <div className="certificate-icon" aria-hidden="true">🎓</div>
            <h3>TCS iON Career Edge – Young Professional</h3>
            <h4>Tata Consultancy Services</h4>
            <p>
              Developed professional communication, business etiquette,
              presentation, and workplace readiness skills.
            </p>
            <a href="#" className="certificate-btn">
              View Certificate
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2 className="section-title">
          Contact <span>Me</span>
        </h2>
        <div className="contact-container">
          <div className="contact-info">
            <h3>Let's Connect!</h3>
            <p>
              I'm always open to internship opportunities, collaborations, and
              exciting projects. Feel free to contact me.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  📧
                </span>
                <a href="mailto:priyankarani16160@gmail.com">
                  priyankarani16160@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  💼
                </span>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon" aria-hidden="true">
                  🐙
                </span>
                <a
                  href="https://github.com/priyankarani16160-wq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </div>
            </div>


          </div>
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows={5} required />
            <button type="submit" className="contact-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>



    </>
  );
}

function SkillCard({
  name,
  level,
  skillClass,
}: {
  name: string;
  level: string;
  skillClass: string;
}) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="skill-card">
      <h3>{name}</h3>
      <div className="progress-bar">
        <div className={`progress ${animated ? skillClass : ""}`} />
      </div>
      <span>{level}</span>
    </div>
  );
}
