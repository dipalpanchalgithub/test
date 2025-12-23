import React, { useState } from 'react'

export default function CounterButton() {
    const [btn,setbtn]=useState(0);
    const btnclick=()=>
    {
        setbtn(btn+1);
    }
  return (
    <div>
      <button onClick={btnclick}>Click {btn}</button>
    </div>
  )
}
