import './hero.css';
import SocialIcons from '../SocialIcons/SocialIcons';

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
              <SocialIcons/>
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
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="projects_container">
              <h2>PROJECTS LIST HERE</h2>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="about_me_bio">
              <h2>Hey There!</h2>
              <p>
                I`m Jordan Atkins, a junior full stack developer with 14 years of experience in the oil and gas industry as a welder. My career has been defined by a passion for solving problems, and creating things with my hands. This has lead me to a healthier future by thriving in gaining hands on experience building user-friendly websites and collaborating on innovative projects. I`m also an avid enthusiast of the auto and gaming industries, constantly seeking to blend my technical expertise with these personal interests. As I continue to expand my skills, my goal is to build amazing digital experiences and contribute to dynamic teams in delivering outstanding results.
              </p>
              <SocialIcons/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
