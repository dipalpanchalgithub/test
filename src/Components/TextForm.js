import React, { useState } from 'react'

export default function TextForm() {
  //for convert to uppercase
  let handleUpClick=()=> 
  {
    let newtext=text.toUpperCase();
    setText(newtext);
  }
  //for convert to lowercase
  let handleLoClick=()=>
  {
    let newtext=text.toLowerCase();
    setText(newtext);
  }

  let mouseOver=()=>
  {
    setbtn("Button Over");
  }
  let mouseOut=()=>
  {
    setbtn("Button Out ");
  }

  let clickClear=()=>
  {
    let newtext=(' ');
    setText(newtext);
  }
  //for change the state event with 
  const change=(e)=>{
    setText(e.target.value);
  }

  const newbtn=(e)=>{
    setbtn(e.target.value);
  }

  //usestate type of hooks
  const [text,setText]=useState("Enter Your Text");
  const [btn,setbtn]=useState("Button was click");

  return (
    <div>
      <div className='textbox'>
        <h1 className='my-3'>Word Counter</h1>
        <textarea rows={12} cols={100} value={text} onChange={change}></textarea>
        <br />
        <button className='btn btn-primary' onClick={handleUpClick} >Convert To Uppercase</button>{"  "}
        <button className='btn btn-success' onClick={handleLoClick}>Convert To Lowercase</button>{"   "}
        <button className='btn btn-success' onClick={clickClear}>Clear Text</button>{"   "}
        <button value={btn} onChange={newbtn} className='btn btn-primary'onMouseOut={mouseOut} onMouseOver={mouseOver}>{btn}</button>
        
        <br />
        <h3>Your Text Summary</h3>
        {/* split method is use to split the data */}
        <p>Word {text.split(" ").length} , Character {text.length}</p>

      </div>
    </div>
  )
}
