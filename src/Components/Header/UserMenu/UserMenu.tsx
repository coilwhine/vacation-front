import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../App/authTokenSlice";
import { UserModel, UserRole } from "../../../Models/UserModel";
import { useOnClickOutside } from "../../../Utils/onClickOutSideHook";
import AddVacationForm from "./AddVacationForm/AddVacationForm";
import { useNavigate } from "react-router-dom";

import "./UserMenu.scss";
import vacationServices from "../../../Services/vacationServices";
import { dark, light } from "../../../App/colorModeSlice";

function UserMenu(): JSX.Element {

    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false)
    const [openNewVacationForm, setOpenNewVacationForm] = useState(false)
    const dispatch = useDispatch();
    const user: UserModel = useSelector((state: any) => state.authToken);
    const coloeMode: string = useSelector((state: any) => state.colorMode);

    const refOne = useRef<any>();
    useOnClickOutside(refOne, () => setOpenMenu(false))

    function switchColorTheme() {
        if (coloeMode === 'light') {
            document.documentElement.setAttribute('data-theme', 'dark');
            dispatch(dark());
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            dispatch(light());
        }
    }

    async function onDownloadClick() {
        try {
            const data = await vacationServices.downloadFile();
            const blob = new Blob([data], { type: "octet-stream" });
            const href = URL.createObjectURL(blob);
            const a = Object.assign(document.createElement("a"), { href, style: "display:none", download: "dataFile.csv" });
            document.body.appendChild(a);
            a.click();
            URL.revokeObjectURL(href);
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <>
            <div className="UserMenu" ref={refOne}>

                {user && <span className="display-name">{`${user.firstName} ${user.lastName}`}</span>}
                {user && <button className="main-btn" onClick={() => setOpenMenu(true)}>Menu</button>}
                {openMenu && <div className="user-menu">

                    {user && user.userRole === UserRole.admin && <a onClick={() => {
                        setOpenMenu(false);
                        navigate("/reports");
                    }}>reports</a>}

                    {user && user.userRole === UserRole.admin && <a onClick={() => {
                        setOpenMenu(false);
                        onDownloadClick()
                    }}>download file</a>}

                    {user && user.userRole === UserRole.admin && <a onClick={() => {
                        setOpenMenu(false);
                        setOpenNewVacationForm(true)
                    }}>add vacation</a>}

                    {<a onClick={() => {
                        setOpenMenu(false);
                        switchColorTheme()
                    }}>{coloeMode === 'light' ? "dark mode" : "light mode"}</a>}

                    <a className="logout-btn" onClick={() => {
                        dispatch(logout())
                        setOpenMenu(false)
                        navigate("/");
                    }}>logout</a>
                </div>}

            </div>
            {openNewVacationForm && <AddVacationForm setOpenNewVacationForm={setOpenNewVacationForm} />}
        </>
    );
}

export default UserMenu;

