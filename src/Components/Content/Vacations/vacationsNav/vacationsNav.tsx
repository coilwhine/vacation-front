import { AiFillHeart } from "react-icons/ai";
import "./vacationsNav.scss";

interface OwnProps {
    setLikeChecked: any;
    setPresentChecked: any;
    setFutureChecked: any;
    likeChecked: boolean;
    presentChecked: boolean;
    futureChecked: boolean;
    setPage: any;
}

function VacationsNav(props: OwnProps): JSX.Element {

    function likeToogleFunc() {
        props.setLikeChecked(!props.likeChecked);
        props.setPage(1);
    }

    function presentToogleFunc() {
        props.setPresentChecked(!props.presentChecked);
        props.setPage(1);
    }

    function futureToogleFunc() {
        props.setFutureChecked(!props.futureChecked);
        props.setPage(1);
    }

    return (
        <nav className="vacationsNav">
            <div className="nav-div" >
                <label className="text" htmlFor="like-check">Liked <AiFillHeart className="heart" /></label>
                <div className="toggle-div">
                    <input id="like-check" className="toggle" type="checkbox" onChange={likeToogleFunc} disabled={props.presentChecked || props.futureChecked} />
                    <label htmlFor="like-check"></label>
                </div>
            </div>

            <div className="text nav-div">
                <label className="text" htmlFor=" present-check">Active Now</label>
                <div className="toggle-div">
                    <input id="present-check" className="toggle" type="checkbox" onChange={presentToogleFunc} disabled={props.likeChecked || props.futureChecked} />
                    <label htmlFor="present-check"></label>
                </div>
            </div>

            <div className=" nav-div">
                <label className="text" htmlFor=" future-check">Coming Soon</label>
                <div className="toggle-div">
                    <input id="future-check" className="toggle" type="checkbox" onChange={futureToogleFunc} disabled={props.presentChecked || props.likeChecked} />
                    <label htmlFor="future-check"></label>
                </div>
            </div>
        </nav>
    );
}

export default VacationsNav;
