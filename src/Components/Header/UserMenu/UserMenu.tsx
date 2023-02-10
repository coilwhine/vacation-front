import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../App/authTokenSlice";
import { UserModel, UserRole } from "../../../Models/UserModel";
import { useOnClickOutside } from "../../../Utils/onClickOutSideHook";
import AddVacationForm from "./AddVacationForm/AddVacationForm";
import "./UserMenu.scss";

function UserMenu(): JSX.Element {

    const [openMenu, setOpenMenu] = useState(false)
    const [openNewVacationForm, setOpenNewVacationForm] = useState(false)
    const dispatch = useDispatch();
    const user: UserModel = useSelector((state: any) => state.authToken);

    const refOne = useRef<any>();
    useOnClickOutside(refOne, () => setOpenMenu(false))

    return (
        <>
            <div className="UserMenu" ref={refOne}>

                {user && <span className="display-name">{`${user.firstName} ${user.lastName}`}</span>}
                {user && <button className="main-btn" onClick={() => setOpenMenu(true)}>Menu</button>}
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
