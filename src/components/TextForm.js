import React, {useState} from 'react'

export default function TextForm(props) {
    
    //To convert the text into upper case
    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
    }

    //To conver the text into upper case
    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
    }

    
    //To clear the text area
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
    }

    //Replace feature 
    const handleReplaceClick = () => {
        let replace;
        let clear = "";
        let from = fromText;
        let to = toText;
        replace = Text.replace(from,to);
        setText(replace);
        setFromText(clear);
        setToText(clear);
    }

    //convert from to to feature
    const handleFrom = (event) => {
        setFromText(event.target.value);
    }

    //convert from to to feature
    const handleTo = (event) => {
        setToText(event.target.value);
    }
    
    //Allows to write into the text are and set value 
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    
    //declaring usestate
    const [Text,setText] = useState("");
    const [fromText,setFromText] = useState("");
    const [toText,setToText] = useState("");

    return (
        <>
            <div className="container ">
                <h1>{props.Heading}</h1>
                <div className="mb-3">            
                    <label htmlFor="textBox" className="form-label"></label>
                    <textarea className="form-control" id="textBox" value={Text} onChange={handleOnChange} rows="7"></textarea>
                    <button className="btn btn-primary my-4" onClick={handleUpClick}>Convert to UpperCase</button>
                    <button className="btn btn-primary my-4 mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
                    <button className="btn btn-primary my-4 mx-3" onClick={handleClearClick}>Clear Text</button>
                    <button className="btn btn-primary my-4 mx-3" onClick={handleReplaceClick}>Replace Text</button>
                    <div className="container">
                        <input type="text" className="w-25 p-1 mx-2 rounded"  id="from" value={fromText}  onChange={handleFrom} placeholder="From"/>
                        <input type="text" className="w-25 p-1 rounded"  id="to" value={toText} onChange={handleTo} placeholder="To"/>
                    </div>
                </div>

                
            </div>

            <div className="cointainer">
                <h1>Text Summary</h1>
                <p>Words: {Text.split(" ").length}  and  Characters: {Text.length}</p>
                <p>Time to read: {0.008 * Text.split(" ").length } Minutes</p>
                <h1>Preview</h1>
                <p>{Text}</p>
            </div>

        </>
    )
}
