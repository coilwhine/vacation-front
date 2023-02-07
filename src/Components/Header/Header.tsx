import "./Header.scss";
import UserMenu from "./UserMenu/UserMenu";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <h1>Vacation</h1>
            <UserMenu />
        </div>
    );
}

export default Header;
