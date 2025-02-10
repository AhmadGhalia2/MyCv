import { useEffect } from "react";
import './css/style.css'
import './css/css/main-style.css'
import './css/css/main.css'
export default function DiceGame() {
  useEffect(() => {
    // Import the script logic dynamically
    const script = document.createElement("script");
    script.src = "/js/main.js"; // Adjust the path to your main.js file
    script.type = "module";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove the script and event listeners when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      {/* <Header /> */}
      <main>
        <div className="main-content">
        <h1 style={{ color: "red" }}>Not ready yet ...</h1>

          <h1>Dice game 21</h1>
          <p>
            Play a game of 21 using dice. You start, roll, and try to get to 21 but not over. Then it is the computer's
            turn. The computer wins on equal and will roll up to 18 and then stop.
          </p>
          <button id="start">Start/restart game</button>
          <div id="player-area" className="hidden">
            <h1>
              Player <span className="hidden" id="player_winner">Winner</span>
            </h1>
            <button id="roll">Roll</button>
            <button id="stop">Stop</button>
            <p>
              <span id="player-sum"></span>
              <span id="player-rolls" className="dice"></span>
            </p>
          </div>

          <div id="computer-area" className="hidden">
            <h1>
              Computer <span className="hidden" id="computer_winner">Winner</span>
            </h1>
            <button id="computer-roll">Let me roll the dice...</button>
            <p>
              <span id="computer-sum"></span>
              <span id="computer-rolls" className="dice"></span>
            </p>
          </div>
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
