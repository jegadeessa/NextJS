import Banner from "../banner/banner";
import Intro from "../intro/intro";
import Skills from "../skills/skills";
import Projects from "../projects/projects";
import Timeline from "../timeline/timeline";

export default function Main() {
  return (
    <main>
      <Banner></Banner>
      <Intro></Intro>
      <Skills></Skills>
      <Timeline></Timeline>
      <Projects></Projects>
    </main>
  );
}
