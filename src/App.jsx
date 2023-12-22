import Contact from "./components/Contact";
import Main from "./components/Main";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import Work from "./components/Work";
const App = () => {
  return (
    <div>
      <SideNav />
      <Main />
      <Work />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
