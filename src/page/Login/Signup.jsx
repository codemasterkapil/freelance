import { useEffect, useState, useContext } from 'react'
import pucka from '../../assets/pucka.png';
import drugs from '../../assets/drugs.png';
import rocket from '../../assets/rocket.png';
import { Link } from 'react-router-dom';
import '../../components/Login/assets/Signup.css';
import Loader from '../../components/Loader/Loader';
import axios from "axios";
import Dropdown from "../../components/Window/StudyWhat/Dropdown.jsx"
import { AccountContext } from '../../Context/AccountProvider';
import Popup from '../../components/Popup/Popup';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [title, setTitle] = useState(null);
    const title_type = ["Ms", "Mr", "Mrs", "Dr"];
    const handle_title = (val) => {
        setTitle(val);
    }
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [error, setError] = useState(false);
    const {popUp, setPopUp, setPopUpMessage, setPopUpType} = useContext(AccountContext);
    const [logging, setLogging] = useState(false);

    const navigate = useNavigate();

    const Signup_student = async () => {
        if(!firstName || !lastName || !title || !email || !password || !confirmPassword || password != confirmPassword){
            setError(true);
            return;
        }
        console.log(firstName+lastName);
        console.log(email)
        console.log(password)
        setLogging(true);
        try {
            const response = await axios.post("http://54.232.139.4:5000/api/student", {
                firstName: firstName,
                email: email,
                password: password, 
                lastName: lastName,
                title: title
            })
            console.log(response.data);
            setLogging(false);
            setPopUp(true);
            setPopUpMessage("Successfully registered, now you can login")
            setPopUpType("success");
            navigate('/login');
        } catch (error) {
            console.log('error while login', error)
            setLogging(false);
            setPopUp(true);
            setPopUpMessage("Registration failed please try again")
            setPopUpType("");
        }

    };

    const Signup_teacher = async () => {
        if(!firstName || !lastName || !title || !email || !password || !confirmPassword || password != confirmPassword){
            setError(true);
            return;
        }
        setLogging(true);
        try {
            const response = await axios.post("http://54.232.139.4:5000/api/teacher", {
                name: firstName+ " " + lastName,
                email: email,
                password: password,
                title: title
            })

            console.log(response.data);
            setLogging(false);
            setPopUp(true);
            setPopUpMessage("Successfully registered, now you can login")
            setPopUpType("success");
            navigate('/login');
        } catch (error) {
            console.log('error while login', error)
            setLogging(false);
            setPopUp(true);
            setPopUpMessage("Registration failed please try again")
            setPopUpType("");
        }

    };

    return (
        <div className='auth'>
            {popUp && <Popup />}
            {logging && <Loader text={"Logging"} />}
            <div className='login_container'>
                <div className="login_container_content">
                    <div className="login_container_inner1">
                        <p className="login_container_p1">ALBy Study</p>
                        <img src={rocket} className="login_container_rocket" alt="" />
                    </div>
                    <div className="login_container_inner123">
                        <p className="login_container_p2">Welcome to the community</p>
                        <p className="login_container_p2">passionately dedicated to</p>
                        <p className="login_container_p2">empowering students to</p>
                        <p className="login_container_p2">react their full learning</p>
                        <p className="login_container_p2">potential</p>
                    </div>


                    <div className="login_container_inner2">
                        <img src={pucka} className="login_container_pucka" alt="" />
                        <div className="login_container_inner21">
                            <p className="login_container_p3">By Students, For Students:</p>
                            <p className="login_container_p3">Where Teacher Lead and Passion</p>
                            <p className="login_container_p3">For Learning Ignites!</p>
                        </div>
                    </div>
                </div>
                <div className="login_container_form">
                    <div className="login_container_form_inner">
                        <p className="login_form_p1">Sign Up</p>
                        <img src={drugs} className="login_container_drugs" alt="" />
                    </div>
                    <p className="login_container_form_p3">
                        Happy to have you onboard the ALBy community!
                    </p>
                    <div className="login_container_form1">
                        <div className="input_row">
                            <div className="signup_input1">
                                <p>First Name *</p>
                                <input
                                    className='login_container_form_input'
                                    type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                {(error && !firstName) && <p className='required'>First name cannot be empty</p>}
                            </div>
                            <div className="signup_input1">
                                <p>Last Name *</p>
                                <input
                                    className='login_container_form_input'
                                    type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                                {(error && !lastName) && <p className='required'>Last name cannot be empty</p>}
                            </div>
                        </div>
                        <div style={{width: "70%", paddingBottom: "7px"}}>
                            <Dropdown 
                                options={title_type}
                                handle_option={handle_title}
                                disable_val={true}
                                type={"Title"}
                            />
                            {(error && !title) && <p className='required'>Title cannot be empty</p>}
                        </div>
                        <div className="signup_input">
                            <p>Email *</p>
                            <input
                                className='login_container_form_input'
                                type="email"
                                placeholder="Institution mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {(error && !email) && <p className='required'>Email cannot be empty</p>}
                        </div>
                        <div className="signup_input">
                            <p>Password *</p>
                            <input
                                className='login_container_form_input'
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {(error && !password) && <p className='required'>password cannot be empty</p>}
                        </div>
                        <div className="signup_input">
                            <p>Confirm password *</p>
                            <input
                                className='login_container_form_input'
                                type="password"
                                placeholder="Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                            {(error && !confirmPassword) && <p className='required'>confirm password cannot be empty</p>}
                            {(error && password != confirmPassword) && <p className='required'>Password not match</p>}
                        </div>
                        <div className="login_container_btn_div">
                            <button
                                className="login_container_btn"
                                onClick={Signup_student}
                            >Student</button>
                            <button
                                className="login_container_btn"
                                onClick={Signup_teacher}
                            >Teacher</button>
                        </div>
                    </div>
                    <div className="login_container_form_divs">
                        <p className='login_container_form_p2'>
                            Already have an account?
                        </p>
                        <Link to="/login" className='signuplink'>Sign in here</Link>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signup;
