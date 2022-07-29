import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>PB Media</h1>
            <div className="links">
                <Link to="/">DashBoard</Link>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;