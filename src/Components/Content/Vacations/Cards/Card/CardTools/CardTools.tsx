import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setRender } from "../../../../../../App/renderSlice copy";
import vacationServices from "../../../../../../Services/vacationServices";
import "./CardTools.scss";

function CardTools(props: any): JSX.Element {

    const dispatch = useDispatch();
    const render = useSelector((state: any) => state.render);

    async function deleteBtnFunc() {
        try {
            await vacationServices.deleteVacation(props.cardId)
            dispatch(setRender(render + 1))
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="CardTools">
            <button className="tools-btn card-delete-btn" onClick={deleteBtnFunc}><AiFillDelete /></button>
            <button className="tools-btn card-edit-btn"><AiTwotoneEdit /></button>
        </div>
    );
}

export default CardTools;
