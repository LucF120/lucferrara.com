import { Link } from "react-router-dom";

export default function Chess() {
    return (
      <div className="d-flex flex-column align-items-center pt-4">
        <Link to="/">Back</Link>
        <h1 className="pt-4">Work in progress - check back later!</h1>
        <Link to="https://github.com/LucF120/LUChess">https://github.com/LucF120/LUChess</Link>  
      </div>
    );
}