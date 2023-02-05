import { AxiosError } from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { authToken } from "../../../../App/authTokenSlice";
import authServices from "../../../../Services/authServices";
import "./RegistrationForm.scss";

export interface RegistrationFormData {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

function RegistrationForm(): JSX.Element {

    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm<RegistrationFormData>();
    const [emailTaken, setEmailTaken] = useState(false)

    async function onSubmitRegistration(data: RegistrationFormData) {
        try {
            const token = await authServices.registerNewUser(data)
            window.localStorage.setItem('token', token);
            setEmailTaken(false);
            dispatch(authToken(true))
        } catch (err: AxiosError | any) {
            console.error(err)
            if (err.response.status === 401) {
                setEmailTaken(true);
            }
        }
    }

    return (
        <div className="RegistrationForm">
            <form onSubmit={handleSubmit(onSubmitRegistration)}>
                <div className="form-div">
                    <label className="form-label" htmlFor="register-firstName-input">first name</label>
                    <input id="register-firstName-input" className="form-input" type="text" {...register("firstName")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="register-lastName-input">last name</label>
                    <input id="register-lastName-input" className="form-input" type="text" {...register("lastName")} required />
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="register-email-input">email</label>
                    <input id="register-email-input" className="form-input" type="email" {...register("email")} required />
                    {emailTaken && <span className="error-span">email is taken</span>}
                </div>
                <div className="form-div">
                    <label className="form-label" htmlFor="register-password-input">password</label>
                    <input id="register-password-input" className="form-input" type="password" minLength={4} {...register("password")} required />
                </div>
                <button className="form-btn">Register</button>
            </form>
        </div>
    );
}

export default RegistrationForm;
