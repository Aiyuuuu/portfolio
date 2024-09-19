import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsLinkedin } from "react-icons/bs";

function Intro(params) {
  return (
    <>
      <div className="intro-1">
        <div className="intro">
          <div className="container">
            <div className="first-text">
              <h1>Hi</h1>
              <h3>I am Ayan Tahir</h3>
            </div>
            <div className="second-text">
              <p>
                Creative and passionate web designer with expertise in crafting
                visually stunning and user-friendly websites.
              </p>
            </div>
          </div>
          <div className="container-2">
            <a href="https://www.linkedin.com/in/ayan-tahir/" target="_blank"><button>Contact Me</button></a>
            
            <div className="links">
             
             <a href="https://github.com/Aiyuuuu" target="_blank"><FaGithub ></FaGithub></a>
              <a href="https://www.facebook.com/aiyuu.dev/" target="_blank"><FaFacebook ></FaFacebook></a>
              <a href="https://www.linkedin.com/in/ayan-tahir/" target="_blank"><BsLinkedin></BsLinkedin></a>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Intro;
