import styles from "/src/styles/about.module.scss";
import Header from "/src/components/normie/Header";
import { useState, useEffect } from "react";

const About = () => {
  const imageArr = ["hero", "break", "coffee"];
  const [slider, setSlider] = useState("hero");

  useEffect(() => {
    const element = document.getElementById(slider);
    element.style.display = "block";
  }, [slider]);

  function nextImg() {
    const index = imageArr.indexOf(slider);
    if (index === 2) {
      const newEl = imageArr[0];
      const prevImg = document.getElementById(slider);
      prevImg.style.display = "none";
      setSlider(newEl);
    } else {
      const newEl = imageArr[index + 1];
      const prevImg = document.getElementById(slider);
      prevImg.style.display = "none";
      setSlider(newEl);
    }
  }

  function previousImg() {
    const index = imageArr.indexOf(slider);
    if (index === 0) {
      const newEl = imageArr[2];
      const prevImg = document.getElementById(slider);
      prevImg.style.display = "none";
      setSlider(newEl);
    } else {
      const newEl = imageArr[index - 1];
      const prevImg = document.getElementById(slider);
      prevImg.style.display = "none";
      setSlider(newEl);
    }
  }

  return (
    <section className={styles.about_container}>
      <Header />
      <div className={styles.about}>
        <div className={styles.slider}>
          <div className={styles.images}>
            <img
              src="/assets/imgs/slider/hero.JPG"
              alt="hero photo"
              id="hero"
            />
            <img
              src="/assets/imgs/slider/break.jpg"
              alt="break photo"
              id="break"
            />
            <img
              src="/assets/imgs/slider/coffee.jpg"
              alt="coffee photo"
              id="coffee"
            />
          </div>
          <div className={styles.nav}>
            <button onClick={previousImg}>&lt;</button>
            <button onClick={nextImg}>&gt;</button>
          </div>
        </div>
        <div className={styles.info}>
          <h2>Breaker, Web Developer, Photographer</h2>
          <br />
          <p>
            Hey I&apos;m Dylon. I am a very ambitious person who is determined
            to make &apos;delusional&apos; goals become reality. I strongly
            believe that you can achieve anything with enough hard work.
            <br />
            <br />
            Let&apos;s connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
