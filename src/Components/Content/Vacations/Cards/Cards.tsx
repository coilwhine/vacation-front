import { VacationModel } from "../../../../Models/VacationModel";
import Card from "./Card/Card";
import "./Cards.scss";

interface OwnProps {
    vacations: VacationModel[]
}

function Cards(props: OwnProps): JSX.Element {

    return (
        <div className="Cards">
            {props.vacations?.map((vac: VacationModel) => {
                return <Card key={vac.id} cardData={vac} />
            })}
        </div>
    );
}

export default Cards;
