import { AiFillDelete, AiTwotoneEdit } from "react-icons/ai";
import "./CardTools.scss";

interface OwnProps {
    cardId: number;
    delPopUp: any;
    setEditFormOpen: any;
}

function CardTools(props: OwnProps): JSX.Element {

    async function deleteBtnFunc() {
        props.delPopUp(true);
    }

    async function editBtnFunc() {
        props.setEditFormOpen(true);
    }

    return (
        <div className="CardTools">
            <button className="tools-btn card-delete-btn" onClick={deleteBtnFunc}><AiFillDelete /></button>
            <button className="tools-btn card-edit-btn" onClick={editBtnFunc}><AiTwotoneEdit /></button>
        </div>
    );
}

export default CardTools;
