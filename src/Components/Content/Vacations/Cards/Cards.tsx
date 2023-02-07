import { useEffect, useState } from "react";
import { VacationModel } from "../../../../Models/VacationModel";
import vacationServices from "../../../../Services/vacationServices";
import Card from "./Card/Card";
import "./Cards.scss";

function Cards(): JSX.Element {

    const [vacations, setVacations] = useState<VacationModel | any>(null)

    useEffect(() => {
        vacationServices.getAllVacations().then((res: any) => {
            setVacations(res);
        })
    }, [])

    return (
        <div className="Cards">
            {vacations?.map((vac: VacationModel) => {
                return <Card key={vac.id} cardData={vac} />
            })}
        </div>
    );
}

export default Cards;
