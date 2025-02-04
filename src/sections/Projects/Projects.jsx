import styles from "./ProjectsStyles.module.css";
import jost from "../../assets/jost.jpg";
import projectzilch from "../../assets/projectzilch.png";
import ProjectCard from "../../common/ProjectCard";
import githubLogo from "../../assets/githubLogo.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">My Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={jost}
          link="https://github.com/jGreggCode/JOST"
          title="JOST"
          description="Web-based dashboard for Jasdy Shop"
        />
        <ProjectCard
          src={projectzilch}
          link=""
          title="Project Zilch"
          description="A multi purpose discord bot"
        />
        <ProjectCard
          src={githubLogo}
          link=""
          title="Private"
          description="View private projects..."
        />
      </div>
    </section>
  );
}

export default Projects;
