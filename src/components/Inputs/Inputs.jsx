import BtnWhite from "../Buttons/White/BtnWhite";
import "./Inputs.css"

const Inputs = () => {
    return ( 
        <label className="input_wrapper">
            <input className="input_text" type="text" placeholder="Enter your next task"/>
            <BtnWhite />
        </label>
    )
}

export default Inputs;