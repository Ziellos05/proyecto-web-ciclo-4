import React from "react";
import { Routes , Route, useNavigate  } from "react-router-dom";
import { publicListScreen, privateListScreen } from "./screenList";

const AppScreens = ({ authState }) => {

    const navigate = useNavigate();

    // const location = useLocation();
    const { isLoggedIn } = authState;    
    const screenList = isLoggedIn ? privateListScreen : publicListScreen;

    React.useEffect(() => {
        if (isLoggedIn) {
            navigate("/home");
        } else {
            navigate("/");
        }
    }, [isLoggedIn])

    return (
        <Routes >
            {
                screenList.map((screen) => (
                    <Route exact path={screen.path} element={screen.component} />
                ))
            }
        </Routes >
    )
};
export default AppScreens;