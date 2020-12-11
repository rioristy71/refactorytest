import React, { useState } from "react";
import { Input, Button } from "reactstrap";
import "./App.css";

function App() {

  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [before, setBefore] =  useState(['','']); 

  const reverseMyName = () => { 
    let newInput = before // ['abc', 'asd', 'qwe']
    newInput.push(input);
    newInput.shift();
    setBefore(newInput);

    var newString = '';
    for (var i = input.length - 1; i >= 0; i--) {
      newString += input[i];
    }
    setOutput(newString);
  };
  const handleUndoRedo = () => {
    let newInput = before; // ['asd','abc']
    setBefore([newInput[1], newInput[0]]); // ['abc', 'asd']
    setInput(newInput[0]); // 'asd'
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
  <div className="App">
  <div className="App-header">

    <div className="reverse">
      <br></br>
      <Input placeholder="username" onChange={handleChange} value={input}/>
      <h1>output: {output}</h1>
      <Button onClick={reverseMyName}>reverse</Button>
      <Button onClick={handleUndoRedo}>undo/redo</Button>
    </div>
    </div>
    </div>
  )
 
};

export default App;
