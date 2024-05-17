import './hero.css';
import SocialIcons from '../SocialIcons/SocialIcons';
import devData from '../../../public/devData';
import AlternateTimeline from '../TimeLine/TimeLine';
import Reveal from '../../hooks/Reveal';

const Hero = () => {
  return (
    <>
      <div className="hero_wrapper">
        <div className="container">
          <Reveal delay={0.15}>
            <img className="profile_thumbnail" src='images/user-2.jpg' alt={`${devData.name}'s Profile`}/>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="profile_name">
              <h1>
                <span>
                  {devData.name}
                </span>
              </h1>
            </div>
          </Reveal>
          <Reveal delay={0.5}>
              <h3 className='web_dev_title'>
                <span>{devData.position}</span>
              </h3>
            <div className="social_media_wrapper">
              <SocialIcons/>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="about_me_wrapper">
        <div className="about_me_container">
          <Reveal>
          <div className="about_me">
            <h2>About Me</h2>
          </div>
          </Reveal>
          <div className="details_container">
            <div className="about_me_bio">
              <Reveal>
                <h2>Hey There!</h2>
              </Reveal>
              <Reveal>
                <p>
                  {devData.bio}
                </p>
                <SocialIcons/>
              </Reveal>
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
              <Reveal></Reveal>
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
