import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../App/authTokenSlice";
import AuthForms from "./AuthForms/AuthForms";
import "./Content.scss";
import Vacations from "./Vacations/Vacations";

function Content(): JSX.Element {

    const isloged = useSelector((state: any) => state.authToken);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        console.log(token)
        if (token) {
            dispatch(login(token))
        }
    }, [])

    return (
        <div className="Content">
            {isloged ? <Vacations /> : <AuthForms />}
        </div>
    );
}

export default Content;
