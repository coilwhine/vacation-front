import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../../../App/authTokenSlice";
import authServices from "../../../../Services/authServices";
import "./LoginForm.scss";

export interface LoginFormData {
    email: string;
    password: string;
}

function LoginForm(): JSX.Element {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<LoginFormData>();
    const [emailValid, setEmailValid] = useState(true)
    const [passwordValid, setPasswordValid] = useState(true)

    async function onSubmitLogin(data: LoginFormData) {
        try {
            const token = await authServices.loginUser(data)
            setEmailValid(true);
            setPasswordValid(true);
            dispatch(login(token))
        } catch (err: AxiosError | any) {
            console.error(err)
            if (err.response.status === 404) {
                setEmailValid(false);
                setPasswordValid(true);
            } else if (err.response.status === 401) {
                setEmailValid(true);
                setPasswordValid(false);
            }
        }
    }

    return (
        <div className="LoginForm">
            <form onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="form-div">
                    <label className="form-label" htmlFor="login-email-input">email</label>
                    <input id="login-email-input" className="form-input" type="email" {...register("email")} required />
                    {!emailValid && <span className="error-span">email does not exist</span>}
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="login-password-input">password</label>
                    <input id="login-password-input" className="form-input" type="password" minLength={4} {...register("password")} required />
                    {!passwordValid && <span className="error-span">incorect passwort</span>}
                </div>
                <button className="form-btn">LogIn</button>
            </form>
        </div>
    );
}

export default LoginForm;
