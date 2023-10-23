import React from "react";
import  github from  "./Images/bxl-github.svg";
import  twitter from  "./Images/bxl-twitter.svg";
import  linkedin from  "./Images/bxl-linkedin.svg";
import  profilepics from  "./Images/1671114250642.jpg";


function HeroSection() {
  return (
    <section className="herosection" id="herosect">
      <div className="herobio">
        <h1>Hi, I'm Favour Arum</h1>
        <h2>Frontend Developer</h2>
        <p>
          Crafting digital dreams into <strong>reality!</strong> I'm a
          passionate and disciplined web developer with an intuitive flair for
          creating awe-inspiring websites and cutting-edge web applications.
          <strong>Let's elevate your online presence together!</strong>
        </p>
        <div className="btn">
          <button>
            <a
              href="mailto: nwajiudo@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Hire Me
            </a>
          </button>
          <button>
            <a href="https://t.me/heiskingsxn" target="_blank" rel="noreferrer">
              Let's Talk{" "}
            </a>
          </button>
        </div>
        <div className="socials">
          <a
            href="https://github.com/Kingsxn/"
            target="_blank"
            rel="noreferrer"
          >
<<<<<<< HEAD
            <img src="../Images/bxl-github.svg" alt="githubimage" className="github" />
=======
            <img
              src= {github}
              alt="githubimage"
              className="github"
            />
>>>>>>> second-main
          </a>
          <a
            href="https://www.linkedin.com/in/favour-arum-861639288/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin" className="linkedin" />
          </a>
          <a href="https://twitter.com/kvngfx" target="_blank" rel="noreferrer">
<<<<<<< HEAD
            <img src="../bxl-twitter.svg" alt="twitter" className="twitter" />
=======
            <img src={twitter} alt="twitter" className="twitter" />
>>>>>>> second-main
          </a>
        </div>
      </div>

      <div className="homeimg">
        <img src={profilepics} alt="ProfilePicture" />
      </div>
    </section>
  );
}

export default HeroSection;
