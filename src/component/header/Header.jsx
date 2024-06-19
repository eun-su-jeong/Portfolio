import './Header.scss';
import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div className={"header_wrap"}>
                <div className={"logo_wrap"}>
                    <h1>
                        <NavLink to={"/"}>
                            Eunsujeong
                        </NavLink>
                    </h1>
                </div>
                <div className={"gnb"}>
                    <ul>
                        <li><Link to={"/"}>Home</Link></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                        <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                        <li><NavLink to={"/contact"}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
