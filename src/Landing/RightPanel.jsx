import Skills from "./Skills";
import Resources from "./Resources";
import Projects from "./Projects";

export default function RightPanel () {
    return (
        <div className="d-flex flex-column align-items-center">
              <div style={{ width: '200px', height: '235px' }}>
                <img src="me.jpg" style={{ width: '200px', height: '235px' }}/>
              </div>
              <Projects />
              <Resources />
              <Skills />
          </div>
    );
}