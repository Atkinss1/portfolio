import './hero.css';
import SocialIcons from '../SocialIcons/SocialIcons';
import devData from '../../../public/devData';
import AlternateTimeline from '../TimeLine/TimeLine';

const Hero = () => {
  return (
    <>
      <div className="hero_wrapper">
        <div className="container">
          <img className="profile_thumbnail" src='images/user-2.jpg' alt={`${devData.name}'s Profile`}/>
            <div className="profile_name">
              <h1>
                <span>
                  {devData.name}
                </span>
              </h1>
            </div>
              <h3 className='web_dev_title'>
                <span>{devData.position}</span>
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
            <div className="about_me_bio">
              <h2>Hey There!</h2>
              <p>
                {devData.bio}
              </p>
              <SocialIcons/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="projects_container">
              <h2>PROJECTS</h2>
              <AlternateTimeline/>
            </div>
            <br/>
            <br/>
            <br/>
            <br/>
            <ul className="about_me_details">
              <li>{devData.details.name}</li>
              <li>{devData.details.email}</li>
              <li>{devData.details.location}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
