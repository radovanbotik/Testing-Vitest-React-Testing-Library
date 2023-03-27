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
  const [isDisabled, setIsDisabled] = useState(false);

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
        className={`${buttonStyle === "red" && buttonSpec.red.bg} ${buttonStyle === "blue" && buttonSpec.blue.bg} ${
          isDisabled && "bg-zinc-500"
        }`}
        onClick={changeButtonStyle}
        disabled={isDisabled}
      >
        {buttonStyle === "red" && buttonSpec.red.text}
        {buttonStyle === "blue" && buttonSpec.blue.text}
      </button>
      <label htmlFor="disable-button">disable button</label>
      <input id="disable-button" type="checkbox" role="checkbox" onClick={e => setIsDisabled(e.target.checked)} />
    </div>
  );
}

export default App;
