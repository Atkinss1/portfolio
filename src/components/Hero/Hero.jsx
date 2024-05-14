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
            <h3>
              <span>Web Developer</span>
            </h3>
          <div className="social_media_wrapper">
            <ul className="social_media_icons">
              <li><a href="">GitHub</a></li>
              <li><a href="">LinkedIn</a></li>
            </ul>
          </div>
          
      </div>
    </div>
  );
};

export default Hero;
