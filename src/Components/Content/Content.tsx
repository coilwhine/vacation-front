import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { login } from "../../App/authTokenSlice";
import ReportsPage from "../Header/UserMenu/ReportsPage/ReportsPage";
import AuthForms from "./AuthForms/AuthForms";
import "./Content.scss";
import Vacations from "./Vacations/Vacations";

function Content(): JSX.Element {

    const token = useSelector((state: any) => state.authToken);
    const dispatch = useDispatch();

    useEffect(() => {
        const localStoregeToken = window.localStorage.getItem('token')
        if (localStoregeToken) {
            dispatch(login(localStoregeToken))
        }
    }, [])

    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={token ? <Vacations /> : <AuthForms />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default Content;
