import { useState } from 'react';
import "./BtnWhite.css"

const BtnWhite = () => {
    const [count, setCount] = useState(0);
    function handleClick() {
    setCount(count + 1);
  }
    return ( 
        <button onClick={handleClick} className="btn_white">нажато {count} раз</button>
    )
}

export default BtnWhite;