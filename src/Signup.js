import { useState, useEffect} from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const Signup = () => {
    const [password, setPassword] = useState('');
    const [cPassword, setCPassword] = useState('');
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [submitted, setsubmitted] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setsubmitted(true);
        setDisabled(!disabled);
    }
    useEffect(() => {
        if (password === cPassword) {
            setShowErrorMessage(false);
        }
        else {
            setShowErrorMessage(true);
        }
    }, [cPassword]);

    return (
        <div className="sign">
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" required disabled={disabled} />
                <label>Email:</label>
                <input type="email" required disabled={disabled} />
                <label>Phone Number:</label>
                <PhoneInput required disabled={disabled} />
                <label>Password:</label>
                <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} disabled={disabled}></input>
                <label>Confirm Password:</label>
                <input type="password" name="password" onChange={(e) => { setCPassword(e.target.value) }} disabled={disabled}></input>
                {!submitted && !showErrorMessage ? <button>Submit</button> : ''}
                {!submitted && showErrorMessage ? <div> Passwords did not match </div> : ''}
                {submitted && !showErrorMessage ? <div>Account has been created successfully</div> : ''}
            </form>
        </div>
    );
}

export default Signup;