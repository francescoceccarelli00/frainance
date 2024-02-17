import React, { useState } from 'react'
import { HiStar, HiOutlineStar } from "react-icons/hi2";


function Buttons() {

  const [isActive, setIsActive] = useState(false);

  const handleClick = () =>{
    setIsActive(!isActive);
  };

  return (
    <div className="buttons-container" style={{pointer:'cursor'}}>
      <div
        className={isActive ? 'active-button' : 'inactive-button'}
        onClick={handleClick}
      >  
        {isActive ? <p id="marked">Remove it<span><HiStar/></span></p> : <p id="marked">Add to favourite<span><HiOutlineStar/></span></p>}
      </div>
    </div>
  );
}

export default Buttons