import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../App/authTokenSlice";
import { UserModel, UserRole } from "../../../Models/UserModel";
import AddVacationForm from "./AddVacationForm/AddVacationForm";
import "./UserMenu.scss";

function UserMenu(): JSX.Element {

    const [openMenu, setOpenMenu] = useState(false)
    const [openNewVacationForm, setOpenNewVacationForm] = useState(false)
    const dispatch = useDispatch();
    const user: UserModel = useSelector((state: any) => state.authToken);

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);

        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const refOne = useRef<any | null>(null);

    function handleClickOutside(e: any): void {
        if (refOne && !refOne.current.contains(e.target)) {
            setOpenMenu(false);
        } else if (refOne) {
            setOpenMenu(true);
        }
    }

    return (
        <>
            <div className="UserMenu" ref={refOne}>

                {user && <span className="display-name">{`${user.firstName} ${user.lastName}`}</span>}
                {user && <button className="main-btn">Menu</button>}
                {openMenu && <div className="user-menu">

                    {user && user.userRole === UserRole.admin && <button onClick={() => {
                        setOpenMenu(false)
                    }}>reports</button>}

                    {user && user.userRole === UserRole.admin && <button onClick={() => {
                        setOpenMenu(false)
                    }}>download file</button>}

                    {user && user.userRole === UserRole.admin && <button onClick={() => {
                        setOpenMenu(false)
                        setOpenNewVacationForm(true)
                    }}>add vacation</button>}

                    <button className="logout-btn" onClick={() => {
                        dispatch(logout())
                        setOpenMenu(false)
                    }}>logout</button>
                </div>}

            </div>
            {openNewVacationForm && <AddVacationForm isOpen={setOpenNewVacationForm} />}
        </>
    );
}

export default UserMenu;
