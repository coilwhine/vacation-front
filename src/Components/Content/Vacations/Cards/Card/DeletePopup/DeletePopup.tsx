import { useDispatch, useSelector } from "react-redux";
import { setRender } from "../../../../../../App/renderSlice copy";
import vacationServices from "../../../../../../Services/vacationServices";
import "./DeletePopup.scss";

function DeletePopup(props: any): JSX.Element {

    const dispatch = useDispatch();
    const render = useSelector((state: any) => state.render);

    async function deleteCard() {
        try {
            await vacationServices.deleteVacation(props.cardId)
            dispatch(setRender(render + 1))
            props.popUpState(false)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="DeletePopup">
            <div className="main-form">
                <span className="warning-text">Are you sure you want to <span className="delete-text">delete</span> this item?</span>

                <div className="btns">
                    <button className="form-btn" onClick={() => props.popUpState(false)}>Noooo! </button>
                    <button className="form-btn yes-btn" onClick={() => deleteCard()}>Yes! Delete</button>
                </div>
            </div>
        </div>
    );
}

export default DeletePopup;
