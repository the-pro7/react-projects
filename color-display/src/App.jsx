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
    <>
      <Display value={value}/>
      <Input value={value}  handleChange={handleChange}/>
    </>
  );
}

export default App;
