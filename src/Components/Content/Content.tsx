import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authToken } from "../../App/authTokenSlice";
import AuthForm from "./AuthForms/AuthForms";
import "./Content.scss";
import Vacations from "./Vacations/Vacations";

function Content(): JSX.Element {

    const logedIn = useSelector((state: any) => state.authToken.value);
    const dispatch = useDispatch();

    useEffect(() => {
        const token = window.localStorage.getItem('token')
        if (token) {
            dispatch(authToken(true))
        } else {
            dispatch(authToken(false))
        }
        console.log(logedIn)
    }, [logedIn])

    return (
        <div className="Content">

            {logedIn ? <Vacations /> : <AuthForm />}
        </div>
    );
}

export default Content;
