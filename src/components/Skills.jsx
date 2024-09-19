import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { IoExtensionPuzzle } from "react-icons/io5";
import { LuPresentation } from "react-icons/lu";

function Skills({id}) {
  return (
    <>
      <div className="Skills" id={id}>
        <h1>Skills</h1>
        <div className="skills-section">
          <h2>Languages</h2>
          <div className="skills-list">
            <div className="skill-item">
              <FaHtml5></FaHtml5>
              <span>HTML</span>
            </div>
            <div className="skill-item">
              <FaCss3Alt></FaCss3Alt>
              <span>CSS</span>
            </div>
            <div className="skill-item">
              <FaReact></FaReact>
              <span>REACT JS</span>
            </div>
            <div className="skill-item">
              <FaNodeJs></FaNodeJs>
              <span>NODE JS</span>
            </div>
            <div className="skill-item">
              <FaPython></FaPython>
              <span>PYTHON</span>
            </div>
            <div className="skill-item">
              <TbBrandCpp></TbBrandCpp>
              <span>C++</span>
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h2>Technologies</h2>
          <div className="skills-list">
            <div className="skill-item">
              <VscVscode></VscVscode>
              <span>VS Code</span>
            </div>
            <div className="skill-item">
              <FaGithub></FaGithub>
              <span>GitHub</span>
            </div>
          </div>
        </div>
        <div className="skills-section">
          <h2>Others</h2>
          <div className="skills-list">
            <div className="skill-item">
                <IoExtensionPuzzle></IoExtensionPuzzle>
              <span>Problem Solving</span>
            </div>
            <div className="skill-item">
                <LuPresentation></LuPresentation>
              <span>Presentation</span>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
