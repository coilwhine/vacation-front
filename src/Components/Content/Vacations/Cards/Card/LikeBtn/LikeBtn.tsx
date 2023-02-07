import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import vacationServices from "../../../../../../Services/vacationServices";
import "./LikeBtn.scss";

function LikeBtn(props: any): JSX.Element {

    return (
        <div className={props.likeState ? "LikeBtn liked" : "LikeBtn"} onClick={props.onClickEvent}>
            <span className="like-counter">{props.numberOfLikes}</span>
            <AiFillHeart />
        </div>
    );
}

export default LikeBtn;
