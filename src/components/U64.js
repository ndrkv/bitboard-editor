import { useEffect, useRef, useState } from "react";
import { NotificationManager } from "react-notifications";
import { CopyOutline as IconCopyOutline } from "react-ionicons";

import { bin2hex } from "./Convert";

// U64 stands for Unsigned 64-bit
const U64 = ({ board, updateBoardFromU64 }) => {
  const [u64, setU64] = useState("");
  const inputRef = useRef();

  const copyToClipboard = () => {
    inputRef.current.select();
    document.execCommand("copy");
    inputRef.current.blur();
    NotificationManager.success("Copied successfully");
  };

  useEffect(() => {
    let bin = "";
    for (let i = 56; i >= 0; i -= 8) {
      bin += board.slice(i, i + 8).join("");
    }
    setU64("0x" + bin2hex([...bin].reverse().join("")));
  }, [board, setU64]);

  return (
    <div className="u64-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateBoardFromU64(u64);
        }}
      >
        <input
          value={u64}
          ref={inputRef}
          onBlur={() => updateBoardFromU64(u64)}
          onChange={(e) => setU64(e.target.value)}
        />
      </form>
      <IconCopyOutline
        onClick={copyToClipboard}
        className="copy-icon"
        width="20px"
        height="20px"
        color="white"
      />
    </div>
  );
};

export default U64;
