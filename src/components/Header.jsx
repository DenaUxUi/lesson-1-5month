import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <nav>
                <Link to={"/"}>Home</Link>
            </nav>
        </div>
    );
}

export default Header;
