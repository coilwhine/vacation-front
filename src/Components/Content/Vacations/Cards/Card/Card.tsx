import "./Card.scss";
import { AiFillCalendar } from "react-icons/ai";
import { dateFormater } from "../../../../../Utils/dateFormating";
import CardTools from "./CardTools/CardTools";
import LikeBtn from "./LikeBtn/LikeBtn";
import { VacationModel } from "../../../../../Models/VacationModel";
import vacationServices from "../../../../../Services/vacationServices";
import { useEffect, useState } from "react";

function Card({ cardData }: { cardData: VacationModel }): JSX.Element {

    const [isLiked, setIsLiked] = useState<boolean>(false)
    const [render, setRender] = useState<number>(0)
    const [likes, setLikes] = useState(0)

    useEffect(() => {
        vacationServices.getVacationLikes(cardData.id).then((res: any) => {
            let likeCounter = 0
            res.map((vac: any) => {
                likeCounter++
            })
            setLikes(likeCounter)
        })
    }, [render])

    useEffect(() => {
        vacationServices.getUserLikedVacation().then((res: any) => {
            const arrayOfMatchingLikes = res.filter((like: { user_id: number, vacation_id: number }) => {
                return +cardData.id === +like.vacation_id;
            })

            if (arrayOfMatchingLikes.length > 0) {
                setIsLiked(true)
            } else {
                setIsLiked(false)
            }
        })
    }, [render])

    async function likeBtnFunc() {
        if (isLiked) {
            await vacationServices.postUnLikeVacation(cardData.id)
            setRender(render + 1)
        } else if (!isLiked) {
            await vacationServices.postLikeVacation(cardData.id)
            setRender(render + 1)
        }
    }

    return (
        <div className="Card">
            <header className="card-header">
                <div className="card-header-content">
                    <div className="card-header-top">
                        <h2>{cardData.destination}</h2>
                        <LikeBtn key={cardData.id} numberOfLikes={likes} onClickEvent={likeBtnFunc} likeState={isLiked} />
                    </div>
                    <CardTools />
                </div>
            </header>
            <div className="card-body">
                <div className="card-dates">
                    <AiFillCalendar />
                    <span className="card-date">{dateFormater(cardData.startDate).fullDate}</span>
                    <span className="card-date">-</span>
                    <span className="card-date">{dateFormater(cardData.endDate).fullDate}</span>
                </div>
                <p className="card-p">{cardData.description}</p>
                <div className="card-price-wraper">
                    <h2 className="card-price">{`${cardData.price}$`}</h2>
                </div>
            </div>
        </div>
    );
}

export default Card;
