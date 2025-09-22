import { Link } from "react-router-dom";

export default function Projects() {
    return (
        <div className="pt-4 d-flex flex-column">
            <h3>Projects</h3>
            <Link to="/wordle/" reloadDocument>Wordle</Link>
            <Link to="chess">Chess</Link>
            <Link to="https://github.com/LucF120/AI_Pac_Man">AI Pac Man</Link>
            {/* <Link to="https://luc120-kanbas-react-web-app.netlify.app/#/Kanbas/Account/Signin">Kanbas</Link> */}
        </div>
    );
}
