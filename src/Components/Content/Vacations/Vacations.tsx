import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { VacationModel } from "../../../Models/VacationModel";
import vacationServices from "../../../Services/vacationServices";
import Cards from "./Cards/Cards";
import PageNav from "./PageNav/PageNav";
import "./Vacations.scss";
import VacationsNav from "./vacationsNav/vacationsNav";

function Vacations(): JSX.Element {

    const user = useSelector((state: any) => state.authToken);
    const render = useSelector((state: any) => state.render);
    const [vacations, setVacations] = useState<VacationModel | any>(null)
    const [page, setPage] = useState<number>(1)
    const [pageAmount, setPageAmount] = useState<number>(0)

    const [likeChecked, setLikeChecked] = useState<boolean>(false);
    const [presentChecked, setPresentChecked] = useState<boolean>(false);
    const [futureChecked, setFutureChecked] = useState<boolean>(false);

    useEffect(() => {
        try {

            vacationServices.getVacationsByPage(user, page, likeChecked, presentChecked, futureChecked).then((res: any) => {
                setVacations(res.data);
                setPageAmount(Math.floor(res.count[0]["COUNT(*)"] / 10) + 1)
            })

        }

        catch (error) {
            console.error(error);
        }
    }, [render, page, likeChecked, presentChecked, futureChecked])

    return (
        <div className="Vacations">
            <VacationsNav setLikeChecked={setLikeChecked} setPresentChecked={setPresentChecked} setFutureChecked={setFutureChecked} likeChecked={likeChecked} presentChecked={presentChecked} futureChecked={futureChecked} setPage={setPage} />
            <Cards vacations={vacations} />
            <PageNav vacations={vacations} page={page} setPage={setPage} pageAmount={pageAmount} />
        </div>
    );
}

export default Vacations;
