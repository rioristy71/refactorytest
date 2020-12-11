import React,{useState} from "react";
import { Input,Button} from 'reactstrap';


function Reverse() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const reverseMyName = (str)=> {
      var newString = [];
      for (var i = str.length - 1; i >= 0; i--) {
          newString.push(str[i])
      }
      return setOutput(newString.join(''))
  
  }
  console.log(reverseMyName('Michael Jackson'));
    return (
    <div className="reverse">
    <br></br>
    <Input placeholder="username" onChange={(text) => setInput(text)}
          value={input}/>
    <h1>output: {output}</h1>
    <Button onClick={() =>reverseMyName}>reverse</Button><Button>undo/redo</Button>
    </div>
    )
  }
  export default Reverse;