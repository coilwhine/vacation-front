import "./Card.scss";
import { AiFillCalendar } from "react-icons/ai";
import { useEffect } from "react";
import { dateFormater } from "../../../../../Utils/dateFormating";
import CardTools from "./CardTools/CardTools";
import LikeBtn from "./LikeBtn/LikeBtn";

function Card(): JSX.Element {

    const testValues = {
        id: 1,
        destination: "Israel",
        start: "2023-05-29",
        end: "2023-06-10",
        description: "Discover the rich history and culture of the holy city, including the Western Wall, the Dome of the Rock, and the Church of the Holy Sepulchre.",
        price: 1000,
        imgName: "israel1.jpg",
    }

    useEffect(() => {
        dateFormater(testValues.start)
    }, [])

    return (
        <div className="Card">
            <header className="card-header">
                <div className="card-header-content">
                    <div className="card-header-top">
                        <h2>{testValues.destination}</h2>
                        <LikeBtn />
                    </div>
                    <CardTools />
                </div>
            </header>
            <div className="card-body">
                <div className="card-dates">
                    <AiFillCalendar />
                    <span className="card-date">{dateFormater(testValues.start).fullDate}</span>
                    <span className="card-date">-</span>
                    <span className="card-date">{dateFormater(testValues.end).fullDate}</span>
                </div>
                <p className="card-p">{testValues.description}</p>
                <div className="card-price-wraper">
                    <h2 className="card-price">{`${testValues.price}$`}</h2>
                </div>
            </div>
        </div>
    );
}

export default Card;
