import "./assets/FormDesc.css";


const FormDesc = ({text1, text2}) => {
    return (
        <div className="add_course_desc">
            <p>{text1}</p>
            <p>{text2}</p>
        </div>
    );
}

export default FormDesc;