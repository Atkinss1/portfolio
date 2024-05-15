import './hero.css';

const Hero = () => {
  return (
    <>
      <div className="hero_wrapper">
        <div className="container">
          <img className="profile_thumbnail" src='images/user-2.jpg'/>
            <div className="profile_name">
              <h1>
                <span>
                  - Jordan Atkins -
                </span>
              </h1>
            </div>
              <h3 className='web_dev_title'>
                <span>Full-Stack Web Developer</span>
              </h3>
            <div className="social_media_wrapper">
              <ul className="social_media_icons">
                <li>
                  <a href="https://github.com/Atkinss1">
                    <i className="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/atkins-jordan/">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/atkinsz/">
                    <i class="fa-brands fa-instagram fa-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
        </div>
      </div>

      <div className="about_me_wrapper">
        <div className="about_me_container">
          <div className="about_me">
            <h2>About Me</h2>
          </div>
          <div className="details_container">
            <ul className="about_me_details">
              <li>Full Name: Jordan Atkins</li>
              <li>Phone: (780) 966-7231</li>
              <li>Email: Jordanatkins@live.com</li>
              <li>Stomping Grounds: Edmonton, Alberta</li>
            </ul>
            <div className="about_me_bio">
              <h2>Hey There!</h2>
              <p>
                I’m Jordan Atkins, a full stack developer with 14 years of experience in the oil and gas industry. My career has been defined by a passion for creating seamless, user-friendly websites and collaborating on innovative projects. I’m also an avid enthusiast of the auto and gaming industries, constantly seeking to blend my technical expertise with these personal interests. As I continue to expand my skills, my goal is to build amazing digital experiences and contribute to dynamic teams in delivering outstanding results.
              </p>
              <ul className="social_media_icons">
                <li>
                  <a href="https://github.com/Atkinss1">
                    <i className="fa-brands fa-github fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/atkins-jordan/">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/atkinsz/">
                    <i class="fa-brands fa-instagram fa-2xl"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
