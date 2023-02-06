import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import "./CardTools.scss";

function CardTools(): JSX.Element {
    return (
        <div className="CardTools">
            <button className="tools-btn card-delete-btn"><AiFillDelete /></button>
            <button className="tools-btn card-edit-btn"><AiTwotoneEdit /></button>
        </div>
    );
}

export default CardTools;
