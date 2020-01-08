import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">useState</Link>
                    <ul>
                        <li>
                            <Link to="/use_tab">useTabs</Link>
                        </li>
                        <li>
                            <Link to="/hahaha">haha</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="use_effect">useEffect</Link>
                    <ul>
                        <li>
                            <Link to="use_title">useTitle</Link>
                        </li>
                        <li>
                            <Link to="use_click">useClick</Link>
                        </li>
                        <li>
                            <Link to="use_confirm">useConfirm</Link>
                        </li>
                        <li>
                            <Link to="use_prevent_leave">usePreventLeave</Link>
                        </li>
                        <li>
                            <Link to="use_Before_leave">useBeforeLeave</Link>
                        </li>
                        <li>
                            <Link to="use_fadein">useFadeIn</Link>
                        </li>
                        <li>
                            <Link to="use_network">useNetwork</Link>
                        </li>
                        <li>
                            <Link to="use_scroll">useScroll</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default Header;
