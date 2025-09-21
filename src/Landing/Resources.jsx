import { Link } from "react-router-dom";

export default function Resources() {
    return (
        <div className="pt-4 d-flex flex-column">
            <h3>Resources</h3>
            <Link to="https://linkedin.com/in/lucferrara">LinkedIn</Link>
            <Link to="https://github.com/lucf120">GitHub</Link>
        </div>
    );
}