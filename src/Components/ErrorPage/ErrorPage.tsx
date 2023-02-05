import { useRouteError } from "react-router-dom";
import "./ErrorPage.scss";

function ErrorPage(): JSX.Element {
    const error: any = useRouteError(); //???
    console.error(error);

    return (
        <div className="ErrorPage">
            <div className="error-card">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <i>{error.statusText || error.message}</i>
            </div>
        </div>
    );
}

export default ErrorPage;
