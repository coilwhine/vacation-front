import { useState } from "react";
import "./Header.scss";
import UserMenu from "./UserMenu/UserMenu";

function Header(): JSX.Element {

    return (
        <div className="Header">
            <div className="content-wraper">
                <a className="heading" href="/">Vacation</a>
                <UserMenu />
            </div>
        </div>
    );
}

export default Header;
