// import React, { useEffect } from 'react';
import './Header.scss';
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    // useEffect(() => {
    //     const handleScroll = () => {
    //         const headerWrap = document.querySelector('.header_wrap');
    //         if (window.scrollY > 0) {
    //             headerWrap.classList.add('scrolled');
    //         } else {
    //             headerWrap.classList.remove('scrolled');
    //         }
    //     };
    //
    //     // 스크롤 이벤트 리스너 추가
    //     window.addEventListener('scroll', handleScroll);
    //
    //     // 컴포넌트 언마운트 시 이벤트 리스너 제거
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, []);
    return (
        <header>
            <div className={"header_wrap"}>
                <div className={"logo_wrap"}>
                    <h1><a href={"/"}>Portfolio</a></h1>
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
