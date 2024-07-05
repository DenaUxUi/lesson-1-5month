import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to={"/"}>Logo</Link>

            <nav>
                <Link to={"/"}>Home</Link>
                <Link to={"/page1"}>Page1</Link>
                <Link to={"/page2"}>Page2</Link>
            </nav>
        </div>
    );
}

export default Header;
