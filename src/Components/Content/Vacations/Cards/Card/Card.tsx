import "./Card.scss";
import { AiFillCalendar } from "react-icons/ai";
import { dateFormater } from "../../../../../Utils/dateFormating";
import CardTools from "./CardTools/CardTools";
import LikeBtn from "./LikeBtn/LikeBtn";
import { VacationModel } from "../../../../../Models/VacationModel";
import vacationServices from "../../../../../Services/vacationServices";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setRender } from "../../../../../App/renderSlice copy";
import { UserModel } from "../../../../../Models/UserModel";
import DeletePopup from "./DeletePopup/DeletePopup";
import EditForm from "./EditForm/EditForm";

function Card({ cardData }: { cardData: VacationModel }): JSX.Element {

    const dispatch = useDispatch();
    const userData: UserModel = useSelector((state: any) => state.authToken);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likes, setLikes] = useState(0);
    const [deletePopup, setDeletePopUp] = useState(false);
    const [editFormOpen, setEditFormOpen] = useState(false);
    const render = useSelector((state: any) => state.render);


    useEffect(() => {
        try {
            vacationServices.getVacationLikes(cardData.id).then((res: any) => {
                let likeCounter = 0
                res.map(() => {
                    likeCounter++
                })
                setLikes(likeCounter)

            })


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

        } catch (err) {
            console.error(err)
        }
    }, [render])

    async function likeBtnFunc() {

        try {

            if (isLiked) {
                await vacationServices.postUnLikeVacation(cardData.id);
                dispatch(setRender(render + 1));
            } else if (!isLiked) {
                await vacationServices.postLikeVacation(cardData.id);
                dispatch(setRender(render + 1));
            }

        } catch (err) {
            console.error(err)
        }

    }


    return (
        <>
            <div className="Card">

                <header
                    className="card-header"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.4)), url(https://daniel-vacation.s3.eu-west-1.amazonaws.com/${cardData.image})`
                    }}>

                    <div className="card-header-content">
                        <div className="card-header-top">
                            <h2>{cardData.destination}</h2>
                            {userData.userRole !== 1 && <LikeBtn className='like-btn' key={cardData.id} numberOfLikes={likes} onClickEvent={likeBtnFunc} likeState={isLiked} />}
                        </div>
                        {userData.userRole === 1 && <CardTools cardId={cardData.id} delPopUp={setDeletePopUp} setEditFormOpen={setEditFormOpen} />}
                    </div>
                </header>
                <div className="card-body">
                    <div className="card-dates">
                        <AiFillCalendar />
                        <span className="card-date">{dateFormater(cardData.startDate)}</span>
                        <span className="card-date">-</span>
                        <span className="card-date">{dateFormater(cardData.endDate)}</span>
                    </div>
                    <p className="card-p">{cardData.description}</p>
                    <div className="card-price-wraper">
                        <h2 className="card-price">{`${cardData.price}$`}</h2>
                    </div>
                </div>
            </div>
            {deletePopup && <DeletePopup cardId={cardData.id} popUpState={setDeletePopUp} />}
            {editFormOpen && <EditForm cardData={cardData} setEditFormOpen={setEditFormOpen} />}
        </>
    );
}

export default Card;
