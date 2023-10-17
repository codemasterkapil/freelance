import "./assets/Popup.css";
import Cross from "../Cross/Cross";
import { AccountContext } from "../../Context/AccountProvider";
import { useContext } from "react";
import {RxCross2} from 'react-icons/rx'

const Popup = () => {

    const {setPopUp, popUpMessage, popUpType} = useContext(AccountContext);
    return (
        <div className="popup">
            <RxCross2 className="popup_cross" onClick={() => setPopUp(false)}/>
            <p style={{color: (popUpType === "success" ? "green" : "red"), textAlign: "center"}}>{popUpMessage}</p>
        </div>
    )
}

export default Popup;