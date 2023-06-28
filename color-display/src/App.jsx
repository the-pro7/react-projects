import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Input from "./Input";

function App() {
  const [value, setValue] = useState("");
  const [hexCode, setHexCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase());
  };
  return (
    <div className="App">
      <Display
        value={value}
        hexCode={hexCode}
        copied={copied}
        setCopied={setCopied}
      />
      <Input
        value={value}
        handleChange={handleChange}
        setHexCode={setHexCode}
      />
    </div>
  );
}

export default App;
