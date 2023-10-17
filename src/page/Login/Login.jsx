import { useEffect, useState, useContext } from 'react'
import pucka from '../../assets/pucka.png';
import drugs from '../../assets/drugs.png';
import rocket from '../../assets/rocket.png';
import { Link } from 'react-router-dom';
import '../../components/Login/assets/Login.css';
import Loader from '../../components/Loader/Loader';
import axios from "axios";
import { AccountContext } from '../../Context/AccountProvider';
import { useNavigate } from 'react-router-dom';
import Popup from '../../components/Popup/Popup';

const Login = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const { setPerson } = useContext(AccountContext);
    const {setTeacher} = useContext(AccountContext);
    const {popUp, setPopUp, setPopUpMessage, setPopUpType} = useContext(AccountContext);
    const navigate = useNavigate();

    const [logging, setLogging] = useState(false);
    const [error, setError] = useState(false);

    const Login_student = async () => {
        if(!email || !password){
            setError(true);
            return;
        }
        setLogging(true);
        try {
            const response = await axios.post("http://54.232.139.4:5000/api/student/login", {
                email: email,
                password: password
            })
            console.log(response.data)
            setPerson(response.data);
            setPopUp(true);
            setPopUpMessage("Successfully Login");
            setPopUpType("success");
            window.sessionStorage.setItem("ALBy_student_token", JSON.stringify(response.data));
            navigate('/');
        } catch (error) {
            console.log('error while login', error)
            setLogging(false);
            setPopUp(true);
            setPopUpMessage("Invalid Credentials/ Internet Error");
            setPopUpType("");
        }

    };

    const Login_teacher = async () => {
        if(!email || !password){
            setError(true);
            return;
        }
        setLogging(true);
        try {
            const response = await axios.post("http://54.232.139.4:5000/api/teacher/login", {
                email: email,
                password: password
            })
            setTeacher(response.data);
            setPopUp(true);
            setPopUpMessage("Successfully Login");
            setPopUpType("success");
            window.sessionStorage.setItem("ALBy_teacher_token", JSON.stringify(response.data));
            navigate('/teacher');
        } catch (error) {
            console.log('error while login', error)
            setLogging(false);
            setPopUp(true);
            setPopUpMessage("Invalid Credentials/ Internet Error");
            setPopUpType("");
        }

    };

    return (
        <div className='auth'>
            {popUp && <Popup />}
            {logging && <Loader text={"Logging"}/>}
            <div className='login_container'>
                <div className="login_container_content">
                    <div className="login_container_inner1">
                        <p className="login_container_p1">ALBy Study</p>
                        <img src={rocket} className="login_container_rocket" alt="" />
                    </div>
                    <div className="login_container_inner123">
                        <p className="login_container_p2">Providing support,</p>
                        <p className="login_container_p2">efficiency, and</p>
                        <p className="login_container_p2">confidence during</p>
                        <p className="login_container_p2">study process</p>
                    </div>


                    <div className="login_container_inner2">
                        <img src={pucka} className="login_container_pucka" alt="" />
                        <div className="login_container_inner21">
                            <p className="login_container_p3">Thank you for being a part of the</p>

                            <p className="login_container_p3">ALBy community!</p>
                        </div>
                    </div>
                </div>
                <div className="login_container_form">
                    <div className="login_container_form_inner">
                        <p className="login_form_p1">Login</p>
                        <img src={drugs} className="login_container_drugs" alt="" />
                    </div>
                    <p className="login_container_form_p3">
                        Enter your email and password to continue
                    </p>
                    <div className="login_container_form1">
                        <div className="signup_input">
                            <input
                                className='login_container_form_input'
                                type="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {(error && !email) && <p className='required'>Email cannot be empty</p>}
                        </div>
                        <div className="signup_input">
                            <input
                                className='login_container_form_input'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {(error && !password) && <p className='required'>Password cannot be empty</p>}
                        </div>
                        <div className="login_container_btn_div">
                            <button 
                                className="login_container_btn"
                                onClick={Login_student}
                                >Student</button>
                            <button 
                                className="login_container_btn"
                                onClick={Login_teacher}
                                >Teacher</button>
                        </div>
                    </div>
                    <div className="login_container_form_divs">
                        <p className='login_container_form_p2'>
                            Don't have an account?
                        </p>
                        <Link to="/signup" className='signuplink'>Sign up here</Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login
