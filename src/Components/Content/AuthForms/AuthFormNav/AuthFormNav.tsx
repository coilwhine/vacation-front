import { useDispatch, useSelector } from "react-redux";
import { formState } from "../../../../App/authFormsSlice";
import "./AuthFormNav.scss";

function AuthFormNav(): JSX.Element {
    const FormToggler = useSelector((state: any) => state.authForm);
    const dispatch = useDispatch();

    function clickOnLogin() {
        dispatch(formState('login'))
    }

    function clickOnRegister() {
        dispatch(formState('register'))
    }

    return (
        <div className="AuthFormNav">

            <span className={FormToggler === 'login' ? 'authNavActive auth-btn-wraper' : 'auth-btn-wraper'}><button onClick={() => clickOnLogin()}>Login</button></span>

            <span className={FormToggler === 'register' ? 'authNavActive auth-btn-wraper' : 'auth-btn-wraper'}><button onClick={() => clickOnRegister()}>Register</button></span>

        </div>
    );
}

export default AuthFormNav;
