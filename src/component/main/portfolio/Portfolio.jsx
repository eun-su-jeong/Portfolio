import './Portfolio.scss';
import {NavLink} from "react-router-dom";
export default function Portfolio() {
    return (
        <div className={"portfolio"}>
            <h2>Portfolio</h2>
            <div>
                <ul>
                    <li>
                        <NavLink to={"/"}>
                            <div className={'project_wrap'}>
                                <img src={require('./../../../resources/img/cookshare.svg').default}
                                     alt="cookshare project"/>
                                <p>Cook-Share</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <div className={'project_wrap'}>
                                <img src={require('./../../../resources/img/weekendFarm.png')}
                                     alt="weekendfarm project"/>
                                <p>Cook-Share</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <div className={'project_wrap'}>
                                <img src={require('./../../../resources/img/cookshare.svg').default}
                                     alt="cookshare project"/>
                                <p>Cook-Share</p>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/"}>
                            <div className={'project_wrap'}>
                                <img src={require('./../../../resources/img/cookshare.svg').default}
                                     alt="cookshare project"/>
                                <p>Cook-Share</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>

    )
}