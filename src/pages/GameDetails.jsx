import { useParams } from "react-router-dom";

export default function GameDetails() {
  const { id } = useParams();
  return (
    <div className="game-details">
      <h1>Game Details Page</h1>
      <p>Game ID: {id}</p>
    </div>
  );
}
