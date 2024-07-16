import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Preloader from "../components/Preloader";

const Detail = () =>{
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
        .then(response => response.json())
        .then((data)=>{
            setUser(data)
            setLoading(false);
        })
    },[params.id]);

    if (loading) {
        return <Preloader />;
    }

    return (
            <ul>
                <li>{user.name}</li>
                <li>{user.username}</li>
                <li>{user.email}</li>
                <li>{user.phone}</li>
                <li>{user.website}</li>
            </ul>
    );
}

export default Detail;
