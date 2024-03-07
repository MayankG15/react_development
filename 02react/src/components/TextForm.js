import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpClick= ()=>{
        console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert(": Converted to Uppercase!", "success");
    }
    const handleLoClick=() => {
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert(": Converted to Lowercase!", "success");
    }
    const handleOnChange = (event) =>{
        console.log("on Change");
        setText(event.target.value)
    }
    const handleClearClick = () => {
        let newText= text;
        newText = "";
        setText(newText)
        props.showAlert(": Cleared!", "success");
    }
    const handleReverseClick = () =>{
        let newText="";
        for(let i=text.length -1;i>=0;i--){
            newText +=text[i];
        }
        setText(newText)
        props.showAlert(": Reversed!", "success");
    }
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(": Copied!", "success");
    }
    const handleExtraSpaces =() =>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    const [text , setText] = useState('');
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                
                <textarea className="form-control" value= {text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
            <button className="btn btn-primary mx-2" onClick={handleReverseClick}>Reverse text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra spaces</button>
            

        </div>
        <div className='container my-3' style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words, {text.length} characters</p>
            <p>{0.008 *text.split(" ").length} time taken </p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something to preview"}</p>
        </div>
        </>
  )
}
