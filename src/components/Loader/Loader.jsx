import "./assets/Loader.css"
import ReactLoading from "react-loading";

const Loader = ({text}) => {
    return (
        <div className="loader">
            <ReactLoading type={"bars"} color={"white"} height={100} width={100}/>
            <p>{text}</p>
        </div>
    );
}

export default Loader;