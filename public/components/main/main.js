import Banner from "../banner/banner";
import Intro from "../intro/intro";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Timeline from "../timeline/timeline";

export default function Main(props) {
  return (
    <main>
      <Banner></Banner>
      <Intro
        name={props.data.name}
        location={props.data.location}
        interests={props.data.interests}
      ></Intro>
      <Skills skills={props.data.skills}></Skills>
      <Timeline timeline={props.data.timeline}></Timeline>
      <Projects projects={props.data.projects}></Projects>
    </main>
  );
}
