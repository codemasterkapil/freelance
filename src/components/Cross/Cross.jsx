import "./assets/Cross.css";
import {RxCross2} from 'react-icons/rx'

const Cross = ({window_cut}) => {
    return (
        // <p className='cross' onClick={() => window_cut(false)}>cut</p>
        <RxCross2 className='cross' onClick={() => window_cut(false)}/>
    );
}

export default Cross;