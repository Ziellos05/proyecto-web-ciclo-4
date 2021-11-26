import React from "react";
import { Routes , Route, useLocation  } from "react-router-dom";
import { publicListScreen, privateListScreen } from "./screenList";

const AppScreens = ({ authState }) => {

    // const location = useLocation();
    const { isLoggedIn } = authState;    
    const screenList = isLoggedIn ? privateListScreen : publicListScreen;
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