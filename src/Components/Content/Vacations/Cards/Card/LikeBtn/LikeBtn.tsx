import { AiFillHeart } from "react-icons/ai";
import "./LikeBtn.scss";

function LikeBtn(props: any): JSX.Element {

    return (
        <div className="LikeBtn" onClick={props.onClickEvent}>
            <div className={props.likeState ? " liked like-wraper" : "like-wraper"}>
                <span className="like-counter">{props.numberOfLikes}</span>
                <AiFillHeart className="logo" />
            </div>
        </div>
    );
}

export default LikeBtn;
