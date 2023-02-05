import Cards from "./Cards/Cards";
import "./Vacations.scss";
import VacationsNav from "./vacationsNav/vacationsNav";

function Vacations(): JSX.Element {
    return (
        <div className="Vacations">
            vications
            <VacationsNav />
            <Cards />
        </div>
    );
}

export default Vacations;
