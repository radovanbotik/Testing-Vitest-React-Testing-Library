import { useState } from "react";

const buttonSpec = {
  red: {
    bg: "bg-red-500",
    text: "change to blue",
  },
  blue: {
    bg: "bg-blue-500",
    text: "change to red",
  },
};

function App() {
  const [buttonStyle, setButtonStyle] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const changeButtonStyle = () => {
    if (buttonStyle === "red") setButtonStyle("blue");
    if (buttonStyle === "blue") setButtonStyle("red");
  };

  return (
    <div className="App">
      {/* <button role="button" style={{ backgroundColor: "red" }}>
        change to blue
      </button> */}
      <button
        role="button"
        className={`${buttonStyle === "red" && buttonSpec.red.bg} ${buttonStyle === "blue" && buttonSpec.blue.bg}`}
        onClick={changeButtonStyle}
        disabled={isChecked}
      >
        {buttonStyle === "red" && buttonSpec.red.text}
        {buttonStyle === "blue" && buttonSpec.blue.text}
      </button>
      <input type="checkbox" role="checkbox" onClick={e => setIsChecked(e.target.checked)} />
    </div>
  );
}

export default App;
