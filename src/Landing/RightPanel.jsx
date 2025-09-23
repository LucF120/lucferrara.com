import Skills from "./Skills";
import Resources from "./Resources";
import Contact from './Contact';
import Projects from "./Projects";

export default function RightPanel () {
    return (
        <div className="d-flex flex-column align-items-center">
              <div className="d-flex justify-content-center">
                <img src="me.jpg" 
                    style={{
                      width: "min(200px, 100%)",
                      height: "auto",
                      objectFit: "contain",
                      display: "block"
                    }}/>
              </div>
              <Contact />
              <Projects />
              <Resources />
              <Skills />
              <div className="d-flex justify-content-center">
                <img src="me_graduation.jpg" 
                    style={{
                      width: "min(200px, 100%)",
                      height: "auto",
                      objectFit: "contain",
                      display: "block"
                    }}/>
              </div>
          </div>
    );
}