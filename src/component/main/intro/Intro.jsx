import './Intro.scss';
import {useEffect, useRef} from "react";


export default function Intro() {
    // console.log('intro called');
    // const currentEl = useRef(null);
    // const titleEl = useRef(null);
    //
    // const handleScroll = () => {
    //     const scroll = window.scrollY;
    //     const modifiedScroll = scroll - currentEl.current.offsetTop;
    //     console.log(modifiedScroll);
    //     titleEl.current.style.transform = `translateX(${modifiedScroll}px)`;
    // }
    //
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll);
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     }
    // }, []);

    return (
        <div className="intro">
         {/*   <video autoPlay muted loop className="video-background">
                <source src="/videos/intro.mp4" type="video/mp4"/>
            </video>*/}
            <div className="content">
                <h2>Portfolio</h2>
                <div className={'character'}>
                    <img src={require('./../../../resources/img/me.jpg')} alt="my character"/>
                </div>
            </div>
        </div>
    );
}
