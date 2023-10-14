import { useState } from 'react'
import pucka from '../../assets/pucka.png';
import drugs from '../../assets/drugs.png';
import rocket from '../../assets/rocket.png';
import { Link } from 'react-router-dom';
import '../../components/Login/assets/Login.css';
import Footer from '../StudentPage/Footer.jsx'


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Access email and password and perform your login or validation logic.
    };

    return (
        <>
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
                <form className="login_container_form1" onSubmit={handleSubmit}>
                    <input
                        className='login_container_form_input'
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <input
                        className='login_container_form_input'
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                    <div className="login_container_btn_div">
                        <button className="login_container_btn" type="submit">Login</button>
                    </div>
                </form>
                <div className="login_container_form_divs">
                    <p className='login_container_form_p2'>
                        Don't have an account?
                    </p>
                    <Link to="/signup" className='signuplink'>Sign up here</Link>
                </div>


            </div>
        </div>
        <Footer />  
        </>
        
    )
}

export default Login
