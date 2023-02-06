import "./vacationsNav.scss";

function VacationsNav(): JSX.Element {
    return (
        <nav className="vacationsNav">
            <div className="nav-div">
                <label htmlFor="folow-check">folowed</label>
                <div className="toggle-div">
                    <input id="folow-check" className="toggle" type="checkbox" />
                    <label htmlFor="folow-check"></label>
                </div>
            </div>
            <div className="nav-div">
                <label htmlFor="future-check">future</label>
                <div className="toggle-div">
                    <input id="future-check" className="toggle" type="checkbox" />
                    <label htmlFor="future-check"></label>
                </div>
            </div>
            <div className="nav-div">
                <label htmlFor="present-check">present</label>
                <div className="toggle-div">
                    <input id="present-check" className="toggle" type="checkbox" />
                    <label htmlFor="present-check"></label>
                </div>
            </div>
        </nav>
    );
}

export default VacationsNav;
