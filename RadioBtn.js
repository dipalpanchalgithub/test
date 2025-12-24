import React, { useState } from 'react'

export default function RadioBtn() {
    const [drink,setdrink]=useState('Tea');

    let handleChange=(e)=>
    {
        setdrink(e.target.value);
        console.log(e.target.type);
    }

    let handleClick=(e)=>
    {
        alert(`Your Favourite Drink is : ${drink}`);
    }
  return (
    <>
        <form >
            <h2>Select Your Drink:</h2>
            <input type="radio" name='drink' onChange={handleChange} value={'Coffee'} /> Coffee
            <br />
            <input type="radio" name='drink' onChange={handleChange} value={'Tea'} /> Tea 
            <br />
            <input type="radio" name='drink' onChange={handleChange} value={'Green Tea'} /> Green Tea   
            <br/>
            <button onClick={handleClick}>Submit</button>

        </form>    
    
    </>
  )
}
