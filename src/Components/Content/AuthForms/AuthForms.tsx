import { useSelector } from "react-redux";
import "./AuthForms.scss";
import AuthFormNav from "./AuthFormNav/AuthFormNav";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";

function AuthForm(): JSX.Element {

    const authFormToggler = useSelector((state: any) => state.authForm.value);

    return (
        <div className="AuthForm">
            <AuthFormNav />
            {authFormToggler === 'login' ? <LoginForm /> : <RegistrationForm />}
        </div>
    );
}

export default AuthForm;
