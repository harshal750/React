/* eslint-disable react/no-unknown-property */
import './Intro.css';
import { useState } from 'react';


const Intro = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [, setLogout] = useState('');


    const handleLogin = () => {
        // Simple validation, you can replace this with your authentication logic
        if (username === '') {
            setLoggedIn(false);
            setUsernameError('Please Enter Username');
        }
        else if (password === '') {
            setLoggedIn(false);
            setPasswordError('Please Enter Password');
        }
        else {
            setLoggedIn(true);
            alert('Login Successful');
            setLogout();

        }
    };

    const out = () => {
        window.location.reload();
    };


    return (
        <div className="intro">
            {loggedIn ? (
                <div>
                    <h2>Welcome, {username}!
                        {<button onClick={out}>Logout{setLogout}</button>}</h2>

                </div>
            ) : (
                <div>
                    <p><center><marquee behavior="alternate" direction="right" width="1350px">
                        <marquee direction="left" width="250px" scroldelay="1">
                            <h3>Welcome to this page</h3> </marquee></marquee>
                    </center></p>

                    <div className='loginpage'>
                        <h1><b><center>Login</center></b></h1>
                        <label>Username:</label>
                        <input type="text" className='usrnm' value={username} onChange={(e) => setUsername(e.target.value)} />
                        {usernameError && <p style={{ color: 'white' }}>{usernameError}</p>}
                        <label>Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {passwordError && <p style={{ color: 'white' }}>{passwordError}</p>}
                        <button onClick={(handleLogin)}>Login</button>
                    </div>
                </div>
            )
            }
        </div >
    );
};

export default Intro;