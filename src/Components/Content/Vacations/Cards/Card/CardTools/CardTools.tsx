import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import "./CardTools.scss";

function CardTools(props: any): JSX.Element {

    async function deleteBtnFunc() {
        props.delPopUp(true)
    }

    return (
        <div className="CardTools">
            <button className="tools-btn card-delete-btn" onClick={deleteBtnFunc}><AiFillDelete /></button>
            <button className="tools-btn card-edit-btn"><AiTwotoneEdit /></button>
        </div>
    );
}

export default CardTools;
