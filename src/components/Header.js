import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">useState</Link>
                </li>
                <li>
                    <Link to="/ha">ha</Link>
                </li>
                <li>
                    <Link to="/hahaha">haha</Link>
                </li>
            </ul>
        </>
    );
};

export default Header;
