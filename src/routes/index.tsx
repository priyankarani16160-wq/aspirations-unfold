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

      <section id="about" className="font-poppins bg-navy px-[10%] py-[80px] text-white">
        <h2 className="section-title mb-16 text-center text-[32px] font-bold sm:text-[38px]">
          About <span className="text-cyan">Me</span>
        </h2>
        <div className="about-container flex flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-16">
          <div className="about-image w-full max-w-[400px] lg:w-[40%]">
            <div className="overflow-hidden rounded-2xl border-[5px] border-cyan shadow-[0_0_30px_#00abf0]">
              <img
                src={profileAsset.url}
                alt="Priyanka Rani"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="about-content w-full lg:w-[60%]">
            <h3 className="mb-5 text-[26px] font-semibold">
              Hi, I'm Priyanka Rani 👋
            </h3>
            <p className="mb-4 leading-[1.8] text-text-muted">
              I am a First-Year B.Tech Information Technology student and
              Programmer Intern with a strong passion for Software Development,
              Web Development, and Artificial Intelligence.
            </p>
            <p className="mb-4 leading-[1.8] text-text-muted">
              I enjoy learning new technologies, solving real-world problems,
              and building modern, responsive websites using HTML, CSS,
              JavaScript, Python, and React.
            </p>
            <p className="mb-8 leading-[1.8] text-text-muted">
              My goal is to become a skilled Software Engineer and contribute
              to innovative technology solutions while continuously improving
              my technical and problem-solving skills.
            </p>
            <div className="about-info mb-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="info-card rounded-xl bg-[#0f2640] p-5 transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_0_20px_#00abf0]">
                <h4 className="mb-1 text-sm font-medium text-cyan">Name</h4>
                <span className="text-lg font-semibold">Priyanka Rani</span>
              </div>
              <div className="info-card rounded-xl bg-[#0f2640] p-5 transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_0_20px_#00abf0]">
                <h4 className="mb-1 text-sm font-medium text-cyan">Education</h4>
                <span className="text-lg font-semibold">B.Tech IT (2029)</span>
              </div>
              <div className="info-card rounded-xl bg-[#0f2640] p-5 transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_0_20px_#00abf0]">
                <h4 className="mb-1 text-sm font-medium text-cyan">College</h4>
                <span className="text-lg font-semibold">UCET</span>
              </div>
              <div className="info-card rounded-xl bg-[#0f2640] p-5 transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_0_20px_#00abf0]">
                <h4 className="mb-1 text-sm font-medium text-cyan">Experience</h4>
                <span className="text-lg font-semibold">Programmer Intern</span>
              </div>
            </div>
            <a
              href="#contact"
              className="about-btn inline-block rounded-full bg-cyan px-9 py-4 text-white no-underline transition-all duration-[400ms] hover:-translate-y-1 hover:shadow-[0_0_25px_#00abf0]"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
