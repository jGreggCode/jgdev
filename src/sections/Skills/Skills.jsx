import styles from "./SkillsStyles.module.css";
import checkmarkLight from "../../assets/checkmark-dark.svg";
import checkmarkDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";

const Skills = () => {
  //const theme = theme === "light" ? checkmarkLight : checkmarkDark;
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkmarkLight} skill="HTML" />
        <SkillList src={checkmarkLight} skill="CSS" />
        <SkillList src={checkmarkLight} skill="Javascript" />
        <SkillList src={checkmarkLight} skill="Typescript" />
        <SkillList src={checkmarkLight} skill="Node" />
        <SkillList src={checkmarkLight} skill="React" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkLight} skill="Java" />
        <SkillList src={checkmarkLight} skill="Python" />
        <SkillList src={checkmarkLight} skill="PHP" />
        <SkillList src={checkmarkLight} skill="C#" />
        <SkillList src={checkmarkLight} skill="C++" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkmarkLight} skill="MYSQL" />
        <SkillList src={checkmarkLight} skill="Mongodb" />
        <SkillList src={checkmarkLight} skill="Git" />
      </div>
    </section>
  );
};

export default Skills;
