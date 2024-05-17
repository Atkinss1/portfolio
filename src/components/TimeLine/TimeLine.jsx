import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import './timeline.css';
import projectData from '../../../public/projectData';
import Reveal from '../../hooks/Reveal';

export default function AlternateTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Reveal>
            <h1>{projectData.propBox.name}</h1>
            <a href={projectData.propBox.link}><img className="timeline_img" src={projectData.propBox.image} alt="PropBox Application" /></a>
            <br/>
            {projectData.propBox.description}
            <br/>
            <br/>
            {projectData.propBox.techStack}
          </Reveal>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Reveal>
            <h1>{projectData.tweeter.name}</h1>
            <a href={projectData.tweeter.link}><img className="timeline_img" src={projectData.tweeter.image} alt="PropBox Application" /></a>
            <br/>
            {projectData.tweeter.description}
            <br/>
            <br/>
            {projectData.tweeter.techStack}
          </Reveal>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Reveal>
            <h1>{projectData.trueRetro.name}</h1>
            <a href={projectData.trueRetro.link}><img className="timeline_img" src={projectData.trueRetro.image} alt="PropBox Application" /></a>
            <br/>
            {projectData.trueRetro.description}
            <br/>
            <br/>
            {projectData.trueRetro.techStack}
          </Reveal>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>
          <Reveal>
            <h1>{projectData.chatApp.name}</h1>
            <a href={projectData.chatApp.link}><img className="timeline_img" src={projectData.chatApp.image} alt="PropBox Application" /></a>
            <br/>
            {projectData.chatApp.description}
            <br/>
            <br/>
            {projectData.chatApp.techStack}
          </Reveal>
          </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
