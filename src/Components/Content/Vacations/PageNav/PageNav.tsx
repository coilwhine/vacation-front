import { VacationModel } from "../../../../Models/VacationModel";
import "./PageNav.scss";

interface OwnProps {
    vacations: VacationModel[];
    setPage: any;
    page: number;
    pageAmount: number;
}

function PageNav(props: OwnProps): JSX.Element {

    function onClickFunc(value: number) {
        props.setPage(+value)
    }

    function arrayOfNumbers(items: number) {
        const array = [];
        for (let i = 1; i <= items; i++) {
            array.push(i)
        }
        return array;
    }

    return (
        <div className="PageNav">

            {props.page !== 1 ?
                <span className="page" onClick={() => onClickFunc(props.page - 1)}>‹</span> :
                <span className="page dsiabled-page">‹</span>
            }

            {
                arrayOfNumbers(props.pageAmount).map((i: number) => {
                    return < span key={`page-${i}`} className={i === props.page ? "page page-selected" : "page"} onClick={() => onClickFunc(i)}>{i}</span>
                })
            }

            {
                props.page !== props.pageAmount ?
                    <span className="page" onClick={() => onClickFunc(props.page + 1)}>›</span> :
                    <span className="page dsiabled-page">›</span>
            }
        </div >
    );
}

export default PageNav;
