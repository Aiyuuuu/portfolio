import Header from "./components/Header";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

import "./App.css";

function App() {
  return <>
    <Header></Header>
    <Intro id={"intro"}></Intro>
    <Projects id={"projects"}></Projects>
    <About  id={"about"}></About>
    <Skills  id={"skills"}></Skills>
    <Contact  id={"contact"}></Contact>
  </>;
}

export default App;
