import { useState } from "react";
import "./App.css";
import Display from "./Display";
import Input from "./Input";

function App() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value.toLowerCase())
  }
  return (
    <div className="App">
      <Display value={value}/>
      <Input value={value}  handleChange={handleChange}/>
    </div>
  );
}

export default App;
