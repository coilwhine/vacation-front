import { useDispatch, useSelector } from "react-redux";
import { formToggler } from "../../../../App/authFormSlice";
import "./AuthFormNav.scss";

function AuthFormNav(): JSX.Element {

    const authFormToggler = useSelector((state: any) => state.authForm.value);
    const dispatch = useDispatch();

    return (
        <div className="AuthFormNav">

            <span className={authFormToggler === 'login' ? 'authNavActive auth-btn-wraper' : 'auth-btn-wraper'}><button onClick={() => dispatch(formToggler('login'))}>Login</button></span>

            <span className={authFormToggler === 'register' ? 'authNavActive auth-btn-wraper' : 'auth-btn-wraper'}><button onClick={() => dispatch(formToggler('register'))}>Register</button></span>

        </div>
    );
}

export default AuthFormNav;
