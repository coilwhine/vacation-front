import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { login } from "../../App/authTokenSlice";
import ErrorPage from "../ErrorPage/ErrorPage";
import ReportsPage from "../Header/UserMenu/ReportsPage/ReportsPage";
import AuthForms from "./AuthForms/AuthForms";
import "./Content.scss";
import Vacations from "./Vacations/Vacations";

function Content(): JSX.Element {

    const isloged = useSelector((state: any) => state.authToken);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            dispatch(login(token))
        }
    }, [])

    return (
        <div className="Content">
            <Routes>
                <Route path="/" element={isloged ? <Vacations /> : <AuthForms />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
        </div>
    );
}

export default Content;
