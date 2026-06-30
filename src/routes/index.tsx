import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import profileAsset from "@/assets/priyanka-profile.jpg.asset.json";

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

function Index() {
  return (
    <>
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
    </>
  );
}
