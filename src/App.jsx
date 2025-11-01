import './App.css';
import { Title, SubTitle, History, Button } from './Text';
import Evidence from './Evidence';
import response from '/data/response.json';
import Icon from './Icon';
import { useState } from 'react';
import Login from './Login';

function App() {
    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isPoppedUp, setPoppedUp] = useState(false);
    const [email, setEmail] = useState("");

    // Toggle login state
    const handleLoginToggle = () => {
        setPoppedUp(prev => !prev);
    };

    // Toggle login state
    const handleSignOutToggle = () => {
        setLoggedIn(prev => !prev);
    };
        
    const handleClose = () => {
        setPoppedUp(prev => !prev);
    }

    const handleSubmit = () => {
        setLoggedIn(prev => !prev);
    }



    return (
        <div className={`main ${isPoppedUp ? 'show-popup' : ''}`}>
            <div className="body row-flex-box relative">
                <div className="body-left col-flex-box left-align">
                    <SubTitle text="History" />
                    <History
                        id="1"
                        claim="The WHO declared new reports on new tests and treatments in development for bacterial infections"
                    />
                </div>

                <div className="body-center col-flex-box">
                    <div className="row-flex-box homepage">
                        <Title text="CredenceAI" />
                    </div>

                    <div className='height-70-vh'>
                        <Evidence response={response} />
                    </div> 

                    <div className="row-flex-box growth-9-1 height-10-vh center">
                        <textarea id="claim" className="height-5-vh" placeholder="Type your news statement here..." />
                        <button className="height-5-vh row-flex-box center">Submit</button>
                    </div>
                </div>

                <div className="body-right row-flex-box center height-5-vh">
                    <Icon icon_name="account_circle" />
                    {!isLoggedIn && <button className="height-5-vh row-flex-box center" onClick={handleLoginToggle}>Log In</button>} 
                    {isLoggedIn && <button className="height-5-vh row-flex-box center"onClick={handleSignOutToggle}>Sign Out</button>}
                </div>
            </div>"

            {isPoppedUp && <Login  handleClose={handleClose} handleSubmit={handleSubmit}/>} 
        </div>
    );
}

export default App;
