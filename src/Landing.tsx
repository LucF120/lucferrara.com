import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div>
            <h1>Coming Soon!</h1>
            <p>Luc Ferrara's site is coming soon. Stay tuned!</p>
            <Link key="/Chess" to="/Chess">Chess</Link>
        </div>
    );   
}