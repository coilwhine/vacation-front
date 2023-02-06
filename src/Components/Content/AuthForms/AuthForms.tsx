import { useSelector } from "react-redux";
import "./AuthForms.scss";
import AuthFormNav from "./AuthFormNav/AuthFormNav";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

function AuthForms(): JSX.Element {

    const authFormToggler = useSelector((state: any) => state.authForm);

    return (
        <div className="AuthForms">
            <AuthFormNav />
            {authFormToggler === 'login' ? <LoginForm /> : <RegistrationForm />}
        </div>
    );
}

export default AuthForms;
