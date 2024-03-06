import React, {useState} from 'react'

export default function TextForm(props) {

const handleUpClick = ()=>{
console.log ("Uppercase was clicked" + text);
let newText = text. toUpperCase();
setText (newText)
  }
  const handleLoClick = ()=>{
    console.log ("Lowercase was clicked" + text);
    let newText = text. toLowerCase();
    setText (newText)
      }
      const handleClearClick = ()=>{
        console.log ("Lowercase was clicked" + text);
        let newText = '';
        setText (newText)
          }
const handleOnChange = (event)=>{
console.log ("OnChange");
setText(event.target.value);
}
  const [text, setText ] = useState('');

  return (
    <>
   <div className="container">
    <h1>{props.heading}</h1>
<div className="mb-3">
 
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear text</button>
</div> 

<div className="container my-3 ">
  <h3>Your Text Summary</h3>
  <p>{text.split(" ").length} Words  {text.length} and Characters</p>
  <p>{0.008 *text.split(" ").length} Minutes read </p>
</div>
</>
  )
}


// agar onchange ni hota to type nhi kr pata 
//+text krke bo console mai show hone lga mtlb bo read krne lga input 



// text analyzer
// word count