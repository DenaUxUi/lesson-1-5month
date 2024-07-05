import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then (responce => responce.json())
        .then((data) =>{
            setUsers(data)
        })
    }, [])
    return (
        <div>
            <h1>home</h1>
            <button onClick={()=>{
                navigate(-1)
            }}>go back</button>
        </div>
    );
}

export default Home;
