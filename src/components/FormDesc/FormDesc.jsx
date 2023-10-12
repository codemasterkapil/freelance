import "./assets/FormDesc.css";
import myImage from '../../assets/pucka.png';

const FormDesc = ({text}) => {
    return (
        <div className="add_course_desc">
            <p className="add_course_desc_p1">{text}</p>
            <p className="add_course_desc_p2">Thank you for your devotion</p>
            <p className="add_course_desc_p2"> towards the enrichment of the </p>
            <p className="add_course_desc_p2"> mind of our future generation!</p>
            <img className="add_course_desc_img" src={myImage} alt="My Image"  />
        </div>
    );
}

export default FormDesc;