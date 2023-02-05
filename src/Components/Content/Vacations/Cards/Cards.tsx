import Card from "./Card/Card";
import "./Cards.scss";

function Cards(): JSX.Element {
    return (
        <div className="Cards">
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default Cards;
