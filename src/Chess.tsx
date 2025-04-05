import { Link } from "react-router-dom";
import * as client from "./client.ts";
import { useEffect, useState } from "react";

export default function Chess() {
    const [chessGames, setChessGames] = useState<Record<string, any>>({});

    const fetchChessGames = async () => {
        try {
        const games = await client.getChessGames();
        setChessGames(games);
        } catch (error)
        {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchChessGames();
        }, []);

    const createChessGame = async() => {
        try {
            await client.createChessGame();
            fetchChessGames();
        } catch (error) {
            console.log(error);
        }
    }

    return(
        <div>
            <Link key="/" to="/" className="mb-4">Back</Link>
            <div className="mt-4">Chess!</div>
            <button className="btn btn-success" onClick={createChessGame}>Create Game</button>
            {chessGames && Object.keys(chessGames).map((key) => {
            return (
                <div key={key}>
                    {key}: {JSON.stringify(chessGames[key])}
                </div>
             
            )}
            )}
        </div>
    );
}