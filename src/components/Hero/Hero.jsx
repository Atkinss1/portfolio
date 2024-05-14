import './hero.css';

const Hero = () => {
  return (
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
  );
};

export default Hero;
