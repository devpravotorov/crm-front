import React, {useEffect} from "react";
import { Link } from 'react-router-dom';
import PageNotFound from '../../assets/images/PageNotFound.jpg';
import "./styles.css";

const Page404 = () => {
    useEffect(() =>{
        document.title = 'Page Not Found';
    }, [])

    return (
        <div className="notFound">
            <div>
                <img src={PageNotFound}/>
                <p style={{textAlign:"center"}}>
                    <Link to="/">Go to Home </Link>
                </p>
            </div>
        </div>
    );
}

export default Page404;
