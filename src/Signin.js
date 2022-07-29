import { useState } from "react";
const Signin = () => {
    const [submitted, setsubmitted] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setsubmitted(true);
        setDisabled(!disabled);
    }
    return (
        <div className="sign">
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" required disabled={disabled} />
                <label>Password:</label>
                <input type="password" name="password" disabled={disabled}></input>
                {submitted ? <div>Sign-In Successful</div> :<button>Submit</button>}
            </form>
        </div>
     );
}
 
export default Signin;