import "./Header.scss";
import UserMenu from "./UserMenu/UserMenu";

function Header(): JSX.Element {
    return (
        <div className="Header">
            <div className="content-wraper">
                <h1>Vacation</h1>
                <UserMenu />
            </div>
        </div>
    );
}

export default Header;
