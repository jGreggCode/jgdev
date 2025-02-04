import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/JGDEV-Resume.pdf";
import { useTheme } from "../../common/ThemeContext";
import { useState, useEffect } from "react";

const Hero = () => {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;

  // Typewrite Effect on H2
  const texts = ["Web Developer", "App Developer", "Freelancer"];
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[index % texts.length];

    if (deleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex(charIndex - 1), 100);
      } else {
        setDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex(charIndex + 1), 100);
      } else {
        setTimeout(() => setDeleting(true), 2000);
      }
    }

    setDisplayText(currentText.substring(0, charIndex));
  }, [charIndex, deleting, index]);

  return (
    <section className={styles.container} id="hero">
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of JGDEV"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode Icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>JGDEV</h1>
        <h2 className={styles.glow}>{displayText}|</h2>
        <span>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedIn.com/" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
        </span>
        <p className={styles.description}>
          I'm a freelance web and app developer, also offering computer
          maintenance services. I build reliable, user-friendly websites and
          systems tailored to your needs. Let’s work together to bring your
          project to life!
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
