import React, { useState } from "react";
import img1 from "./Images/n.jpg";
import img2 from "./Images/n2.jpg";
import img3 from "./Images/n3.jpg";

function Carousel() {
  const images = [img1, img2, img3];
  const [index, setIndex] = useState(0);

  function PrevImage(){
    setIndex((prev)=> (prev-1) % images.length);
  }

  function nextImage() {
    setIndex((next) => (next + 1));
  }

  return (
    <div className="my-crousel">
      <img src={images[index]} width={500} />
      <br />
      <button className="prev-btn" onClick={PrevImage}  >Previous</button>      
      <button className="next-btn" onClick={nextImage}  >Next</button>
    </div>
  );
}

export default Carousel;
