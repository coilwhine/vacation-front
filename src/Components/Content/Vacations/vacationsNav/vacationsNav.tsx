import { AiFillHeart } from "react-icons/ai";
import "./vacationsNav.scss";

function VacationsNav(): JSX.Element {
    return (
        <nav className="vacationsNav">
            <div className="nav-div">
                <label className="text" htmlFor="folow-check">Liked <AiFillHeart /></label>
                <div className="toggle-div">
                    <input id="folow-check" className="toggle" type="checkbox" />
                    <label htmlFor="folow-check"></label>
                </div>
            </div>
            <div className=" nav-div">
                <label className="text" htmlFor=" future-check">Next</label>
                <div className="toggle-div">
                    <input id="future-check" className="toggle" type="checkbox" />
                    <label htmlFor="future-check"></label>
                </div>
            </div>
            <div className="text nav-div">
                <label className="text" htmlFor=" present-check">Now</label>
                <div className="toggle-div">
                    <input id="present-check" className="toggle" type="checkbox" />
                    <label htmlFor="present-check"></label>
                </div>
            </div>
        </nav>
    );
}

export default VacationsNav;
