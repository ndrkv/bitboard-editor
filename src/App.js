import { useState } from "react";
import { NotificationContainer } from "react-notifications";

import Board from "./components/Board";
import U64 from "./components/U64";
import { hex2bin } from "./components/Convert";

import "react-notifications/lib/notifications.css";
import "./App.scss";

function App() {
  const [board, setBoard] = useState(Array(64).fill(0));
  const [isIndicesVisible, setIsIndicesVisible] = useState(true);

  const toggleBoardCell = (i) => {
    setBoard((b) => {
      let bCopy = Array.from(b);
      bCopy[i] ^= 1;
      return bCopy;
    });
  };

  const updateBoardFromU64 = (u64) => {
    let bin = Array.from(hex2bin(u64).padStart(64, "0"));
    setBoard(() => {
      let newBoard = "";
      for (let i = 0; i <= 56; i += 8) {
        newBoard += bin
          .slice(i, i + 8)
          .reverse()
          .join("");
      }
      return Array.from(newBoard, (cell) => (cell === "1" ? 1 : 0));
    });
  };

  return (
    <div className="main-container">
      <h2>Bitboard Editor</h2>
      <Board
        board={board}
        toggleBoardCell={toggleBoardCell}
        isIndicesVisible={isIndicesVisible}
      />
      <U64 board={board} updateBoardFromU64={updateBoardFromU64} />
      <div className="controls-container">
        <button onClick={() => setBoard(Array(64).fill(0))}>Clear</button>
        <button onClick={() => setBoard((b) => b.map((el) => el ^ 1))}>
          Reverse
        </button>
        <button onClick={() => setIsIndicesVisible((v) => !v)}>
          {isIndicesVisible ? "Hide indexes" : "Show indexes"}
        </button>
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
